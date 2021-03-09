import React from 'react'

const Dice = (props) => {    
    return ( 
        <i className={`Dice fas fa-dice-${props.name}`}></i>
     );
}
 
Dice.defaultProps = {
    name: 'one'
}

export default Dice;