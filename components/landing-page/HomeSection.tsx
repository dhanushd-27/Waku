import React from "react";

/**
 * HomeSection
 * ----
 * Main hero section of the landing page with primary messaging.
 */
export const HomeSection: React.FC = () => {
  return (
    <section id="home" className="landing-section">
      <div className="landing-container">
        <h1 className="landing-heading">Welcome to Waku</h1>
        <p className="landing-subheading">
          Transform your images with precision and style
        </p>
        <p className="landing-text">
          Upload an image. Choose a platform. Download a perfect fit.
        </p>
      </div>
    </section>
  );
};

