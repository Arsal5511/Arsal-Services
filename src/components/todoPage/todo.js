import React from "react";
import "./todo.css";

const Home = () => {
  let data = [
    {
      id: 1,
      title: "Free Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, labore quidem! Numquam, aperiam atque est quidem modi, ad, molestias voluptatum id tenetur corrupti dolorum. Quo itaque ad eligendi recusandae ex?",
      src: "/images/landing-page/first-img.jpg",
    },
    {
      id: 2,
      title: "Key Features",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, labore quidem! Numquam, aperiam atque est quidem modi, ad, molestias voluptatum id tenetur corrupti dolorum. Quo itaque ad eligendi recusandae ex?",
      src: "/images/landing-page/first-img.jpg",
    },
    {
      id: 3,
      title: "About Us",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, labore quidem! Numquam, aperiam atque est quidem modi, ad, molestias voluptatum id tenetur corrupti dolorum. Quo itaque ad eligendi recusandae ex?",
      src: "/images/landing-page/first-img.jpg",
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
    <>
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
            <img src={item.src} alt="vector img" width={"500px"} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
