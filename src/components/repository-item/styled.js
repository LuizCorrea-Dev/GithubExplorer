import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 30%;
  height: auto;
  align-content: center;
  background-color:#F0F0F0;

  @media (max-width: 1100px) {
    width:45%
  }
  @media (max-width: 840px) {
    width:100%;
    margin: 10px 0;
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperDescription = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0;
  color:#3F3D3D;
  padding-bottom:16px;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #2d3748;
  padding-bottom:16px;
`;

export const WrapperLink = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #f0f0f0; 
  span{
    color:#3182ce;
  }
`;

export const WrapperTopics = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  color: #FFFFFF;
  padding-top:6px;
  span{
    margin-right: 6px;
    padding:6px;
    border-radius: 8px;
    background-color:#068D2394; 
  }
`;

export const WrapperLanguage = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  color: #8D8406;
  padding-top:6px;
`;
