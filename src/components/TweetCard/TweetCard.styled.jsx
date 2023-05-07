import styled from "@emotion/styled";

const CardWrapper = styled.li`
position: relative;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
border-radius: 20px;
margin: 20px;
`
const Wrapper = styled.div`
display: flex;
align-items: flex-end;
height: 100%;

`
const Logo = styled.img`
position: absolute;
top: 20px;
left: 20px;
width: 76px;
height: 22px;
`
const BgImg = styled.img`
position: absolute;
top: 28px;
left: 36px;
width: 308px;
height: 168px;
`

const UserWrapper = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 70px 30px 36px 30px;
`
const DecorLine = styled.div`
position: absolute;
top: 0;
left: 0;
width: 380px;
height: 8px;
background-color: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
margin-bottom: 62px;

`
const AvatarWrapper = styled.div`
position: absolute;
display: flex;
justify-content: center;
top: -40px;
left: 150px;
box-sizing: border-box;
width: 80px;
height: 80px;
border-radius: 50%;
border: 9px solid #EBD8FF;
overflow: hidden;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`

const Avatar = styled.img`
display: block;
width: 80px;
max-height: 100%;
`

const UserInfo = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 28px;
width: 196px;
height: 50px;
background-color: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: none;
cursor: pointer;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
margin-top: 26px;

&:hover{
background-color: #75B79F;
}
`
export {CardWrapper, Wrapper,Logo, AvatarWrapper, Avatar, BgImg, UserInfo, UserWrapper, DecorLine, Button }