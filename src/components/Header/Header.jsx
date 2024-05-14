import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LinkItem, Title, Wrapper, InnerContainer } from "./StyledHeader";
import { useSelector } from "react-redux";
import { shoppingCartSelector } from "../../selectors";

const Header = () => {
	const cartLength = useSelector(shoppingCartSelector);

	const totalCount = cartLength.reduce((acum, elem) => acum + elem.quantity, 0);

	return (
		<Wrapper>
			<InnerContainer>
				<LinkItem to={"/"}>
					<Title>Online store</Title>
				</LinkItem>

				<LinkItem to="/shopping-cart">
					<ShoppingCartIcon fontSize="large" sx={{ color: "#000" }} />
					<span className="header__cart-number">{totalCount}</span>
				</LinkItem>
			</InnerContainer>
		</Wrapper>
	);
};

export default Header;
