import { Component } from "react";
import Image from 'next/image';

//import styles
import {Container, NavContent, IconsContent, Copy } from './styles';

//import assets
import logoImg from '../../assets/icons/Logofooter.svg';

export default class BottomBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <Image src={logoImg} alt="logo hapu" />  
                    <NavContent>
                        <nav>
                            <ul>
                                <a href=""><li>Share Your Nanny</li></a>
                                <a href=""><li>Our Story</li></a>
                                <a href=""><li>Blog</li></a>
                                <a href=""><li>Terms and Privacy</li></a>
                            </ul>
                        </nav>
                    </NavContent>
                    <IconsContent>
                        Redes Sociais
                    </IconsContent>
                    
                </Container>
                <Copy>
                    <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
                </Copy>
            </>
            
        );
    }
}

