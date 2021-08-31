import { Component } from "react";

//import component
import BottomBar from '../bottom_bar/index';

//import styled
import { ButtonCreateNany, FooterContainer, ContentWrapper } from './styles';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <FooterContainer>
                <ContentWrapper>
                    <h2>
                        Become a nanny share host
                    </h2>
                    <p>
                        Takes less than 5 minutes to get started
                    </p>
                    <ButtonCreateNany>
                        <h5>Create Your Nanny Share</h5>
                    </ButtonCreateNany>
                    <p>
                        Or browse local nanny-shares
                    </p>
                </ContentWrapper>
            </FooterContainer>
            <BottomBar />
            </>
        );
    }
}
