import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 28px;
width: 196px;
height: 50px;
background-color: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: none;
cursor: pointer;
font-weight: 600;
font-size: 22px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
margin: 0 auto;
margin-top: 40px;
text-decoration: none;

&:hover,
&:focus{
background-color: #5432A0;
color: #fff;
}
`