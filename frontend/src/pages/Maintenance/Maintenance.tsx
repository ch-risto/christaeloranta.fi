import React from "react";
import chLogo from '../../assets/ch_logoNimellä.png'
import { LogoWrapper, MaintenanceContainer } from "./maintenance.styles";

const Maintenance: React.FC = () => {
    return (
        <>
            <MaintenanceContainer>
                <LogoWrapper>
                    <a target='blank' href='https://www.instagram.com/christaeloranta/'>
                        <img src={chLogo} className="logo ch" alt="ch-logo christa eloranta" />
                    </a>
                </LogoWrapper>
                <h1>Sivustoa päivitetään</h1>
                <p>
                    Tervetuloa pian takaisin!
                </p>
                <p>
                    eloranta.christa@gmail.com<br />
                    <a target='blank' href='https://www.instagram.com/christaeloranta/'>Instagram</a>
                </p>
            </MaintenanceContainer>
        </>
    );
};

export default Maintenance;