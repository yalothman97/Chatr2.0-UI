import React from "react";
// import { Link } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

// Components
import ChannelNavLink from "./ChannelNavLink";
import { connect } from "react-redux";
import AddChannelForm from "../AddChannelForm";
import SearchBar from "../SearchBar";

class SideNav extends React.Component {
  state = {
    collapsed: false,
    query: "",
    filteredChannels: this.props.channels
  };

  search = query => {
    this.setState({ query });
  };

  render() {
    let channels = this.props.channels.filter(channel =>
      channel.name.toLowerCase().includes(this.state.query.toLowerCase())
    );
    const channelLinks = channels.map(channel => (
      <ChannelNavLink key={channel.name} channel={channel} />
    ));
    return (
      <div>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li className="nav-item" data-toggle="tooltip" data-placement="right">
            <p className="nav-link heading">
              <a
                className="nav-link-text mr-2"
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Channels
                <FontAwesomeIcon icon={faPlusCircle} />
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <AddChannelForm />
              </div>
            </div>
          </li>
          <SearchBar search={this.search} />
          {channelLinks}
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

const mapStateToProps = state => {
  return {
    channels: state.channels.channels
  };
};

export default connect(mapStateToProps)(SideNav);
