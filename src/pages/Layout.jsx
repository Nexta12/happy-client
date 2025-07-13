
import Header from "@components/header/Header";
import { Outlet} from "react-router-dom";
import styles from "./Layout.module.scss"
import Footer from "@components/footer/Footer";

const Layout = () => {
  return (
    <div className={styles.pageLayout} >
        <Header/>
       <Outlet /> 
       <Footer/>
    </div>
  );
};

export default Layout;
