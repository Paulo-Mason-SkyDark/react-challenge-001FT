import { Component } from "react";

//import styles for project
import {Container, TitleSection, Paragraph, Input, Divider, ButtonSend} from "./style";

export default class InputSession extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Divider />
                <TitleSection>Are you a parent without a nanny and looking to share?</TitleSection>
                <Paragraph>Leave us your name and email and we’ll update 
                    you as soon as a share becomes available in your area!</Paragraph>
                    <div>
                    <Input type="text" placeholder="Your name" />
                    <Input type="email" placeholder="Your email" />
                    <ButtonSend>Send</ButtonSend>
                    </div>
                    <Divider />
            </Container>
            
        );

    }
}
