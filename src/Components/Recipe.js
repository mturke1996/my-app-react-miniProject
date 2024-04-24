// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./Recipe.css"; 

// const Recipe = () => {
//     const [item, setItem] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { recipeId } = useParams();

//     useEffect(() => {
//         if (recipeId) {
//             fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.meals && data.meals.length > 0) {
//                         setItem(data.meals[0]);
//                     } else {
//                         setItem(null);
//                     }
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching recipe:", error);
//                     setLoading(false);
//                 });
//         }
//     }, [recipeId]);

//     if (loading) {
//         return <div className="loading">Loading...</div>;
//     }

//     if (!item) {
//         return <div className="error">Recipe not found.</div>;
//     }

//     const strYoutube = item.strYoutube;
//     const str = strYoutube.split("=");
//     const id = str[str.length - 1];

//     return (
//         <div className="recipe-container">
//             <div className="image-container">
//                 <img className="recipe-image" src={item.strMealThumb} alt={item.strMeal} />
//             </div>
//             <div className="content-container">
//                 <h1 className="recipe-title">{item.strMeal}</h1>
//                 <div className="details">
//                     <p className="area">Area: {item.strArea}</p>
//                     <p className="category">Category: {item.strCategory}</p>
//                 </div>
//                 <div className="recipe-details">
//                     <div className="section">
//                         <h2 className="section-title">Ingredients</h2>
//                         <ul className="ingredient-list">
//                             {Object.keys(item).map(key => {
//                                 if (key.includes("strIngredient") && item[key]) {
//                                     const ingredientNumber = key.slice(-1);
//                                     const measure = item[`strMeasure${ingredientNumber}`];
//                                     return (
//                                         <li key={key} className="ingredient-item">
//                                             {item[key]} - {measure}
//                                         </li>
//                                     );
//                                 }
//                                 return null;
//                             })}
//                         </ul>
//                     </div>
//                     <div className="section">
//                         <h2 className="section-title">Instructions</h2>
//                         <p className="instructions">{item.strInstructions}</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="video-container">
//                 <iframe
//                     className="recipe-video"
//                     width="100%"
//                     height="315"
//                     title="recipeVideo"
//                     src={`https://www.youtube.com/embed/${id}`}
//                     allowFullScreen
//                 ></iframe>
//             </div>
//         </div>
//     );
// };

// export default Recipe;
