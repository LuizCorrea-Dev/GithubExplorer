import styled from "styled-components";

export const WrapperImage = styled.img`
 display:block;
 margin:auto;
 padding-bottom: 50px;
 width: 250px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 4px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction:column;
  }

  input {
    color:#3F3D3D;
    font-size: 20px;
    width: 60%;
    height: 44px;
    padding: 32px 16px;
    font-weight: 400;
    background-color:#ffffff; 

    @media (max-width: 500px) {
      width: 95%;
    }   
  }

  button {
    background-color: #00D568;
    padding: 8px 32px;
    margin: 0 16px;

    @media (max-width: 500px) {
      width: 95%;
      margin: 10px 0px;
      text-align:center;
    } 

    &:hover {
      background-color: #0A8345;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }

  h1 {
    font-size: 50px;    
    font-weight: 600;
    color:#3F3D3D;
    line-height: 1.3;
    margin-bottom:50px;
  }
`;
