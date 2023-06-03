import { setToken } from "@/src/services/helper";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Layout = ({toggleTheme , selectedTheme ,  children}) => {
    return (
       <>
        <Header text={'Every Purchase Supports Local Bookstores. A Better Way to Buy Books Online.'}></Header>
        <Navbar toggleTheme={toggleTheme} selectedTheme={selectedTheme}></Navbar>
        <main>{children}</main>
        <ScrollToTop></ScrollToTop>
        <Footer></Footer>
       </>
    )
}

export default Layout;