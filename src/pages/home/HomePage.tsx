
import Products from "@widgets/ProductsScreen/index";
import Header from "../../shared/components/Header";
import '../../shared/styles/global.scss'
import Details from "../../widgets/DetailsScreen/details";
import Main from "../../widgets/MainScreen/main";
import Sponsors from "@widgets/Sponsors";
import Filler from "@widgets/FillerScreen";
import Footer from "@shared/components/Footer";

function HomePage() {
    return (
        <>
            <Header/>
            <Main />
            <Details />
            <Products />
            <Sponsors />
            <Filler />
            <Footer />
        </>
    )
}

export default HomePage;