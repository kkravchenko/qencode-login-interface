export const ActionButton = ({ type, className, text, handleOnClick }) => (
  <button
    type={type}
    className={`action__button button_${className}`}
    onClick={() => handleOnClick()}
  >
    {text}
  </button>
)
