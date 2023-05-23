import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-item: center;
width: 1200px;
margin: 0 auto;
margin-top: 30px;
`

export const ButtonBack = styled(Link)`
font-size: 18px;
display: flex;
align-items: center;
text-decoration: none;
color: #fff;
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