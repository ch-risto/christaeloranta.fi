import React from 'react';
import * as S from './Footer.styles';

const Footer: React.FC = () => {
    // Muuttuja tämän hetkisen vuoden hakuun
    const currentYear = new Date().getFullYear();

    return (
        <S.FooterContainer>
            <S.BottomBar>Christa Eloranta {currentYear}</S.BottomBar>
        </S.FooterContainer>
    );
};

export default Footer;
