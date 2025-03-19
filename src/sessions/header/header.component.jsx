import StyleText from '../../components/style-text/style-text.component';
import Spacer from '../../components/spacer/spacer.component';

import './header.style.css';

function Header() {
    return (
        <div className='header'>
            <Spacer position='top' size='1.5rem' />
            <StyleText fontSize='2rem'>Steven Cheung</StyleText>
            <Spacer position='bottom' size='5px' />
            <StyleText fontSize='1rem' color='cadetblue'>Bachelor of Science in Chemistry</StyleText>
            <Spacer position='bottom' size='1.5rem' />
        </div>
    )
}

export default Header;