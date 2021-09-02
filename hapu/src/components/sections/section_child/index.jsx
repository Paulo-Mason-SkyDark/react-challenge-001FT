import { Component } from "react";
import Image from "next/image";

//import images for project
import ImgBookChild from "../../../assets/images/img_book_childs.svg";

//import styles for project
import {Container, TitleSection, Paragraph} from "./style";

export default class PreFooterSession extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <Container>
                
                <Image src={ImgBookChild} height="96"  alt="image book child"/>
                <TitleSection>Coming soon: Nanny Share Daily Diary!</TitleSection>
                <Paragraph>With the Hapu daily diary your nanny will be 
                    able to update you and your sharers with photos 
                    and commentary of the day. You and sharers will 
                    receive notifications and you’ll be able 
                    to login to view the daily adventures fo your 
                    little ones. We can’t wait!</Paragraph>
            </Container>
            </>
        );

    }
}
