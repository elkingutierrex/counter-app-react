import PropTypes from 'prop-types';
const getResult = ( number ) => {  
    return 10 * number;
}

export const FirstApp = ({title, subtitle}) => {
  return (
    <>
    <h1>
      { title } !!
    </h1>
    <span>
        { subtitle }
        { getResult( 5 ) }
    </span>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}