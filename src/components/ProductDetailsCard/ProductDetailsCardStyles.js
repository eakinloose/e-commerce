import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   padding: 2rem;
   width: 90%;
   margin: auto;
   padding-top: 80px;
   text-transform: capitalize;
   font-weight: 300;

   img {
      width: 320px;
      height: 350px;
      margin: 1rem 0;
      object-fit: cover;
      border-radius: 5px;
   }
   
   h1 {
      font-weight: 300;
      padding: 0.5rem 0;
   }
   h3,
   h4 {
      margin: 1rem 0;
      font-weight: 300;
   }
   
   @media screen and (max-width: 799px){
      display: block;
      width: 100%;
      padding: 5rem 0.7rem;

      img {
      width: 200px;
      height: 250px;
      object-fit: cover;
      border-radius: 5px;
   }
   
   h1 {
      font-weight: 300;
      padding: 0.5rem 0;
   }
   h3,
   h4 {
      margin: 0.5rem 0;
   }
  }
`;

export const Desc = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 6rem;
   justify-content: center;

   p {
      line-height: 1.8;
      width: 90%;
      padding-bottom: 0.8rem 0rem;
   }

   ul li{
      margin-left: 20px;
   }
   @media screen and (max-width: 799px){

      padding: 0.1rem;
     p{
        width: 100%;
        padding: 0.3rem;
        line-height: 1.3;
     } 
   }
   
`;

