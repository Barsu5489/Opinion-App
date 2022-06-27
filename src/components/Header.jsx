import { PropTypes } from "prop-types";
function Header({ text, bgColor, textColor }) {
    const pageStyle = {
        backgroundColor: bgColor,
        color:textColor
    }
    return (
        <header style={pageStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
      </header>
  )
}
Header.defaultProps = {
    text: 'Opinion UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor:'white',
}
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};


export default Header;
