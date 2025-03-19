import './session-container.style.css';

function SessionContainer({children}) {
    return (
        <div className='session-container'>
            {children}
        </div>
    )
}

export default SessionContainer;