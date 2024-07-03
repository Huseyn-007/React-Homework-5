import React from "react";
import { useState } from "react";
import "./App.css";

export default function Form() {
  const [model, setModel] = useState("");
  const [vendor, setVendor] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");

  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      model: model,
      vendor: vendor,
      price: price,
      id: id,
      image: image,
    };
    setItems([...items, newItem]);

    setModel("");
    setVendor("");
    setPrice("");
    setId("");
    setImage("");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="inputs">
        <h1>Form</h1>
        <input
          type="text"
          placeholder="Enter your model"
          onChange={(e) => {
            setModel(e.target.value);
          }}
          value={model}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter your vendor"
          onChange={(e) => {
            setVendor(e.target.value);
          }}
          value={vendor}
        ></input>
        <br />
        <input
          type="number"
          placeholder="Enter your price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        ></input>
        <br />
        <input
          type="number"
          placeholder="Enter your id"
          onChange={(e) => {
            setId(e.target.value);
          }}
          value={id}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter your image url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
        ></input>
        <button type="submit">Submit</button>
      </form>

      <section className="datas">
        {items.map((item, index) => (
          <div key={index} className="cars">
            <img
              src={item.image}
              alt="image"
              style={{ maxWidth: "150px", marginLeft:"30px", marginTop:"30px" }}
            ></img>
            <section>
              <p>Model: {item.model}</p>
              <p>Vendor: {item.vendor}</p>
              <p>Price: {item.price}</p>
              <p>ID: {item.id}</p>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
