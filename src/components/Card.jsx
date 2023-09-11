import React from "react";
import { useEffect, useState } from "react";
import MySvg from "../img/star.svg";
function Card(props) {
  const [data, setData] = useState([]);
  const { selectedLocation } = props; // Recibe la ubicacion seleccionada
  const { numberOfPeople } = props; // recibe el number de personas del input
  const numbPeople = +numberOfPeople;

  // Función para traer los datos de "stays.json".

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {/* Filter data with ternary operator and filter method*/}
        <h3 className="stays">Stays in Finland</h3>
        <div className="container">
          {(numbPeople && selectedLocation
            ? data.filter(
                (el) =>
                  el.city === selectedLocation && el.maxGuests === numbPeople
              )
            : data
          ).map((el, i) => (
            <div className="card" key={i}>
              <img className="room-photo" src={el.photo} alt="Room image" />
              <div className="card-info">
                {el.superHost ? (
                  <span id="superhost2">SuperHost</span>
                ) : (
                  <span className="hid">""</span>
                )}

                <span className="apartment">
                  {el.type}{" "}
                  {el.type === "Entire apartment" && el.beds !== null
                    ? `${el.beds} beds`
                    : ""}
                </span>
                <span className="rating">
                  <img className="star" src={MySvg} alt="icon" />
                  {el.rating}
                </span>
                <p className="info">
                  <b>{el.title}</b>
                </p>
              </div>
            </div>
          ))}
          {/* <p className="warning">NO RESULTS</p> */}
        </div>
      </div>
    </>
  );
}

export default Card;
