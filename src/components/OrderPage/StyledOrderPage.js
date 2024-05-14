import styled from "styled-components";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const ContainerWrapp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	color: #000;
	font-size: 15px;
	line-height: 1.3;
	padding: 14px 26px;
	letter-spacing: 1px;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ContentForm = styled.div`
	margin: 40px 0 40px 0;
	z-index: 1;
	height: 100%;
	font-style: normal;
	background-color: #fff;
	max-width: 430px;
	width: 100%;
	border-radius: 3px;
	transform: scale(1);
	transition: 0.5s;

	@media screen and (max-width: 800px) {
		margin-bottom: 0;
	}
`;

export const MainContent = styled.div`
	display: flex;
	justify-content: center;

	& .form {
		width: 100%;
		padding: 24px;
	}
`;

export const Header = styled.h3`
	margin: 0;
	text-align: center;
	font-weight: 700;
	font-size: 22px;
	line-height: 33px;
	text-transform: uppercase;
	padding-top: 50px;
`;

export const ButtonWrap = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
`;

export const InputItem = styled(TextField)`
	&&& {
		width: 100%;
		color: #949c9e;
		margin-bottom: 20px;
	}
`;

export const CardsOrder = styled.div`
	padding: 20px;
	margin: 40px 0 40px 0;
	max-width: 420px;
	width: 100%;
	background-color: #fff;
	border: 4px solid #ccc;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		margin-top: 0;
	}

	@media screen and (max-width: 500px) {
		padding: 20px 0 30px;
	}
`;

export const CardWrappOrder = styled.div`
	display: flex;
	position: relative;
	padding-bottom: 16px;
	margin-bottom: 16px;
	border: 2px double #c4c4c4;
	color: #000;
	padding: 10px;
	background-color: #e2e2e2;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	letter-spacing: 0.7px;
`;

export const ImageWrappOrder = styled.div`
	height: 80px;

	img {
		height: 100%;
		width: 140px;
		object-fit: cover;
	}

	@media screen and (max-width: 500px) {
		height: 60px;

		img {
			height: 100%;
			width: 100px;
		}
	}
`;

export const DescriptionOrder = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 30px;
	position: relative;

	@media screen and (max-width: 500px) {
		padding-left: 10px;
		justify-content: space-around;
	}
`;

export const NameItemOrder = styled.h3`
	font-size: 14px;
	margin: 0;
	text-transform: uppercase;

	@media screen and (max-width: 500px) {
		font-size: 12px;
	}
`;

export const CountItem = styled.span`
	font-family: "Alegreya Sans SC", sans-serif;
	font-size: 16px;
	padding-top: 6px;
`;

export const PriceOrder = styled.p`
	display: inline-block;
	padding-top: 6px;
	font-size: 15px;
	font-weight: 550;

	@media screen and (max-width: 500px) {
		font-size: 12px;
	}
`;

export const FooterContentOrder = styled.div`
	display: flex;
	margin-bottom: 10px;
	justify-content: space-between;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	padding: 0 16px;
	font-family: "Alegreya Sans SC", sans-serif;
	letter-spacing: 1px;

	@media screen and (max-width: 500px) {
		top: 20px;
		padding: 0 6px;
	}
`;

export const TotalPriceOrder = styled.div`
	font-size: 22px;
	font-weight: 600;
	text-align: center;
	color: #000;

	span {
		font-size: 18px;
		text-transform: lowercase;
	}

	@media screen and (max-width: 500px) {
		font-size: 18px;
	}
`;

export const ButtonShoppingBagOrder = styled(Link)`
	font-size: 16px;
	font-style: normal;
	padding: 14px 30px;
	color: #fafafa;
	background: #160e05;
	border: none;
	outline: none;
	cursor: pointer;
	transition: 0.5s;

	text-decoration: none;
	text-transform: uppercase;

	&:hover {
		background: #434342;
	}

	@media screen and (max-width: 500px) {
		padding: 10px 20px;
		font-size: 14px;
	}
`;
