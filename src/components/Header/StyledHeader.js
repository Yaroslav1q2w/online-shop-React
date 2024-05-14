import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
	background-color: #ccc;
`;

export const InnerContainer = styled.div`
	height: 80px;
	max-width: 1200px;
	padding: 0 10px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.header__cart-number {
		color: #000;
		text-decoration: none;
	}
`;

export const Title = styled.h1`
	font-size: 34px;
	font-weight: bold;
	padding-bottom: 3px;
	text-shadow: 2px 2px 1px #8a8a8a;
	color: #000;
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
`;
