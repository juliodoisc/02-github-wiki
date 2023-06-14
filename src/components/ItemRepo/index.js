import React from "react";

import { ItemContainer } from "./styles";

export default function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={handleRemove}>
      <div className="container">
        <img
          src={repo.owner.avatar_url}
          alt={`avatar de ${repo.owner.login}`}
        />
        <h3>{repo.full_name}</h3>
      </div>
      <p>{repo.name}</p>
      <div>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Ver repositório
        </a>
        <a href="/" className="remover">
          Remover
        </a>
      </div>
      <hr />
    </ItemContainer>
  );
}
