import React from "react";
import women from "../../assets/women clothes.webp";
import men from "../../assets/men clothes.webp";
import { BannerWrapper, ImageWrapper } from "./BannerStyles";
import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <>
         <BannerWrapper>
            <ImageWrapper>
               <img className="men-clothes" src={men} alt="men clothes" />
               <button>
                  <Link to="/search/mens">men's Shop</Link>
               </button>
               <p>The one stop shop for African mens clothes.</p>
            </ImageWrapper>
            <ImageWrapper>
               <img src={women} alt="women clothes" />
               <button>
                  <Link to="/search/womens">Women's Shop</Link>
               </button>
               <p>
                  Walk and look glamorous in the Ankara and African native for
                  ladies.
               </p>
            </ImageWrapper>
         </BannerWrapper>
      </>
   );
};

export default Banner;
