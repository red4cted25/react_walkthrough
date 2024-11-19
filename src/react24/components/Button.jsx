const Button = ({count, onClick}) => {
    return (
        <button style={{background: 'rgb(147, 120, 255)', border: '2px solid rgb(61, 38, 120)'}} onClick={onClick}>
            Total # of Clicks: {count}
        </button>
    )
}

export default Button