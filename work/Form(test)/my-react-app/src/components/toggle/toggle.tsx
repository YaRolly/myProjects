import './toggle.css';

export function Toggle() {
  return (
    <div className="toggle">
      <label className="toggle__label">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <p className="toggle__text">Off</p>
    </div>
  );
}
