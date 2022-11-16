import "./Home.css";
import Product from "./Product";


const Home = () => {
    return (<div>

        <div className="home_box">

            <img className="promotion_img" src="https://static.fibre2fashion.com//articleresources/images/60/5921/promotional-analysis.jpg" alt="Promotions_img" />

            <div className="home_row">
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
            </div>
        </div>



    </div>)
}

export default Home;