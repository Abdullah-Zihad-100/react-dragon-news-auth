import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
      <div className="bg-slate-100 p-2 flex items-center">
        <button className="py-2 cursor-pointer px-5 bg-[#D72050]  rounded-none text-white">
          Latest
        </button>
        <marquee className='font-semibold mx-3'>
          <Link>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos id ....
          </Link>
          <Link>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos id....
          </Link>
          <Link>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos id.....
          </Link>
        
        </marquee>
      </div>
    );
};

export default BrakingNews;