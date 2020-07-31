import React from "react";

const LocationItem = () => {
  return (
    <div className="columns" style={gridstyle}>
      <div className="column is-12">
        <h1 className="title is-4">Lansdowne</h1>
        <ul>
          <li>2 Denver Rd, Lansdowne,</li>
          <li>Cape Town, 7779</li>
        </ul>
        <h2 className="title is-6">Contact Us:</h2>
        <ul>
          <li>
            <i class="fas fa-phone fa-1x" style={{ marginRight: "1rem" }}></i>{" "}
            0678383421
          </li>
          <li>
            <i
              class="far fa-envelope fa-1x"
              style={{ marginRight: "1rem" }}
            ></i>{" "}
            Lansdowne@Burgerden.co.za
          </li>
        </ul>
      </div>
      <div className="column is-12">
        <h1 className="title is-4">Grassy Park</h1>
        <ul>
          <li>41 Victoria Rd, Grassy Park,</li>
          <li>Cape Town, Western Cape 7888</li>
        </ul>
        <h2 className="title is-6">Contact Us:</h2>
        <ul>
          <li>
            <i class="fas fa-phone fa-1x" style={{ marginRight: "1rem" }}></i>{" "}
            0677383532
          </li>
          <li>
            <i
              class="far fa-envelope fa-1x"
              style={{ marginRight: "1rem" }}
            ></i>{" "}
            GrassyPark@Burgerden.co.za
          </li>
        </ul>
      </div>
    </div>
  );
};

const gridstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "1rem",
};

export default LocationItem;
