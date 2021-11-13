import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                  language={item.language}
                  topics0={item.topics[0]}
                  topics1={item.topics[1]}
                  topics2={item.topics[2]}
                  topics3={item.topics[3]}
                  topics4={item.topics[4]}
                  topics5={item.topics[5]}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                  language={item.language}
                  topics0={item.topics[0]}
                  topics1={item.topics[1]}
                  topics2={item.topics[2]}
                  topics3={item.topics[3]}
                  topics4={item.topics[4]}
                  topics5={item.topics[5]}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
