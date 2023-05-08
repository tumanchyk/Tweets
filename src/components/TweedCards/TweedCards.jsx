import { useEffect, useState } from "react";
import { TweetCard } from "../TweetCard/TweetCard";
import { Cards, LoadButton } from "./TweedCards.styled";
import { getAllUsers } from "../../services/api";
import { changeUserFollowers } from "../../services/api";

export const TweetCards = () =>{
    const [listUsers, setListUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const [followed, setFollowed] = useState([]);

    useEffect(()=>{
        getAllUsers().then(setListUsers)
    }, [])

    useEffect(()=>{
    const savedFollowed = JSON.parse(window.localStorage.getItem('FollowedUsers')) ?? []
    setFollowed(savedFollowed);
    }, [])

    useEffect(() => {
        if(followed.length){
            window.localStorage.setItem('FollowedUsers', JSON.stringify(followed));
        }
      }, [followed]);


    const onBtnClick = (item) =>{
        if(followed.some(el => el.id === item.id)){
            changeUserFollowers({...item, followers: item.followers - 1})
            const filtered = followed.filter(elem => elem.id !== item.id);
            if (filtered.length === 0) {
                window.localStorage.removeItem('FollowedUsers');
                setFollowed([])
            } else {
                setFollowed(filtered)
             }

         } else {
         changeUserFollowers({...item, followers: item.followers + 1})
        const newFollowed = [...followed, item];
        setFollowed(newFollowed);

         }
    }
    

    const handleBtn = () =>{
        setCurrentPage(currentPage + 1)
        getAllUsers(currentPage).then(newUsers => setListUsers([...listUsers, ...newUsers]))
    }

    return (
        <>
            <Cards>
                {listUsers ? listUsers.map(user => 
                    <TweetCard 
                        hero={user} 
                        key={user.id} 
                        onClick={onBtnClick} 
                        isFollowing={followed.some(el => el.id === user.id)}/>) 
                    : null}
            </Cards>
            {currentPage < 5 ? <LoadButton onClick={handleBtn}>Load More</LoadButton> : null}
        </>
    )
}