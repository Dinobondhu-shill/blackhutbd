import TeamSection from "../Team";
import Banner from "./Banner";
import Featured from "./Featured";
import Menu from "./Menu";
import Popular from "./Popular";


const Homepage = () => {
  return (
    <div className="lg:py-10 relative top-12">
      <Banner />
     <Menu />
     <Featured />
     <Popular />
     {/* <TeamSection /> */}
    </div>
  );
};

export default Homepage;