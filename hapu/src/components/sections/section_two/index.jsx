import { Component } from "react";
import ValidedEmail from "../../errors/email_Invalid";
import RegisterSuccess from "../../success/register_success";
import CircleProgressIndicator from "../../success/progress_indicator/circle_progress_indicator";

//import styles for project
import { Container, TitleSection, Paragraph, Divider } from "./style";

export default class InputSession extends Component {
    constructor(props) {
        super(props);

        this.state = { name: '', email: '', isEmailInvalid: false, isLoading: false, isRegister: false };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ isLoading: true });

        const response = await fetch("https://api.jungledevs.com/api/v1/challenge-newsletter/",
            {
                method: "POST",
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        const data = await response.json();



        if (data.detail === "Ok.") {
            // this.setState({ isEmailInvalid: false });
            // this.setState({ isRegister: true });

            this.setState({ isLoading: false });
            this.setState({ isRegister: true });
            alert("Successfully registered");
            this.setState({ name: "" });
            this.setState({ email: "" });

        }
        if (data.email !== undefined) {
            if (data.email[0] === "Enter a valid email address.") {
                // this.setState({ isRegister: false });
                // this.setState({ isEmailInvalid: true });

                this.setState({ isLoading: false });
                var insertEmail = confirm("Enter a valid email address.");
                if (!insertEmail) {
                    this.setState({ name: "" });
                    this.setState({ email: "" });
                } else {
                    this.setState({ email: "" });
                }
            }
        }
    }





    render() {
        return (
            <Container>
                <Divider />
                <TitleSection>Are you a parent without a nanny and looking to share?</TitleSection>
                <Paragraph>Leave us your name and email and we’ll update
                    you as soon as a share becomes available in your area!
                </Paragraph>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Your name" value={this.state.name} onChange={this.handleChangeName} required />
                        <input type="email" placeholder="Your email" value={this.state.email} onChange={this.handleChangeEmail} required />
                        {this.state.isLoading ? <CircleProgressIndicator /> : <input type="submit" value="Send" />}
                        {/* caso prefira que aparece no body do html
                        optei por alert, achei mais interessante
                        <ValidedEmail isEmailInvalid={this.state.isEmailInvalid} />
                        <RegisterSuccess isRegister={this.state.isSuccess} />
                         */}
                    </form>
                </div>
                <Divider />
            </Container>

        );

    }
}
// desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason