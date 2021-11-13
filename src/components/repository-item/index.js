import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ 
  name, 
  linkToRepo, 
  fullName, 
  description, 
  language,
  topics0,
  topics1,
  topics2,
  topics3,
  topics4,
  
}) => {
  return (
    <S.Wrapper>
 
      <S.WrapperTitle>{name}</S.WrapperTitle> 

      <S.WrapperDescription>{description}</S.WrapperDescription>
    
      <S.WrapperLink>   
        <a href={linkToRepo} target="_blank" rel="noreferrer">
          <span>{linkToRepo}</span>
        </a>         
        {fullName}
      </S.WrapperLink>

      <S.WrapperLanguage>{language}</S.WrapperLanguage> 

      <S.WrapperTopics>
        <span>{topics0}</span> 
        <span>{topics1}</span> 
        <span>{topics2}</span> 
        <span>{topics3}</span> 
        <span>{topics4}</span> 
      </S.WrapperTopics>    
            
    </S.Wrapper>
  );
};

export default RepositoryItem;
