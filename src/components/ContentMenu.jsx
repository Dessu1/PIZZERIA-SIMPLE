import React, { useEffect } from "react";

const ContentMenu = () => {
  const pizzas = [
    {
      id: 0,
      name: "Queso 1",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 1,
      name: "Queso 2",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 2,
      name: "Queso 3",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 3,
      name: "Queso 4",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 4,
      name: "Queso 5",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 5,
      name: "Queso 6",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 6,
      name: "Queso 7",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 7,
      name: "Queso 8",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
    {
      id: 8,
      name: "Queso 9",
      description:
        "Pizza con Lorem ipsum dolor sit amet consectetur adipisicing Pizza con Lorem ipsum dolor",
      precion: 2500,
    },
  ];

  return (
    <div id='container-contentMenu'>
      <div className='content'>
        <div className='row'>
          {pizzas.map((item) => (
            <div className='card' key={item.id}>
              <div className='imgPizza'>
                <img src='https://i.imgur.com/HyvPlZp.png' alt='pizza-img' />
              </div>
              <div className='desc'>
                <span>{item.name}</span>
                <span>{item.description}</span>
                <p>{item.precion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentMenu;
