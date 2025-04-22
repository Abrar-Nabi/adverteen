import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/global.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home-container">
      {/* Floating words */}
      <span className="floating-word marketing">Marketing</span>
      <span className="floating-word seo">SEO</span>
      <span className="floating-word content">Content creation</span>
      <span className="floating-word ads">ads</span>

      {/* Heading */}
      <h1 className="bold-text">
        what’s <span className="word">included</span> in our{" "}
        <span className="word">social</span> media{" "}
        <span className="word">packages?</span>
      </h1>

      {/* See Plans Button */}
      <a href="/plans">
        <button className="see-plans-btn">See Plans</button>
      </a>

      {/* Terms and Conditions Button */}
      <p className="terms">
        <button className="terms-btn" onClick={openModal}>
          Terms and Conditions
        </button>
      </p>

      

      {/* Modal */}
      {isModalOpen && (
        <div className="custom-modal-overlay" onClick={closeModal}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Terms & Conditions</h2>
            </div>

            <div className="modal-body">
              <h4>1. Payment Terms</h4>
              <ul>
                <li>60% advance required before starting Brand Builder & Scale Plan.</li>
                <li>Remaining 40% due in the third week of the plan month.</li>
                <li>5% off on 100% upfront payment.</li>
                <li>10% off on quarterly upfront payments.</li>
              </ul>

              <h4>2. Revisions and Feedback</h4>
              <ul>
                <li>2 revisions for Starter Plan; 3 for Builder & Scale Plan.</li>
                <li>Feedback must be within 3 business days or it's approved by default.</li>
              </ul>

              <h4>3. Project Scope</h4>
              <ul>
                <li>Scope defined in the proposal. Changes may cost extra.</li>
                <li>Extra shoots, locations, equipment = separately billed.</li>
              </ul>

              <h4>4. Content Rights</h4>
              <ul>
                <li>Client owns final content after full payment.</li>
                <li>We may use non-confidential content for promotions.</li>
              </ul>

              <h4>5. Legal Agreement</h4>
              <p>
                Engaging with Adverteen Marketing Solution confirms your agreement to
                these terms — this acts as a binding contract between both parties.
              </p>
              <div className="modal-footer">
                <button className="close-btn" onClick={closeModal}>Close</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
