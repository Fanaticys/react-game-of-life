import { UPDATE, RESIZE, LIVEN_UP, PAUSE, RESUME, FASTER, SLOWER, CLEAR } from '../constants/squares';

const data = { 
    squares: new Array(1800).fill(0),
    rows: 30,
    cols: 60,
    pause: false,
    speed: 1000
}

const squaresReducer = ( state = data, action ) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                squares: action.payload
            }
    
        case RESIZE:
            return {
                ...state,
                rows: action.payload.rows,
                cols: action.payload.cols,
                squares: new Array(action.payload.rows * action.payload.cols).fill(0),
            }
        
        case LIVEN_UP:
            const newSquares = [...state.squares];
            newSquares[action.payload] = 1;
            return {
                ...state,
                squares: newSquares
            }

        case PAUSE:
            return {
                ...state,
                pause: true
            }
        
        case RESUME:
            return {
                ...state,
                pause: false
            }
        
        case SLOWER:
            return {
                ...state,
                speed: state.speed + 100
            }

        case FASTER:
            return {
                ...state,
                speed: state.speed - 100
            }

        case CLEAR:
            return {
                ...state,
                squares: new Array(state.rows * state.cols).fill(0),
            }

        default:
            return state;
    }
}

export default squaresReducer;