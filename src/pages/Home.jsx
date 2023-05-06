import { Link } from "react-router-dom"
import { Button } from "../components/Home/Button.styled"
import { Title } from "../components/Home/Title.styled"
export const Home = () =>{
    return(
        <>
            <Title>Follow your favorite super hero and read their tweets</Title>
            <Button to = "/tweets">Let's  Tweets</Button>
        </>
    )
}