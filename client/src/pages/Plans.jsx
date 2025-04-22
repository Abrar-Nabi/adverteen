import React from "react";
import PlanCard from "../components/PlanCard";
import "../styles/Plans.css";

// Import images
import starterImg from "../assets/mob.jpg";
import builderImg from "../assets/mob.jpg";
import scaleImg from "../assets/mob.jpg";

const Plans = () => {
  return (
    <div className="plans-container">
      <PlanCard
       image={starterImg}
        title="Brand Starter Plan"
        description="Content Ideas 
12-15 Stories
7-8 Pics / Graphics
4-5 Reels 
Festive Graphics
1 Promotional Reel with TOA 
5 Stories on the TOA Page 
Social Media Optimization
Monthly Analytic Report 
12% Quarterly Discount
20% Half Yearly Discount
30% Yearly Discount"
       
price="₹12,500 "

      />
      <PlanCard
        title="Brand Builder Plan"
        description="Content Ideas 
12-15 Stories
7-8 Pics / Graphics
4-5 Reels 
Festive Graphics
1 Promotional Reel with TOA 
5 Stories on the TOA Page 
Social Media Optimization
Monthly Analytic Report 
12% Quarterly Discount
20% Half Yearly Discount
30% Yearly Discount"
        image={builderImg}


      />
      <PlanCard
        title="Brand Scale Plan"
        description="Content Ideas 
12-15 Stories
7-8 Pics / Graphics
4-5 Reels 
Festive Graphics
1 Promotional Reel with TOA 
5 Stories on the TOA Page 
Social Media Optimization
Monthly Analytic Report 
12% Quarterly Discount
20% Half Yearly Discount
30% Yearly Discount"
        image={scaleImg}


      />
    </div>
  );
};

export default Plans;
