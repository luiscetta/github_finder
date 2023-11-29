import { GithubRepo } from "../../types/user";
import "./styles.scss";

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
                <a href={repo.html_url} className="p">
                  {repo.name}
                </a>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

export default Repositories;
