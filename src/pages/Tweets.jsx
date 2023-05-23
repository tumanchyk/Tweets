import SelectElem from "../components/Select/Select"
import { TweetCards } from "../components/TweedCards/TweedCards"
import { ButtonBack, IconBack, Wrapper } from "../components/TweetsPageStyles/BtnBack.styled"

const Tweets = () =>{
    return(
        <>
            <Wrapper>
                <ButtonBack to={'/'}><IconBack/> Go back</ButtonBack>
                <SelectElem/>
            </Wrapper>
            <TweetCards/>
        </>
    )
}
export default Tweets