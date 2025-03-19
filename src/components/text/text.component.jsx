import './text.style.css'

function Text({children}) {
    return (
        <div className='text'>
            {children}
        </div>
    )
}

export default Text;