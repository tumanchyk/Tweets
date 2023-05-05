import { TweetCard } from "../TweetCard/TweetCard";
import { getAllUsers } from "../../services/api";
import { useEffect, useState } from "react";
export const TweetCards = () =>{
    const [listUsers, setListUsers] = useState([]);
    useEffect(()=>{
        getAllUsers().then(setListUsers)
    }, [])
    // console.log(listUsers);
    return (
        <>
        <p>will</p>
        {listUsers ? listUsers.map(user => console.log(user.user)) : null}
        </>
    )
}