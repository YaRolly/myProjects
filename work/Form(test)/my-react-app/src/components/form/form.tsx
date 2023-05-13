import './form.css';

export function Form() {
  return (
    <div>
      <div className="user">
        <h3 className="form__title">Username</h3>
        <form className="form">
          <input type="text" className="form__input" placeholder="Enter username" />
        </form>
      </div>

      <div className="user">
        <h3 className="form__title">Password</h3>
        <form className="form">
          <input type="text" className="form__input" placeholder="Enter password" />
        </form>
        <p className="form__text">Your password is between 4 and 12 characters</p>
      </div>

      <div className="user">
        <h3 className="form__title">Input Text Label</h3>
        <form className="form">
          <input type="text" className="form__input" placeholder="Enter text" />
        </form>
      </div>
    </div>
  );
}
