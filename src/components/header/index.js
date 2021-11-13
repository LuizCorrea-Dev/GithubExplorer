import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import logo from "../../images/logo.png"

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.WrapperImage src={logo} alt="logo github explorer" />
      <S.Wrapper>
        <h1>Explore <br/>Repositórios no Github</h1>
      </S.Wrapper>

      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Pesquisar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
