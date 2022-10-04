import styled from "styled-components";

export const CheckoutWrapper = styled.div`
   width: 70%;
   margin: auto;
   padding-top: 120px;

   h1 {
      font-weight: 300;
      text-align: center;
      margin-bottom: 1.3rem;
   }

   img {
      width: 100px;
      border-radius: 5px;
   }

   th {
      padding: 2rem;
      font-size: 17px;
   }
   td {
      transform: translateX(3.8rem);
   }
   .quantity {
      transform: translateX(0);
      text-align: center;
   }
   #btn,
   #btn2 {
      cursor: pointer;
      color: black;
      padding: 0.5rem;
   }
`;

export const CartWrapper = styled.div`
   th,
   td,
   span {
      font-weight: 300;
   }
`;

export const Bottom = styled.div`
   margin-top: 3rem;
   display: flex;
   justify-content: space-between;

   h3 {
      font-weight: 300;
   }
`;
