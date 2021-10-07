import React, { useEffect } from "react";
import { ReactComponent as MapMarkerIcon } from "./assets/icon-location.svg";
import { ReactComponent as WebsiteIcon } from "./assets/icon-website.svg";
import { ReactComponent as TwitterIcon } from "./assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "./assets/icon-company.svg";

const UserProfile = ({ user }) => {
  useEffect(() => {
    console.log("Hello");
    console.log(user);
  }, [user]);

  const getJoinedDate = (d) => {
    let dDate = new Date(d);
    let stringDate = dDate.toLocaleString("default", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    return `Joined ${stringDate}`;
  };

  return (
    <div className='card'>
      <div className='profile'>
        <img src={user.avatar_url} alt='User icon' />
        <div className='profile-details'>
          <h3 className='bold'> {user.name} </h3>
          <p className='profile-details--username'> {user.name} </p>
          <p> {getJoinedDate(user.created_at)} </p>
        </div>
      </div>
      <div className='description'>
        <p className='text'> {user.bio || "No description."}</p>
      </div>
      <div className='stats'>
        <div>
          <p> Repos </p>
          <p className='bold'> {user.public_repos} </p>
        </div>
        <div>
          <p> Followers </p>
          <p className='bold'> {user.followers} </p>
        </div>
        <div>
          <p> Following </p>
          <p className='bold'> {user.following} </p>
        </div>
      </div>
      <div className='address-box'>
        <div>
          <MapMarkerIcon className='icon' fill='green' />
          <span> San Francisco</span>
        </div>
        <div>
          <WebsiteIcon className='icon' />
          <span> github.blog</span>
        </div>
        <div>
          <TwitterIcon className='icon' />
          <span> not available</span>
        </div>
        <div>
          <CompanyIcon className='icon' />
          <span> @github </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
