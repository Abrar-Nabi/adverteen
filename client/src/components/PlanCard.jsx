import React from "react";

const PlanCard = ({ title, description, image, bgColor, reverse,price}) => {
  return (
    <div className={`plan-card ${reverse ? "reverse" : ""}`} style={{ backgroundColor: bgColor }}>
      {/* Left: Image */}
     

      {/* Right: Text Content */}
      
      <div className="plan-image">
        <img src={image} alt={title} />
      </div>
      <div className="plan-content">
        <h2 className="plan-title">
          <span className="colored-text">{title.split(" ")[0]} {title.split(" ")[1]}</span> 
          <span className="black-text"> {title.split(" ")[2]}</span>
        </h2>
        <p className="plan-description">{description}</p>
      <h1 className="price">{price}</h1>
      </div>
      
    </div>
  );
};

export default PlanCard;
