import PropTypes from 'prop-types'

const Card = ({title, body})=>{

    return(
        <>
        <div className="card">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        </>
    )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Card