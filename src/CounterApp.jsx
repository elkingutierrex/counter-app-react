import { useState } from 'react';
import PropTypes from 'prop-types';
export const CounterApp = ( { value } ) => {
    const [counter, setCounter] = useState(value);

    const  addValue = () =>{
        setCounter( counter + 1 );
    }

  return (
    <>
    <h1>Couter App</h1>
    <h2> { counter } </h2>

    <div className="div-buttons">

        <div>
            <button onClick={addValue}>
                -1
            </button>
        </div>
        <div>
            <button>
                Reset
            </button>
        </div>

        <div>

            <button onClick={addValue}>
                +1
            </button>
        </div>
    </div>
    
      
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
