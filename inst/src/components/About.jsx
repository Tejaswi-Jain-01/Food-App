import React from "react";
import about from "../../src/image/about.jpg"

export const About = () => {
  return (
    <>
      <div class="relative ">
        <img src={about} class="object-cover w-full h-[40rem]   opacity-75" alt="" />
        <div class="absolute inset-0 flex items-center justify-center   m-auto p-auto">
          <h1 class="text-xl text-black font-bold container md:w-[50rem] bg-black bg-opacity-25">
            <h1 className=" md:ml-[18rem] sm:mb-[2rem] text-6xl">About Us</h1>
            Homefoodi is a reliable and convenient Home food delivery service that operates in several major Indian cities, including Noida, Delhi, Ghaziabad, Gurgaon, Hyderabad, Bangalore, and Mumbai. With Homefoodi, you can enjoy a delicious and healthy meal delivered straight to your doorstep without having to leave your house.

            The service is designed to cater to busy individuals who don't have the time to cook or those who want to enjoy a home-cooked meal without having to prepare it themselves.

            Homefoodi's network of experienced and skilled home chefs prepare the meals with fresh and high-quality ingredients, ensuring that each meal is tasty and healthy.Homefoodi offers a diverse menu of Indian and international dishes, with options for vegetarian and non-vegetarian meals.

            Our Home Food Delivery service also provides customized meal plans to cater to specific dietary needs.With reliable service and high-quality food, Homefoodi is the perfect solution for anyone looking for a convenient and healthy Online Food Delivery in these cities.</h1>
        </div>
      </div>
    </>
  )
}