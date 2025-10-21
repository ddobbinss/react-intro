import {outlet, link} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';   


const Layout = () => {
    return (
        <div id="page">
            <Header />
            <Navigation />
            
            <Outlet />
        </div>
    );
};

export default Layout;