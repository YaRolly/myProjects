import './App.css';
import './reset.css';
import { Form } from './components/form/form';
import { Checkbox } from './components/checkbox/checkbox';
import { Toggle } from './components/toggle/toggle';
import { Radio } from './components/radio/radio';
import { Dropdown } from './components/dropdown/dropdown';
import { Button } from './components/button/button';

function App() {
  return (
    <div className="container">
      <Form />
      <Checkbox />
      <Toggle />
      <Radio />
      <Dropdown />
      <Button />
    </div>
  );
}

export default App;
