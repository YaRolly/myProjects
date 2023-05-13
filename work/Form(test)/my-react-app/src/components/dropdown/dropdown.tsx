import './dropdown.css';

const DROPDOWN = [
  { name: 'Dropdown option' },
  { name: 'Dropdown option 1' },
  { name: 'Dropdown option 2' },
];

export function Dropdown() {
  return (
    <select name="select" className="dropdown">
      {DROPDOWN.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
