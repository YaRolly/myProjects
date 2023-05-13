import './radio.css';

export function Radio() {
  return (
    <ul className="list">
      <li className="list__item">
        <label className="radio">
          <input type="radio" name="radio-group" />
          <span className="circle"></span>
        </label>
        <p>Radio selection 1</p>
      </li>

      <li className="list__item">
        <label className="radio">
          <input type="radio" name="radio-group" />
          <span className="circle"></span>
        </label>
        <p>Radio selection 2</p>
      </li>

      <li className="list__item">
        <label className="radio">
          <input type="radio" name="radio-group" />
          <span className="circle"></span>
        </label>
        <p>Radio selection 3</p>
      </li>
    </ul>
  );
}
