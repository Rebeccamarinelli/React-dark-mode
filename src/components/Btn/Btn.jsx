import PropTypes from 'prop-types'


const Btn = ({change, theme})=>{
return (
   <div className="btn"> <button onClick={change} className={theme}>Cambia</button></div>
)
}

Btn.propTypes = {
   change: PropTypes.func.isRequired,
   theme: PropTypes.string.isRequired,
 };

export default Btn;