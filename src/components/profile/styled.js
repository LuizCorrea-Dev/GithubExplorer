import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80vw;
  height:auto;
  display: flex;
  margin:auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding:20px;
  background-color:#F0F0F0;
  border-radius: 8px;
  border: 1px solid #ccc;

  @media (max-width: 840px) {
    flex-direction: column;
    width: 90vw; 
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding:2px;
    width:100%;
  }
`;

export const WrapperImageName = styled.div`
  margin: 8px;
  text-align: center; 
`;

export const WrapperName = styled.div`
  font-size: 32px;
  font-weight: bold;
  color:#3F3D3D; 
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between; 
  margin-left: 8px;
  width:50%;
  height: 200px;
  color:#3F3D3D;

  @media (max-width: 1100px) {
    height: 250px;
  }
  @media (max-width: 840px) {
    flex-direction: column;
    width:80%;
    height: 250px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width:95%;
    height: 300px;
  }
  
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;    
  }

`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center; 
  padding-bottom: 12px; 


  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color:#3677DA;
    font-weight: 500;
  }

`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
