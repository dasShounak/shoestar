const Button = (props) => {
  const fillColor = props.fill;
  const gradient = props.gradient;

  const styles = {
    fontWeight: props.bold ? "bold" : "normal",
    background: props.type === "filled" ? fillColor : props.type === "gradient" ? gradient : "transparent",
    border: props.stroke ? "2px solid white" : "none"
  };

  return (
    <button
      id="btn"
      style={styles}
      className="text-3xl font-body italic uppercase px-8 py-4 rounded-full"
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  bold: false,
  fill: "dodgerblue",
  gradient: "linear-gradient(to right, #2563EB, #0A0D1A)",
  stroke: false
};

export default Button;
