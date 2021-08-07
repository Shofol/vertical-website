import Navbar from './Navbar';
import Footer from './Footer';
import Meta from '../Utilities/Meta'


const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <header>
                <Navbar />
            </header>
            {children}
            <Footer />
        </>
    )
}

export default Layout
