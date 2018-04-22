import { LIVEN_UP, UPDATE, PAUSE, RESUME, FASTER, SLOWER, CLEAR } from '../constants/squares';

export const livenUp = ( dispatch, payload ) => {
    dispatch({
        type: LIVEN_UP,
        payload
    })
}

export const updateLife = ( dispatch, payload ) => {
    dispatch({
        type: UPDATE,
        payload
    })
}

export const makeSquares = (squares, cols) => {
    return squares.map((square, i) => {
        let squaresAround = 0;
        squaresAround = squares[i - 1] +
            squares[i + 1] +
            squares[i + cols] +
            squares[i - cols] +
            squares[i - 1 + cols] +
            squares[i - 1 - cols] +
            squares[i + 1 - cols] +
            squares[i + 1 + cols];
        if (square) {
            return squaresAround === 2 || squaresAround === 3 ? 1 : 0;
        } else {
            return squaresAround === 3 ? 1 : 0;
        }
    });
}

export const pause = (dispatch) => dispatch({ type: PAUSE });
export const resume = (dispatch) => dispatch({ type: RESUME });
export const faster = (dispatch) => dispatch({ type: FASTER });
export const slower = (dispatch) => dispatch({ type: SLOWER });
export const clear = (dispatch) => dispatch({ type: CLEAR });