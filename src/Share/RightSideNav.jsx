import { FaFacebook, FaGithub, FaGoogle, 
FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "/src/assets/qZone1.png";
import qZone2 from "/src/assets/qZone2.png";
import qZone3 from "/src/assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      {/* login with google and github */}
      <div className="space-y-2 mb-10">
        <h2 className="text-xl font-bold mb-3">Login with</h2>
        <button className="btn font-normal custom-btn h-8 btn-outline rounded border-blue-500 w-full">
          <FaGoogle className="text-blue-500" /> Login with Google
        </button>


        <button className="btn font-normal btn-outline custom-btn h-8 rounded border-blue-500 w-full">
          <FaGithub className="text-black-500" /> Login with Github
        </button>
      </div>

      {/* find us */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Find Us On</h2>

        <a
          href=""
          className="w-full flex items-center gap-3 p-4 rounded-t-md border"
        >
          <div className="rounded-full flex justify-center items-center p-2 bg-slate-200">
            {" "}
            <FaFacebook className="text-blue-800" />
          </div>{" "}
          <span>Facebook</span>
        </a>
        <a href="" className="w-full flex items-center gap-3 p-4 border-x">
          <div className="rounded-full flex justify-center items-center p-2 bg-slate-200">
            <FaTwitter className="text-blue-500" />
          </div>
          <span>Twitter</span>
        </a>
        <a
          href=""
          className="w-full flex rounded-b-md items-center gap-3 p-4 border rounded"
        >
          <div className="rounded-full flex justify-center items-center p-2 bg-slate-200">
            <FaInstagram className="text-red-600" />
          </div>
          <span>Instagram</span>
        </a>
      </div>

      {/* q zone  */}
      <div className="bg-gray-100 p-3 mt-5">
        <h2 className="text-xl font-semibold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
