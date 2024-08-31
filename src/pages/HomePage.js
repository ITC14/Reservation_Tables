import CallToAction from "../compnents/CallToAction";
import Card from "../compnents/Card";
import CustomersNotices from "../compnents/CustomersNotices";
import Footer from "../compnents/Footer";
import Header from "../compnents/Header";
import Specializations from "../compnents/Specializations";
import Team from "../compnents/Team";

function HomePage(){
    return(
        <>
            <Header/>
            <CallToAction/>
            <Specializations/>
            <Card/>
            <CustomersNotices/>
            <Team/>
            <Footer/>
        </>
    )
}
export default HomePage