import React from 'react';
import axios from 'axios';

function Footer(props) {
  return (
    <footer className="sticky-footer">
      <div className="container">
        <div className="text-center">
          <small>Copyright © CODED Chatr 2018</small>
          <button className="btn btn-xs btn-danger mx-5"
            onClick={() => props.channelStore.shutuuuuuuup()}>
            shutuuuuuuup
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
