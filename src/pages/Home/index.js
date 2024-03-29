import React from "react";
import "styles/pages/home.scss";
import landingImg from "img/landing.svg";
import { ImPriceTag } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";
import { HiThumbUp } from "react-icons/hi";
import { ProductCard } from "components";
import { Products } from "products";
import { Link } from "react-router-dom";
import { HelmetConfig } from "utils";

function Home() {
  return (
    <>
      <HelmetConfig />
      <section id="home-top">
        <div className="container">
          <h1>
            <span className="accent">Quality</span> begins here.
          </h1>
          <img src={landingImg} alt="Stylo Stationery" />
        </div>
        <div className="features">
          <div className="container">
            <div className="grid">
              <div className="feature">
                <SiGoogleclassroom />
                <h3>Classroom friendly</h3>
              </div>
              <div className="feature">
                <HiThumbUp />
                <h3>Quality Guaranteed</h3>
              </div>
              <div className="feature">
                <ImPriceTag />
                <h3>Affordable Pricing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="best-selling">
        <div className="container">
          <h2>Best Selling Products</h2>
          <div className="grid">
            {[0, 1, 3].map((index) => (
              <ProductCard product={Products[index]} key={index} />
            ))}
          </div>
          <Link to="/products">
            <button className="view-all">View all products here.</button>
          </Link>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
          <h2>What our customers have to say</h2>
          <div className="grid">
            <p>
              " These guys are seriously good - Fast, Friendly, Excellent -
              always willing to go 'the extra 9 yards' - We've been using and
              abusing Stylo products for years now and they've never let us down
              - just try them out - you won't be disappointed.
            </p>
            <p>
              " They have a great selection of stationery items which are very
              long lasting, and durable. The compass box collection is very well
              thought out, and really great.
            </p>
            <p>
              " The chalk-duster combination is great one to use, it's really
              awesome. They are dustless and keep the hands clean.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { Home };
