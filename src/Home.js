import { Link } from "react-router-dom";
import month1 from "../src/paint/month1.jpg";
import arrow from "./arrow.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 m-5">
          <h1 className="text-left">
            <span className="bg-black text-white p-3">မြန်မာ ဆယ့်နှစ်လများ</span>
          </h1>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center ">
          <img
            src={month1}
            alt="month1"
            className=""
            style={{ maxWidth: "1000px", minHeight: "300px" }}
          />
          <Link to={`/Months`} className="btn-arrow">
            <img src={arrow} alt="bu" className="btn-img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
