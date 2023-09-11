import React from "react";
import Logo from "../img/logo.png";
import { useState, useEffect } from "react";
import Card from "./Card";
import Glass from "../img/glass.svg";

function Nav(props) {
  const { handleLocationClick } = props;
  const { handlePeopleChange } = props;

  const [numberOfPeople, setNumberOfPeople] = useState(""); // To store the number of people
  const [filteredData, setFilteredData] = useState([]);

  const handleLocationClickLocal = (value) => {
    handleLocationClick(value);
    console.log(value); // Log the current clicked value
  };

  {
    /*Receives the number from the guests input */
  }
  const handlePeople = () => {
    handlePeopleChange(numberOfPeople);
    console.log(numberOfPeople);
  };

  return (
    <div>
      <div className="logo-cont">
        <img className="top-logo" src={Logo} alt="logo" />
        <div>
          <button
            type="button"
            className="btn btn-light top-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {handleLocationClick.value ? handleLocationClick : "Location"} | Add
            Guests <img className="glass" src={Glass} alt="icon" />
          </button>
        </div>
      </div>

      <div className="nav-cont">
        {/* MODAL */}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="cust-modal modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-body">
                {/* Button Inside Modal */}
                <div className="input-group mb-3">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Location
                  </button>
                  <ul className="dropdown-menu drop-cust">
                    <li value="Helsinki, Finlan">
                      <a
                        className="dropdown-item cust-item"
                        id="id1"
                        href="#"
                        onClick={() => handleLocationClickLocal("Helsinki")}
                      >
                        Helsinki, Finland
                      </a>
                    </li>
                    <li value="Turku, Finlan">
                      <a
                        className="dropdown-item cust-item"
                        id="id2"
                        href="#"
                        onClick={() => handleLocationClickLocal("Turku")}
                      >
                        Turku, Finland
                      </a>
                    </li>
                    <li value="Oulu, Finlan">
                      <a
                        className="dropdown-item cust-item"
                        id="id3"
                        href="#"
                        onClick={() => handleLocationClickLocal("Oulu")}
                      >
                        Oulu, Finland
                      </a>
                    </li>
                    <li value="Vaasa, Finlan">
                      <a
                        className="dropdown-item cust-item"
                        id="id4"
                        href="#"
                        onClick={() => handleLocationClickLocal("Vaasa")}
                      >
                        Vaasa, Finland
                      </a>
                    </li>
                  </ul>

                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Guests"
                    onChange={(e) => {
                      setNumberOfPeople(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      handlePeople();
                    }}
                    className="btn cust-button"
                    data-bs-dismiss="modal"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
