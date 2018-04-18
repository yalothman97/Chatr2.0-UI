import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { fetchChannels } from "../../store/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

// Components
import ChannelNavLink from "./ChannelNavLink";

class SideNav extends React.Component {
  state = { collapsed: false };

  render() {
    const { user, channels } = this.props;
    const channelLinks = channels.map(channel => (
      <ChannelNavLink key={channel.name} channel={channel} />
    ));
    return (
      <div>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          {user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link heading" to="/createChannel">
                  <span className="nav-link-text mr-2">Channels</span>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </Link>
              </li>
              {channelLinks}
            </>
          ) : (
            <li className="nav-item" />
          )}
        </ul>
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <span
              className="nav-link text-center"
              id="sidenavToggler"
              onClick={() =>
                this.setState(prevState => ({
                  collapsed: !prevState.collapsed
                }))
              }
            >
              <FontAwesomeIcon
                icon={this.state.collapsed ? faAngleRight : faAngleLeft}
              />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, channels }) => ({
  user: auth.user,
  channels: channels.channels
});

const mapDispatchToProps = { fetchChannels };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideNav)
);
