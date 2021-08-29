import { Component } from "react";
import Image from 'next/image';
import LogoImg from '../../../assets/images/Badgelogo.svg';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Image src={LogoImg} alt="Picture of the author" />
                <nav>
                    <li>Create Your Nanny Share</li>
                    <li>Browse Shares</li>
                    <li>Our Story</li>
                    <li>Become a Nanny Share Host</li>
                    <li>Sign In</li>
                </nav>
            </div>
        );
    }
}

export default NavBar;