import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component {
    render() {
        return <footer> 
        <div class="inner-wrapper flex-container">
            <p>&copy; 2021 Company, Inc. &middot; <Link to="/privacy">Privacy</Link> &middot; <Link to="/terms">Terms</Link></p>
        </div>
        </footer>
    }
}

export default Footer;


