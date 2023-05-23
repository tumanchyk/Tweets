import styled from "@emotion/styled";
import { FaRetweet } from "react-icons/fa";
import { Link } from "react-router-dom";

 export const Container = styled.div`
    min-height: 100vh;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    `
   export const Logo = styled(FaRetweet)`
    width: 35px;
    height: 35px;
    color: #fff;
    margin-right: 20px;
    `
    export const HomeLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 25px;
    color: #fff;
    width: 1200px;
    margin: 0 auto;
    `
    export const Header = styled.header`
    width: 100%;
    padding: 20px 210px;
    background-color: #5432A0;
    `
    