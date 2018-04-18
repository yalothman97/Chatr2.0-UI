import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'

function ChannelNavLink(props) {
  return (
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title={props.channel.name}>
      <NavLink exact className="nav-link"
        to={`/channels/${props.channel.name}`}
        onClick={() => props.channelStore.setCurrentChannel(props.channel)}>
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav-link-text"> {props.channel.name}</span>
      </NavLink>
    </li>
  );
}

export default withRouter(observer(ChannelNavLink));
