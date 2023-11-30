import { GithubRepo } from "../../types/user";
import "./styles.scss";
import DotLng from "../DotLng";

type ReposComponentProps = {
  data: GithubRepo[];
};

const Repositories = ({ data }: ReposComponentProps) => {
  return (
    <div className="repos-container">
      <div className="repos-content">
        <>
          {data
            .filter((_repo, index) => index < 10)
            .map((repo) => (
              <div className="repo-card" key={repo.id}>
                <div className="repo-card-title">
                  <a className="repo-name" href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                </div>
                <div className="repo-description">
                  {repo.description ? (
                    <p className="description">{repo.description}</p>
                  ) : (
                    <p className="description">Sem descrição.</p>
                  )}
                </div>
                <footer className="repo-language">
                  <DotLng language={repo.language} />
                  <span className="lng">{repo.language}</span>
                </footer>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

export default Repositories;
