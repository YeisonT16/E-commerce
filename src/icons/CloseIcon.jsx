import PropTypes from "prop-types";

function CloseIcon(props){

    const {width, height} = props
    return(
        <svg  
        xmlns="http://www.w3.org/2000/svg"  
        width={width}  
        height={height}  
        viewBox="0 0 24 24"  
        fill="none"  
        stroke="currentColor"  
        strokeWidth="1"  
        strokeLinecap="round"  
        strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10l4 4m0 -4l-4 4" />
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
    )
}

CloseIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}

export { CloseIcon };