import { GrLocation } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import { GithubUser } from "../../types/user";
import FormatNumber from "../../utils/formatNumber";
import "./styles.scss";

type UserComponentProps = {
  data: GithubUser;
};

const User = ({ data }: UserComponentProps) => {
  return (
    <div className="user-container">
      <div className="user-content">
        <img className="avatar" src={data.avatar_url} alt={data.name} />
        <div className="text-content">
          <h4 className="name">{data.name}</h4>
          <h3 className="login">{data.login}</h3>
        </div>
        <div className="profile-btn-content">
          <a href={data.html_url} target="_blank" className="profile-btn">
            View profile
          </a>
        </div>

        <p className="bio">{data.bio}</p>

        <div className="follow-content">
          <GoPersonFill className="person-icon" />
          <span className="follow-number">{FormatNumber(data.followers)}</span>
          <span className="follow">followers</span>
          <GoDotFill className="dot" />
          <span className="follow-number">{FormatNumber(data.following)}</span>
          <span className="follow">following</span>
        </div>

        <div className="address-content">
          {data.company && (
            <span className="company-content">
              <HiOutlineBuildingOffice className="company-icon" />
              <p className="company">{data.company}</p>
            </span>
          )}
          {data.location && (
            <p className="location-content">
              <GrLocation className="location-icon" />
              <span className="location">{data.location}</span>
            </p>
          )}
          {data.blog && (
            <span className="blog-content">
              <FaLink className="blog-icon" />
              <a className="blog" href={`https://${data.blog}`} target="_blank">
                {data.blog}
              </a>
            </span>
          )}
          {data.twitter_username && (
            <span className="twitter-content">
              <FaTwitter className="twitter-icon" />
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target="_blank"
                className="twitter"
              >
                {data.twitter_username}
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
