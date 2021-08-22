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
            <div className="mt-16">
            {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
