import { useEffect, useState } from "react";
import { CardWrapper, Wrapper, Logo, AvatarWrapper, BgImg, UserInfo, UserWrapper, DecorLine, Button, Avatar  } from "./TweetCard.styled"
import logo from '../../images/logo.png'
import decorate from '../../images/decorate.png';
import { formatNum } from "../../utiles/formatNumFunc";
export const TweetCard = ({item}) =>{
const [userInfo, setUserInfo] = useState(item);

const [followed, setFollowed] = useState([]);

useEffect(()=>{
const savedFollowed = JSON.parse(window.localStorage.getItem('FollowedUsers')) ?? []

if(savedFollowed) {
  setFollowed(savedFollowed);
}
}, [])

useEffect(() =>{
    if(followed.length){
       window.localStorage.setItem('FollowedUsers', JSON.stringify(followed)) 
    }
}, [followed])



const { tweets, followers, avatar, user } = userInfo;

    const onBtnClick = () =>{
        if(followed.some(el => el.id === item.id)){
            if(item.id === followed[0].id && followed.length === 1){
               window.localStorage.removeItem('FollowedUsers')
            }
            const filtered = followed.filter(elem => elem.id !== item.id);
            setFollowed([...filtered])
            return
         } 
        
         setFollowed([item, ...followed])
        //  setUserInfo(userInfo.followers + 1)
         console.log(followers);

       
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
                    { followed.some(el => el.user === user) 
                    ? <Button onClick={onBtnClick} style={{backgroundColor: '#75B79F'}}>Following</Button> 
                    : <Button onClick={onBtnClick} style={{backgroundColor: '#EBD8FF'}}>Follow</Button> }
                </UserWrapper>
            </Wrapper>
        </CardWrapper>
    )
}