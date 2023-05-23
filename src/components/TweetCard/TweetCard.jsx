import PropTypes from 'prop-types';
import { useState } from "react";
import { CardWrapper, AvatarWrapper, UserInfo, UserWrapper, Button, Avatar  } from "./TweetCard.styled"
import { formatNum } from "../../utiles/formatNumFunc";

export const TweetCard = ({hero, onClick, isFollowing}) =>{
    const [userFollowers, setUserFollowers] = useState(hero.followers);
    const { tweets, avatar, user } = hero;

    return(
        <CardWrapper>
                <UserWrapper>           
                    <AvatarWrapper>
                        <Avatar src={avatar} alt='user avatar'/>
                    </AvatarWrapper>         
                    <UserInfo style={{marginBottom: 12, marginTop: 62, fontWeight: 600,}}>{user}</UserInfo>
                    <UserInfo style={{marginBottom: 12}}>{tweets} tweets</UserInfo>
                    <UserInfo>{formatNum(userFollowers)} followers</UserInfo>
                    { isFollowing 
                    ? <Button onClick={() =>{ onClick(hero); setUserFollowers(userFollowers - 1 )}} status={true} >Following</Button> 
                    : <Button onClick={() =>{ onClick(hero); setUserFollowers(userFollowers + 1 )}}  status={false} >Follow</Button> }
                </UserWrapper>
        </CardWrapper>
    )
}

TweetCard.propTypes = {
    hero: PropTypes.object,
    onClick: PropTypes.func,
    isFollowing: PropTypes.bool,
  };