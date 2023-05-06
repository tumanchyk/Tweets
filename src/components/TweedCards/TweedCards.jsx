import { useEffect, useState } from "react";
import { Cards, Button } from "./TweedCards.styled";
import { TweetCard } from "../TweetCard/TweetCard";
import { getAllUsers } from "../../services/api";

export const TweetCards = () =>{
    const [listUsers, setListUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);

    useEffect(()=>{
        getAllUsers().then(setListUsers)
    }, [])

    const handleBtn = () =>{
        setCurrentPage(currentPage + 1)
        getAllUsers(currentPage).then(newUsers => setListUsers([...listUsers, ...newUsers]))
    }

    return (
        <>
            <Cards>
                {listUsers ? listUsers.map(user => <TweetCard item={user} key={user.id}/>) : null}
            </Cards>
            {currentPage < 5 ? <Button onClick={handleBtn}>Load More</Button> : null}
        </>
    )
}