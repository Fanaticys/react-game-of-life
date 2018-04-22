import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

import './index.scss';

import { pause, resume, faster, slower, clear } from '../../actions/squares';

const Header = (props) => {
    return (
        <Paper 
            zDepth={1}
            className="header">
            <FlatButton label="Pause" onClick={props.pause} />
            <FlatButton label="Pesume" onClick={props.resume} />
            <FlatButton label="Clear" onClick={props.clear} />
            <FlatButton label="Slower" onClick={props.slower} />
            <FlatButton label="Faster" onClick={props.faster} />
        </Paper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    pause: () => pause(dispatch),
    resume: () => resume(dispatch),
    faster: () => faster(dispatch),
    slower: () => slower(dispatch),
    clear: () => clear(dispatch),
});

export default connect(null, mapDispatchToProps)(Header);