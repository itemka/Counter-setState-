import React from 'react'

class Display extends React.Component {
    render() {
        return (
            <div>
                {this.props.number}
            </div>
        )
    }
}
export default Display;