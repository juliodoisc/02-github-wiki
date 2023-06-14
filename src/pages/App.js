import { useState } from "react";
import gitLogo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";
import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (!data.id) alert("Repositório não encontrado");
    if (data) {
      const existsRepo = repos.find((repo) => repo.id === data.id);

      if (!existsRepo) {
        setRepos([...repos, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório já adicionado");
  };

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter((prev) => prev.id !== id);
    setRepos(newRepos);
  };

  return (
    <Container>
      <img src={gitLogo} alt="logo github" width={72} height={72} />
      <span>Faça buscas digitando "user/repositoryName"</span>
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          handleRemoveRepo={handleRemoveRepo}
          repo={repo}
        />
      ))}
    </Container>
  );
}

export default App;
