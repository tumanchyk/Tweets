import { Container, Logo, HomeLink, Header} from './Layout.styled'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
 
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