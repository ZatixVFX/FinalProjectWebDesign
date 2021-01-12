import React from "react";

export const BurgerModal = ({ item, activeModal, modalID }) => {
  return (
    <div className={`modal ${activeModal}`} id={modalID}>
      <div className="modal-background"></div>
      <div className="modal-content modal-card">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-128x128">
                  <img src={item.img} alt={item.title} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <h1 className="title is-4">{item.title}</h1>
                </div>
                <div className="content">
                  <h2 className="title is-5">
                    R{item.price} <i className="fas fa-plus-circle"></i>Add to
                    cart
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export default BurgerModal;
