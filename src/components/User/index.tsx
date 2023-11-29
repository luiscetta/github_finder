import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import { UserProps } from "../../types/user";
import "./styles.scss";
import FormatNumber from "../../utils/formatNumber";

const User = ({
  login,
  avatar_url,
  name,
  bio,
  blog,
  company,
  html_url,
  repos_url,
  twitter_username,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className="user-container">
      <div className="user-content">
        <img className="avatar" src={avatar_url} alt={name} />
        <div className="text-content">
          <h4 className="name">{name}</h4>
          <h3 className="login">{login}</h3>
        </div>
        <div className="profile-btn-content">
          <a href={html_url} target="_blank" className="profile-btn">
            View profile
          </a>
        </div>

        <p className="bio">{bio}</p>

        <div className="follow-content">
          <GoPersonFill className="person-icon" />
          <span className="follow-number">{FormatNumber(followers)}</span>
          <span className="follow">followers</span>
          <GoDotFill className="dot" />
          <span className="follow-number">{FormatNumber(following)}</span>
          <span className="follow">following</span>
        </div>

        <div className="address-content">
          {company && (
            <span className="company-content">
              <HiOutlineBuildingOffice className="company-icon" />
              <p className="company">{company}</p>
            </span>
          )}
          {location && (
            <p className="location-content">
              <GrLocation className="location-icon" />
              <span className="location">{location}</span>
            </p>
          )}
          {blog && (
            <span className="blog-content">
              <FaLink className="blog-icon" />
              <a className="blog" href={blog} target="_blank">
                {blog}
              </a>
            </span>
          )}
          {twitter_username && (
            <span className="twitter-content">
              <FaTwitter className="twitter-icon" />
              <a href={twitter_username} target="_blank" className="twitter">
                {twitter_username}
              </a>
            </span>
          )}
        </div>
      </div>
      <div className="repos-content"></div>
      {/* <Link to={`/repos/${login}`}>Ver melhores projetos</Link> */}
    </div>
  );
};

export default User;
