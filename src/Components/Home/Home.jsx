import Banner from "./Banner";
import Populars from "./Populars";
import Recommendeds from "./Recommendeds";

const Home = () => {
    return (
        <div className="lg:px-20 ">
            <Banner></Banner>
            <Populars></Populars>
            <Recommendeds></Recommendeds>
        </div>
    );
};

export default Home;