import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

// Fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

// Components
import ChannelNavLink from './ChannelNavLink';

function SideNav(props) {

    const channelLinks = props.authStore.isLoggedIn && props.channelStore.channels.map(
      channel => <ChannelNavLink key={channel.name} channel={channel} channelStore={props.channelStore}/>
    )
    return (
      <div>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li className="nav-item" data-toggle="tooltip" data-placement="right">
            <Link className="nav-link heading" to="/createChannel">
              <span className="nav-link-text">Channels</span>
              <FontAwesomeIcon icon={faPlusCircle} className="ml-2"/>
            </Link>
          </li>
          {channelLinks}
        </ul>
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <a className="nav-link text-center" id="sidenavToggler">
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
          </li>
        </ul>
      </div>
    );
}

export default withRouter(observer(SideNav));
