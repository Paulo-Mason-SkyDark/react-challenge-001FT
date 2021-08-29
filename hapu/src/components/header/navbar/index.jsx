import { Component } from "react";
import LogoImg from '../../assets/images/Badgelogo.svg';

class Hero extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <div>
                <img src={LogoImg}/>
            </div>
            </>
        );
    }
}