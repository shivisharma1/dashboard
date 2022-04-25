
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Ongoing from "../../components/ongoingDeals/ongoingDeals"
import Cancelled from "../../components/cancelledDeals/cancelledDeals";
import Completed from "../../components/completedDeals/completedDeals"




export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />

      <div className="homeWidgets">
        <Ongoing/>
        
      </div>

      <div className="homeWidgets">
      <Completed/>
        
      </div>

      <div className="homeWidgets">
      <Cancelled/>
        
      </div>
    </div>
  );
}
