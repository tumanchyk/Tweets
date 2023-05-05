import { Link } from "react-router-dom"
import { Button } from "../components/TweetCard/TweetCard.styled"
import { getAllUsers } from "../services/api"
export const Home = () =>{
    return(
        <>
            <Link to = "/tweets">Tweets</Link>
            <Button onClick={getAllUsers}>hjhjk</Button>
        </>
    )
}