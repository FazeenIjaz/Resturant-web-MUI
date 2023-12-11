import React from "react";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import Button from "@mui/material/Button"

const Home = () => {
    return (
      
        <>

            <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="headerContainer">
                    <h1>Food Website</h1>
                    <p>Best Food In Pakistan</p>
                    <Link to="/menu">
                        <Button>ORDER NOW</Button>
                    </Link>
                </div>
            </div>
        </>
       
    );
};

export default Home;
