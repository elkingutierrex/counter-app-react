import { useState } from 'react';
import PropTypes from 'prop-types';
export const CounterApp = ( { value } ) => {
    const [counter, setCounter] = useState(value);

    const  addValue = () =>{
        setCounter( counter + 1 );
    }

    const  subtractValue = () =>{
        counter > 0 && setCounter( counter - 1 );
    }

    const  resetValue = () =>{
        setCounter( value);
    }



  return (
    <>
    <img className='custom-image' src="./../src/assets/img/elkingutierrex.png" alt="logo" />
    <h1>Counter App</h1>
    <h2> { counter } </h2>

    <div className="div-buttons">

        <div>
            <button disabled={counter === 0} 
                    onClick={subtractValue}
                    type="button" className="btn btn-secondary">
                -1
            </button>
        </div>
        <div>
            <button onClick={resetValue}
                    type="button" className="btn btn-warning"
                    disabled={counter === value}>
                Reset
            </button>
        </div>

        <div>

            <button onClick={addValue}
                    type="button" className="btn btn-info">
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
