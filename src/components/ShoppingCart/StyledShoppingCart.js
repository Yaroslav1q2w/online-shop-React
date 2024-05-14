import styled from "styled-components";
import { Button, Container } from "@mui/material";
import Card from "@mui/material/Card";

export const ContainerWrapper = styled(Container)`
	position: relative;
	padding-top: 20px;
`;

export const ShoppingCartZero = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 100px;
	flex-direction: column;
	align-items: center;
`;

export const Header = styled.h1`
	font-size: 32px;
	font-weight: bold;
	text-align: center;
	padding-top: 6px;

	@media screen and (max-width: 700px) {
		font-size: 22px;
	}
`;

export const HeaderBlock = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

export const ButtonSubmit = styled(Button)``;

export const TotalPriceElem = styled.span`
	font-size: 20px;
	font-weight: 600;

	text-align: center;
	padding-top: 6px;

	@media screen and (max-width: 700px) {
		font-size: 16px;
	}
`;

export const CardWrapp = styled(Card)`
	min-height: 420px;
	display: flex;
	justify-content: space-between;
	height: 100%;
	flex-direction: column;
`;

export const Title = styled.h2`
	color: #000;
	line-height: 1;
	margin: 0;
	padding-top: 6px;
	font-weight: 500;
	font-size: 20px;
`;

export const Text = styled.p`
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 400;
	font-size: 15px;
	line-height: 1;
	letter-spacing: 0.5px;
	color: rgba(0, 0, 0, 0.6);
`;

export const ButtonBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	margin: 10px 0;
`;

export const Quantity = styled.div`
	color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	padding-top: 20px;
`;
