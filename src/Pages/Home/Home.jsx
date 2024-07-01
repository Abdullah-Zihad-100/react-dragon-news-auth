import BrakingNews from "../../Share/BrakingNews";
import Header from "../../Share/Header";
import LeftSideNav from "../../Share/LeftSideNav";
import Navber from "../../Share/Navber";
import RightSideNav from "../../Share/RightSideNav";

const Home = () => {
  return (
    <div className="m-3">
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navber></Navber>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-3xl">News coming soon</h2>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
