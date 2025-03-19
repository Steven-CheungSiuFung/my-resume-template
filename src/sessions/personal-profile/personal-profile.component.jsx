import SubTitle from '../../components/sub-title/sub-title.component';
import Text from '../../components/text/text.component';
import Spacer from '../../components/spacer/spacer.component';

import SessionContainer from '../../components/session-container/session-container.component';

import { HiInformationCircle } from "react-icons/hi";

import './personal-profile.style.css';

function PersonalProfile() {
    return (
        <SessionContainer>
            <SubTitle> <HiInformationCircle /><Spacer position="left" size="5px" />Personal Information</SubTitle>
            <Text>Name: Steven Cheung</Text>
            <Text>Mobile: 8888-8888</Text>
            <Text>Email: my-email-address@gmail.com</Text>
            <Text>Nationality: Hong Kong, China</Text>
            <Text>Address: XXXXX Garden, XXXXX Road, XXXXX, XX, Hong Kong</Text>
            <Text>Website: https://steven-cheung.com</Text>
        </SessionContainer>
    )
}

export default PersonalProfile;