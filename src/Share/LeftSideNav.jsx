import { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">All Categories</h2>
      {categories.map((category) => (
        <NavLink
          className="block ml-8 p-2 text-gray-500"
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
      <div>
        <img className="rounded-lg"
          src={
            "https://www.imgacademy.com/sites/default/files/adult-camps-aerial.jpg"
          }
          alt=""
        />
        <h4 className="text-lg font-semibold text-gray-600">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h4>
        <div className="flex items-center gap-5 mt-1">
          <span>sports</span>
          <CiCalendarDate className="text-gray-600 text-xl" />
          <p className="text-gray-600">Jan 4, 2022</p>
        </div>
      </div>
      <div>
        <img className="rounded-lg"
          src={
            "https://www.imgacademy.com/sites/default/files/adult-camps-aerial.jpg"
          }
          alt=""
        />
        <h4 className="text-lg font-semibold text-gray-600">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h4>
        <div className="flex items-center gap-5 mt-1">
          <span>sports</span>
          <CiCalendarDate className="text-gray-600 text-xl" />
          <p className="text-gray-600">Jan 4, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
