import React from "react";
import "./Home.css";


const Home = () => {
  let data = [
    {
      id: 1,
      title: "Todo App",
      description:
        "Presenting the Todo App - your go-to task manager! Easily plan, edit, and delete tasks with three tabs: Recent, Today, and Upcoming. Stay on top of your goals by marking tasks as done. Streamline your schedule for ultimate productivity. Try it now and make every day count!",
      src: "/images/landing-page/4905784.jpg",
    },
    {
      id: 2,
      title: "World Stats",
      description:
        "Introducing World Stats - your passport to global information! Simply search any country by name and unlock a treasure trove of data, including its capital city, official name, population, area, currencies, and languages. Effortlessly copy and paste details with the click of a button. Stay informed, explore the world, and enhance your global knowledge with World Stats!",
      src: "/images/landing-page/4567334.jpg",
    },
    {
      id: 3,
      title: "About Us",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, labore quidem! Numquam, aperiam atque est quidem modi, ad, molestias voluptatum id tenetur corrupti dolorum. Quo itaque ad eligendi recusandae ex?",
      src: "/images/landing-page/3236267.jpg",
    },
  ];
  function checkOddEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  return (
    <section>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${checkOddEven(index + 1) === "Odd"
            ? "main-section"
            : " main-section-reverse"
            }`}
        >
          <div className="main-content">
            <h1 className="section-heading">{item.title}</h1>
            <p className="section-description">{item.description}</p>
          </div>
          <div className="main-image main-content">
            <img src={item.src} alt="vector img" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
