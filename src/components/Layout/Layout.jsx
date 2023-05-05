import { Container, Logo, HomeLink, Header} from './Layout.styled'
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/appBar
 
export const Layout = () => {
return (
<Container>
    <Header>
        <HomeLink to="/"> 
            <Logo/>
            Tweets  
        </HomeLink>
    </Header>
    <Suspense>
        <Outlet />
    </Suspense>
</Container>
)


}