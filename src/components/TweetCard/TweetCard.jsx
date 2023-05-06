import { useEffect, useState } from "react";
import { CardWrapper, Wrapper, Logo, AvatarWrapper, BgImg, UserInfo, UserWrapper, DecorLine, Button, Avatar  } from "./TweetCard.styled"
import logo from '/images/logo.png';
import decorate from '/images/decorate.png';
import { formatNum } from "../../utiles/formatNumFunc";
export const TweetCard = ({item}) =>{
const [userInfo, setUserInfo] = useState(item);

// const [followed, setFollowed] = useState([]);
// useEffect(()=>{
// const savedFollowed = JSON.parse(window.localStorage.getItem('Followed users')) ?? []

// if(savedFollowed) {
//   setFavorite(savedFollowed);
// }
// }, [])



const { tweets, followers, avatar, user } = userInfo;

    const onBtnClick = (e) =>{
        
        const btn = e.currentTarget;
        if(btn.textContent === 'Follow'){
            btn.textContent = 'Following';
            btn.style.backgroundColor = '#75B79F';
        } else if(btn.textContent === 'Following'){
            btn.textContent = 'Follow'
            btn.style.backgroundColor = '#EBD8FF';
        }
        console.log(userInfo.followers);
    }
  
    return(
        <CardWrapper>
            <Logo src={logo} />
            <BgImg src={decorate}/>           
            <Wrapper>
                <UserWrapper>
                    <DecorLine>
                    <AvatarWrapper>
                        <Avatar src={avatar}/>
                    </AvatarWrapper>
                    </DecorLine>          
                    <UserInfo style={{marginBottom: 12, fontWeight: 600,}}>{user}</UserInfo>
                    <UserInfo style={{marginBottom: 12}}>{tweets} tweets</UserInfo>
                    <UserInfo>{formatNum(followers)} followers</UserInfo>
                    <Button onClick={onBtnClick}>Follow</Button>
                </UserWrapper>
            </Wrapper>
        </CardWrapper>
    )
}