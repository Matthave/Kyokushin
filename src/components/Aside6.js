import React from 'react'
import '../styles/Aside.css'
import arrow from '../IMG/arrowOut.png'


class Aside extends React.Component {
    state = {
        active: false,
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        let classes = ['aside']
        if (this.state.active) classes.push('click')
        if (this.state.acttive === false) classes = ['aside']

        return (
            <aside>
                <div className={classes.join(' ')}>
                    <div style={this.state.active ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} onClick={this.handleClick.bind(this)} className="btn">
                        <img src={arrow} alt="" />
                    </div>
                    ASIDE KONTAKT
        </div>
            </aside>
        )
    }
}

export default Aside