import React from "react";

const WinnerList = ({ listprop }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {listprop.map((el, i) => {
        if (el.projet.rate >= 6) {
          return (
            <div key={i}>
              <img width="20px" hight="20px" src={el.image} alt="" />
              <h1>{el.name}</h1>
              <p>{el.projet.namep} </p>
              <p>{el.projet.rate} </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default WinnerList;
