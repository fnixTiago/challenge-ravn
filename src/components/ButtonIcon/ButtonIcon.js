import React from 'react'

const ButtonIcon = (props) => {
    let { icon, children } = props;
    return (
        <button {...props}>{icon ? icon : null} {children}</button>

    )
}

export default ButtonIcon