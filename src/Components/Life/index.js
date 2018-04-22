import React from 'react';
import { connect } from 'react-redux';

import './index.scss';

import { livenUp, updateLife, makeSquares } from '../../actions/squares';

class Life extends React.Component {
    constructor(props){
        super(props);
        this.subscription = false;
    }

    componentDidUpdate(){
        if(this.subscription) clearTimeout(this.subscription);
        if(this.props.pause) return false;
        this.subscription = setTimeout(() => {
            this.props.updateLife(makeSquares(this.props.squares, this.props.cols));
        }, this.props.speed);
    }
    
    render(){
        const boardSyles = {
            height: this.props.rows * 20 + 'px',
            width: this.props.cols * 20 + 'px'
        }

        return (
            <div
            className="life"
            style={boardSyles}>
            {this.props.squares.map((square, i) => <span
                key={i}
                onClick={() => this.props.livenUp(i)}
                className={"square " + (square ? 'live' : 'dead')}></span>
            )}
            </div>
        )
    }
    
}

const mapStateToProps = ( state ) => ({ 
    squares: state.squares.squares,
    rows: state.squares.rows,
    cols: state.squares.cols,
    pause: state.squares.pause,
    speed: state.squares.speed
});
const mapDispatchToProps = ( dispatch ) => ({
    livenUp: (payload) => livenUp(dispatch, payload),
    updateLife: (payload) => updateLife(dispatch, payload)
});

export default connect(mapStateToProps, mapDispatchToProps)(Life);