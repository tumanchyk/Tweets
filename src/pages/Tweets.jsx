import { TweetCards } from "../components/TweedCards/TweedCards"
import { ButtonBack, IconBack } from "../components/BtnBack/BtnBack.styled"

export const Tweets = () =>{
    return(
        <>
            <ButtonBack to={'/'}><IconBack/> Go back</ButtonBack>
            <TweetCards/>
        </>
    )
}