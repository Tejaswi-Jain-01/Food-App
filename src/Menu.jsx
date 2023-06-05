import React, { useEffect, useState } from "react";
import MyRerender from "./components/Rerender";
import axios from "axios";

const Menu = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {


    const apifetchdata = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/complexSearch',
        headers: {
          'Content-Type': 'application/json',
          "Accept": 'application/json',
        },
        params: {
          // apiKey: '42d94b410cf6473eabac25b3a1fe408e',
          query: 'pasta', 

        },
      };

      try {
        const response = await axios.request(options);
        const finaldata = response.data;      
        setFood(finaldata);
      } catch (error) {
        console.error(error);
      }
    };

    apifetchdata();
  }, [])


  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-gradient-to-br from-lime-500 via-emerald-400 to-teal-100 ">
          {food.results?.map((item)=>{
  console.log(item);
        return    <MyRerender props={item} />
        })}
          
      </div>
    </>
  )
}

export default Menu