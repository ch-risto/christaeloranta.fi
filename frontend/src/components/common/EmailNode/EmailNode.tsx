import { useState, useCallback } from 'react';
import { EmailRow, CopyButton, SVGIcon } from './EmailNode.styles';
import copy_svg from '../../../assets/icons/copy.svg';
import copy_success from '../../../assets/icons/copy-success.svg';

export function EmailContactNode() {
    const user = 'christa.eloranta';
    const domain = 'gmail';
    const tld = 'com';

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = useCallback(async () => {
        const assembledEmail = `${user}@${domain}.${tld}`;

        try {
            await navigator.clipboard.writeText(assembledEmail);

            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        } catch (error) {
            console.error('Leikepöydälle kopiointi epäonnistui:', error);
            window.location.href = `mailto:${assembledEmail}`;
        }
    }, [user, domain, tld]);

    return (
        <EmailRow>
            {user}@{domain}.{tld}
            <CopyButton
                onClick={handleCopyEmail}
                aria-label="Kopioi sähköpostiosoite leikepöydälle"
                $isSuccess={isCopied}
            >
                {isCopied ? (
                    <SVGIcon src={copy_success} alt="Successfully copied email address" />
                ) : (
                    <SVGIcon src={copy_svg} alt="Copy email address" />
                )}
            </CopyButton>
        </EmailRow>
    );
}
