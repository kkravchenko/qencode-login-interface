export const Button = ({ type, handleOnClick }) => (
  <button className={`button ${type}`} onClick={() => handleOnClick(type)}>
    <div className={`button__icon ${type}__icon`}></div>
    <div>{type}</div>
  </button>
)
