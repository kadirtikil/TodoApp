import './HomeBody.scss'

import BodyDescription from '../../../assets/BodyDescription.svg';
import BodyDescriptionAddition from '../../../assets/BodyDescriptionAddition.svg';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Stack from '@mui/material/Stack';


export default function HomeBodyComponent() {
    function openGithub() {
        window.open('https://www.github.com/kadirtikil','_blank')
    }

    function openLinkedin() {
        window.open('https://www.linkedin.com/in/kadir-tikil-26a66b320/','_blank')
    }

    return (
        <>
            <div className="homebodycomponentcontainer">
                <div className="unfunnyjoke">
                    <img src={BodyDescription} width={600} alt="" />
                    <img src={BodyDescriptionAddition} width={600} alt="" />
                </div>
                <div className="githubandlinkedin">
                    <Stack direction={'row'} spacing={2}>
                        <div className="github" onClick={openGithub}>
                            <GitHubIcon fontSize='large'/>
                        </div>
                        <div className="linkedin" onClick={openLinkedin}>
                            <LinkedInIcon fontSize='large'/>
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}