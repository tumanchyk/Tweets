import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const ButtonBack = styled(Link)`
font-size: 18px;
display: flex;
align-items: center;
text-decoration: none;
color: #fff;
margin: 30px 0 0 200px;
&:hover{
  color: #5432A0
}
`
export const IconBack = styled(BsArrowLeft)`
width: 20px;
height: 20px;
margin-right: 10px;
fill: currentColor;
`