import React from 'react'

const Dice = (props) => {  
      
    return ( 
        <i className={`Dice ${props.rolling ? 'rolling' : ''} fas fa-dice-${props.name}`}></i>
     );
}
 
Dice.defaultProps = {
    name: 'one'
}

export default Dice;