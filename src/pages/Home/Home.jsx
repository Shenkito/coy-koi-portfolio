import Hero from "../../components/Hero/Hero";
import MyServices from "../../components/MyServices/MyServices";
// Uncomment the next line if you wish to include the NavBar on the home page
// import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Hero />
            <MyServices />
        </>
    );
};

export default Home;
