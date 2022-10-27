import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

function User() {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    console.log(user);
    // getUserRepos(params.login);
  }, []);
  return <div>Username {user.login}</div>;
}

export default User;
