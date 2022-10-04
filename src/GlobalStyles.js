import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
  }

  html, body{
    overflow-x: hidden;
  }

  body{
    background: whitesmoke;
  }

  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .Nav:focus {
    color: #462686;
    border-bottom: 3px dashed white;
    padding-bottom:10px;
  }

  button{
    background: black;
    color: white;
    text-transform: capitalize;
    font-size: 15px;
    padding: 10px 1rem;
    border: none;
    border-radius: 5px;
    font-weight: 400;
    outline: none;
    cursor: pointer;
  }

  button:hover{
    background: #333;
  }

  span{
    color: red;
    font-weight: bolder;
  }

  .admin{
    display: flex;
  }

  .formRow {
  display: inline-block;
  width: 100%;
  }

  label {
    display: block;
    width: 100%;
    text-align: left;
  }

  select {
    display: block;
    width: auto;
    float: left;
    font-size: 1rem;
    line-height: 1;
    font-weight: 300;
    text-align: left;
    padding: 10px;
    margin: 10px auto;
    border: none;
    outline: none;
    cursor: pointer;
  }

  input,
  &.checkoutInput select {
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1;
    font-weight: bold;
    text-align: left;
    padding: 10px 5px;
    margin: 10px auto;
    border: 1px solid #9e9e9e;
    outline: none;
  }
  .modal{
    width: 60%;
    margin: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0.2px 2px gray;
    padding: 2rem;
    min-width: 300px;

    button{
      margin-top: 1rem;
    }
  }
  table{
    width: 100%;
    height: auto;
    color: black;
    font-weight: bolder;
    text-transform: capitalize;

    .Adminproduct{
      padding: 10px;
    }

    img{
      height: 100px;
      width: 100px;
      object-fit: cover;
    }

    button{
      background: #b00404;
    }
  }

  #naira{
    color: black;
    text-decoration: line-through;
  }

`;

export default GlobalStyles;
