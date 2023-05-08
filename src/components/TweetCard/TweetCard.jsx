import PropTypes from 'prop-types';
import { useState } from "react";
import { CardWrapper, Wrapper, Logo, AvatarWrapper, BgImg, UserInfo, UserWrapper, DecorLine, Button, Avatar  } from "./TweetCard.styled"
import logo from '../../images/logo.png'
import decorate from '../../images/decorate.png';
import { formatNum } from "../../utiles/formatNumFunc";

export const TweetCard = ({hero, onClick, isFollowing}) =>{
    const [userFollowers, setUserFollowers] = useState(hero.followers);
    const { tweets, avatar, user } = hero;

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
                    <UserInfo>{formatNum(userFollowers)} followers</UserInfo>
                    { isFollowing 
                    ? <Button onClick={() =>{ onClick(hero); setUserFollowers(userFollowers - 1 )}} style={{backgroundColor: '#75B79F'}}>Following</Button> 
                    : <Button onClick={() =>{ onClick(hero); setUserFollowers(userFollowers + 1 )}} style={{backgroundColor: '#EBD8FF'}}>Follow</Button> }
                </UserWrapper>
            </Wrapper>
        </CardWrapper>
    )
}

TweetCard.propTypes = {
    hero: PropTypes.object,
    onClick: PropTypes.func,
    isFollowing: PropTypes.bool,
  };