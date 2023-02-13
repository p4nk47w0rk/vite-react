function Button({ count, action }) {
  return (
    <button onClick={action} type="button">
      Click! {count}
    </button>
  );
}
export default Button;
