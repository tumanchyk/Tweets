import { CardWrapper, Wrapper, Logo, AvatarWrapper, BgImg, UserInfo, UserWrapper, DecorLine, Button  } from "./TweetCard.styled"
import logo from '/images/logo.png';
import decorate from '/images/decorate.png';

export const TweetCard = () =>{
    return(
        <CardWrapper>
            <Logo src={logo} />
            <BgImg src={decorate}/>
            
            <Wrapper>
                <UserWrapper>
                    <DecorLine>
                    <AvatarWrapper></AvatarWrapper>
                    </DecorLine>          
                    <UserInfo>tweets</UserInfo>
                    <UserInfo>followers</UserInfo>
                    <Button>Follow</Button>
                </UserWrapper>
            </Wrapper>
        </CardWrapper>
    )
}