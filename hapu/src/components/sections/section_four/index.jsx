import { Component } from "react";
import Image from 'next/image';

import nannyImg from '../../../assets/images/ImageSection4.svg';

import {Container, Content, Divider} from './styles';

class SectionTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Divider />
                <Content>
                    <h2>A framework built for the long term</h2>
                    <p>
                      Childcare is for the long term. And you need a framework you
                      can count on that gives your share long  term viability and success.
                      That’s why we’ve defined Hapu around our three tribal principles;
                      clearly defined process, transparency over money
                      and equality of participation.
                    </p>

                    <a href="">Read how Hapu’s tribal background defines our app </a>

                    <div>
                        <Image className="teste" src={nannyImg} alt="Image Book" />
                    </div>
                    
                </Content>
                <Divider />
            </Container>
        );
    }
}

//TODO: resolver problema de indentação seguir o mesmo padrão da section five

export default SectionTwo;