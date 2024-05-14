import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";

export const CardWrapp = styled(Card)`
	position: relative;
	min-height: 420px;
	display: flex;
	justify-content: space-between;
	height: 100%;
	flex-direction: column;
	transition: 0.3s ease;
	overflow: hidden;

	&:hover {
		background-color: #ddd;
		transition: 0.3s ease;
	}
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
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
