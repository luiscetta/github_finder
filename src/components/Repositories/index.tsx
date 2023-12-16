import { FaRegStar as Star } from "react-icons/fa";
import { FaCodeFork as Fork } from "react-icons/fa6";
import { RiGitRepositoryLine } from "react-icons/ri";

import { GithubRepo } from "../../types/user";
import DotLng from "../DotLng";
import FormatNumber from "../../utils/formatNumber";
import TruncateText from "../../utils/TruncateText";
import "./styles.scss";

type ReposComponentProps = {
  data: GithubRepo[];
};

const Repositories = ({ data }: ReposComponentProps) => {
  return (
    <div className="repos-container">
      <div className="repo-title-content">
        <h5 className="repo-title">Repositories</h5>
      </div>
      <div className="repos-content">
        <>
          {data
            .filter((_repo, index) => index < 10)
            .map((repo) => (
              <div className="repo-card" key={repo.id}>
                <div className="repo-card-title">
                  <RiGitRepositoryLine className="repo-icon" />
                  <a className="repo-name" href={repo.html_url} target="_blank">
                    {repo.name && (
                      <TruncateText text={repo.name} maxLength={40} />
                    )}
                  </a>
                  <span className="repo-visibility">{repo.visibility}</span>
                </div>
                <div className="repo-description">
                  {repo.description && (
                    <TruncateText
                      className="description"
                      text={repo.description}
                      maxLength={40}
                    />
                  )}
                </div>
                <footer className="repo-footer">
                  <div
                    className="lng-content"
                    style={{ display: repo.language ? "flex" : "none" }}
                  >
                    <DotLng language={repo.language} />
                    <span className="lng">{repo.language}</span>
                  </div>
                  <div className="star-content">
                    <Star className="star-icon" />
                    <span className="star-count">
                      {FormatNumber(repo.stargazers_count)}
                    </span>
                  </div>
                  <div className="fork-content">
                    <Fork className="fork-icon" />
                    <span className="fork-count">
                      {FormatNumber(repo.forks_count)}
                    </span>
                  </div>
                </footer>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

export default Repositories;
