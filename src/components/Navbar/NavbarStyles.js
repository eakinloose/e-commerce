import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  padding: 1.5rem 5rem ;
  color: black;
  
  h1{
    color: black;
    font-weight: 300;
    font-size: clamp(14px, 5vw, 25px);
  }

  .home{
    display: flex;
    min-width: 230px;
    justify-content: space-between;
  }

  @media screen and (max-width: 799px){
    padding: 1rem;
    .home{
      min-width: 190px;
    }
  }
`

export const NavLinks = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;


  .lastChild{
    margin-left: 3rem;
  }
  
  p{
    color: black;
    font-weight: 400;
    cursor: pointer;
  }
  
  p:hover{
    font-weight: bolder;
  }
  
  img{
    margin-left: 3rem;
    height: 20px;
  }

`