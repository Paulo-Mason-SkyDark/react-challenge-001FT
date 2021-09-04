import { Component } from "react";
import Image from "next/image";

//import component
import BottomBar from '../bottom_bar/index';

//import icon
import Calender from '../../assets/icons/calender.svg';

//import styled
import { ButtonCreateNany, FooterContainer, ContentWrapper, Row, Column } from './styles';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FooterContainer>
                <ContentWrapper>
                    <h2>
                        Become a nanny share host
                    </h2>
                    <p>
                        Takes less than 5 minutes to get started
                    </p>
                    <ButtonCreateNany>
                        <Image src={Calender} widht="30" height="30" />
                        <div>
                            <h4>Create Your Nanny Share</h4>
                            <p>Takes less than 5 minutes</p>
                        </div>
                    </ButtonCreateNany>
                    <a href="">
                        Or browse local nanny-shares
                    </a>
                </ContentWrapper>
                <BottomBar />
            </FooterContainer>
        );
    }
}
