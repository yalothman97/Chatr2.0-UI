import React from "react";
import { NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import channeldefault from "./channeldefault.png";

const ChannelNavLink = ({ channel }) => {
  return (
    <li
      className="nav-item"
      data-toggle="tooltip"
      data-placement="right"
      title={channel.name}
    >
      <NavLink className="nav-link" to={`/channels/${channel.id}`}>
        {channel.image_url ? (
          <>
            <img src={channel.image_url} className="channelImg" />
            <span className="nav-link-text"> {channel.name}</span>
          </>
        ) : (
          <>
            <img src={channeldefault} className="channelImg" />
            <span className="nav-link-text"> {channel.name}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default ChannelNavLink;

// Hatha il channel names
