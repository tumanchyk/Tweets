import { Button } from "./HomeStyles/Button.styled"
import { Title } from "./HomeStyles/Title.styled"

const Home = () =>{
    return(
        <>
            <Title>Follow your favorite super hero and read their tweets</Title>
            <Button to = "/tweets">Let's  Tweets</Button>
        </>
    )
}
export default Home 