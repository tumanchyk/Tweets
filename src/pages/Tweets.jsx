import { TweetCards } from "../components/TweedCards/TweedCards"
import { ButtonBack, IconBack } from "../components/TweetsPageStyles/BtnBack.styled"

const Tweets = () =>{
    return(
        <>
            <ButtonBack to={'/'}><IconBack/> Go back</ButtonBack>
            <TweetCards/>
        </>
    )
}
export default Tweets