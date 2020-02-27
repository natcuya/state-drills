import React from 'react';

class RouletteGun extends React.Component {
//The component will accept a prop called bulletInChamber that has a default value of 8.
    static defaultProps = {
        bulletInChamber: 8
    };
    state = {
        chamber: null,
        spinningTheChamber: false,
    }
// clear an timeout by using clearTimeout(timeout)
    componentWillUnmount() {
        clearTimeout(this.timeout)
      } 

    handleCLick =()=> {
        this.setState({
//The state should update spinningTheChamber to be true
            spinningTheChamber: true,
        })
//Within the timeout, a random number between 1 and 8 should be generated.
        this.timeout = setTimeout(() => {
//generate a random number between 1 and 8. use methods on the Math object 
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber:false,
            })
//A timeout should be registered for 2 seconds.
        }, 2000)    
    }

    renderDisplay(){
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
        return 'BANG!!!!!'
        } else {
        return 'you\'re safe!'
        }
    }

    render (){
        return(
            <div className='RouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleCLick}>
                    Pull the Trigger!
                </button>
            </div>

        )
    }
}

export default RouletteGun;