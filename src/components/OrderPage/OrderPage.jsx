import { useState } from "react";
import {
	MainContent,
	ContentForm,
	Header,
	ContainerWrapp,
	ButtonWrap,
	InputItem,
	CardsOrder,
	CardWrappOrder,
	ImageWrappOrder,
	DescriptionOrder,
	NameItemOrder,
	CountItem,
	PriceOrder,
	FooterContentOrder,
	TotalPriceOrder,
} from "./StyledOrderPage";
import { Container, Button } from "@mui/material";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { validationSchema } from "./validation";
import { shoppingCartSelector } from "../../selectors";
import Modal from "../Modal";
import { clearCart } from "../../reducers";
import { useNavigate } from "react-router-dom";
import { init, send } from "emailjs-com";

const OrderPage = () => {
	const [isModal, setIsModal] = useState(false);

	init("9VFiCnV0zpHAtARGe");

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartItems = useSelector(shoppingCartSelector);

	const totalPrice = cartItems.reduce(
		(acum, elem) => acum + elem.price * elem.quantity,
		0
	);

	const orderCards = cartItems?.map((card) => (
		<CardWrappOrder key={card.id}>
			<ImageWrappOrder>
				<img src={card.image} alt="" />
			</ImageWrappOrder>
			<DescriptionOrder>
				<NameItemOrder>{card.title}</NameItemOrder>
				<CountItem>Кількість: {card.quantity} шт.</CountItem>
				<PriceOrder>{card.price * card.quantity} $</PriceOrder>
			</DescriptionOrder>
		</CardWrappOrder>
	));

	const handlerModalSubmit = async (values) => {
		const orderData = {
			user: values,
			products: cartItems,
		};

		console.log(orderData);

		const templateParams = {
			to_email: values.email,
			name: values.name,
			email: values.email,
			phone: values.phone,
			products: JSON.stringify(orderData.products),
		};

		try {
			await send("service_v9pkoei", "template_pbpva6s", templateParams);

			console.log("Email sent successfully");
		} catch (error) {
			console.error("Error sending email:", error);
		}

		setIsModal(true);
	};

	const handlerModalClick = () => {
		setIsModal(!isModal);
		dispatch(clearCart());
		navigate("/");
	};

	return (
		<Container>
			<Header> Форма замовлення</Header>

			<ContainerWrapp>
				<ContentForm>
					<Formik
						initialValues={{
							name: "",
							email: "",
							phone: "",
						}}
						validationSchema={validationSchema}
						onSubmit={async (values) => {
							handlerModalSubmit(values);
						}}
					>
						{(props) => (
							<MainContent>
								<form className="form" onSubmit={props.handleSubmit}>
									<InputItem
										variant="standard"
										name="name"
										label="Ім'я"
										value={props.values.name}
										onChange={props.handleChange}
										error={props.touched.name && Boolean(props.errors.name)}
										helperText={props.touched.name && props.errors.name}
									/>
									<InputItem
										variant="standard"
										name="email"
										label="Email"
										value={props.values.email}
										onChange={props.handleChange}
										error={props.touched.email && Boolean(props.errors.email)}
										helperText={props.touched.email && props.errors.email}
									/>
									<InputItem
										variant="standard"
										name="phone"
										label="Номер телефону"
										value={props.values.phone}
										onChange={props.handleChange}
										error={props.touched.phone && Boolean(props.errors.phone)}
										helperText={props.touched.phone && props.errors.phone}
									/>

									<ButtonWrap>
										<Button variant="contained" color="success" type="submit">
											Ok
										</Button>
									</ButtonWrap>
								</form>
							</MainContent>
						)}
					</Formik>
				</ContentForm>

				<CardsOrder>
					<>
						{orderCards}

						<FooterContentOrder>
							<TotalPriceOrder>
								Загальна сума : <span>{totalPrice.toFixed(2)} $</span>
							</TotalPriceOrder>
						</FooterContentOrder>
					</>
				</CardsOrder>
			</ContainerWrapp>

			{isModal && (
				<Modal
					text="Дякуюємо за покупку! Очікуйте на повідомлення."
					onClick={handlerModalClick}
				/>
			)}
		</Container>
	);
};

export default OrderPage;
