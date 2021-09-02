import { Component } from "react";
import Image from "next/image";

import logoImg from "../../assets/images/Badgelogo.svg";
import { Container, LeftContent, RightContent, ButtonPrimary, ButtonSecondary } from './styles';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <LeftContent>
                    <Image src={logoImg} alt="logo hapu" />
                    <nav>
                        <ul>
                            <a href=""><li>Create Your Nanny Share</li></a>
                            <a href=""><li>Browse Shares</li></a>
                            <a href=""><li>Our Story</li></a>
                        </ul>
                        
                    </nav>
                </LeftContent>

                <RightContent>
                    <ButtonPrimary>Become a Nanny Share Host</ButtonPrimary>
                    <a href=""><span>Sign In</span></a>
                </RightContent>
            </Container>
        );
    }
}

export default NavBar;