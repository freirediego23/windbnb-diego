import React from "react";
import { useEffect, useState } from "react";
import Logo from "../img/logo.png";
function Test() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(""); // To store the selected location
  const [numberOfPeople, setNumberOfPeople] = useState(""); // To store the number of people
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);

  const filterData = () => {
    // Filter data based on location
    const filteredByLocation = data.filter((el) => {
      return el.city.toLowerCase() === location.toLowerCase();
    });

    // Filter further based on the number of people
    const filteredByPeople = filteredByLocation.filter((el) => {
      if (numberOfPeople === "") {
        return true; // No filter applied if numberOfPeople is empty
      }
      return el.maxGuests >= parseInt(numberOfPeople);
    });

    // Use the finalFilteredData to display the results
    setFilteredData(filteredByPeople);
  };
  return (
    <>
      {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}

      <div>
        <div className="logo-cont">
          <img className="top-logo" src={Logo} alt="logo" />
        </div>

        <div className="nav-cont">
          {/* MODAL */}

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="cust-modal modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setShowModal(false);
                      setFilteredData([]);
                    }}
                  ></button>
                </div>
                <div class="modal-body">
                  {/* Button Inside Modal */}
                  <div class="input-group mb-3">
                    <button
                      class="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      da
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Location
                    </button>
                    <ul class="dropdown-menu drop-cust">
                      <li>
                        <a class="dropdown-item cust-item" href="#">
                          Helsinki, Finland
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item cust-item" href="#">
                          Turku, Finland
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item cust-item" href="#">
                          Oulu, Finland
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item cust-item" href="#">
                          Vaasa, Finland
                        </a>
                      </li>
                    </ul>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with dropdown button"
                    />
                    <button onClick={filterData} class="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="stays">Stays in Finland</h3>
        </div>
        <div className="container">
          {filteredData.map((el, i) => {
            return (
              <div className="container">
                <div className="card" key={i}>
                  <div className="card" key={i}>
                    <img
                      className="room-photo"
                      src={el.photo}
                      alt="Room image"
                    />
                    <div className="card-info">
                      <h5>{el.city}</h5>
                      <p>{el.superHost ? "Superhost" : ""}</p>
                      <span>
                        {el.type}{" "}
                        {el.type === "Entire apartment" && el.beds !== null
                          ? `${el.beds} beds`
                          : ""}
                      </span>
                      <span>{el.rating}</span>
                      <p>
                        <b>{el.title}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Test;
