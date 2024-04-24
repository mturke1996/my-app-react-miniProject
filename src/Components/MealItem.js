import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MealItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const MealItem = ({ data }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = (meal) => {
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedMeal(null);
    setShowModal(false);
  };

  return (
    <div className="meal-container">
      {!data
        ? "Not Found"
        : data.map((item) => (
            <div className="meal-card" key={item.idMeal}>
              <img
                className="meal-image"
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              <div className="meal-details">
                <h3 className="meal-title">{item.strMeal}</h3>
                <p className="meal-category">Category: {item.strCategory}</p>
                <p className="meal-tags">
                  Tags:{" "}
                  {item.strTags ? item.strTags.split(",").join(", ") : "N/A"}
                </p>
                <Button className="btn" variant="primary" onClick={() => handleModalShow(item)}>
                  Show Recipe
                </Button>
              </div>
            </div>
          ))}

      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedMeal ? selectedMeal.strMeal : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMeal && (
            <div className="recipe-details">
              <img
                className="modal-meal-image"
                src={selectedMeal.strMealThumb}
                alt={selectedMeal.strMeal}
              />
              <div className="section">
                <h2 className="section-title">Ingredients</h2>
                <ul className="ingredient-list">
                  {Object.keys(selectedMeal).map((key) => {
                    if (key.includes("strIngredient") && selectedMeal[key]) {
                      const ingredientNumber = key.slice(-1);
                      const measure = selectedMeal[`strMeasure${ingredientNumber}`];
                      return (
                        <li key={key} className="ingredient-item">
                          {selectedMeal[key]} - {measure}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
              <div className="section">
                <h2 className="section-title">Instructions</h2>
                <p className="instructions">{selectedMeal.strInstructions}</p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MealItem;
