import './checkbox.css';

export function Checkbox() {
  return (
    <div>
      <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text">Remember me</span>
      </label>
    </div>
  );
}
