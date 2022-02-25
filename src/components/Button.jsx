const Button = (props) => {
  const fillColor = props.fill;
  const gradient = props.gradient;

  const styles = {
    fontFamily: props.display ? "Grange" : "Aileron-italic",
    fontWeight: props.bold ? "bolder" : "normal",
    background: props.type === "filled" ? fillColor : props.type === "gradient" ? gradient : "transparent",
    border: props.stroke ? "2px solid white" : "none",
    textTransform: props.uppercase && "uppercase"
  };

  return (
    <button
      id="btn"
      style={styles}
      className={
        props.raise
          ? "text-3xl font-body-italic px-8 py-4 rounded-full transition transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 raise"
          : "text-3xl font-body-italic px-8 py-4 rounded-full"
      }
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  bold: false,
  fill: "dodgerblue",
  gradient: "linear-gradient(135deg, #4368b7, #2a457f, #1e315b)",
  stroke: false,
  raise: false,
};

export default Button;
