import { Component } from 'react';
import shortid from 'shortid';
import s from './Form.module.css';

const INITIAL_STATE = {
  name: '',
  id: '',
  number: '',
};

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  oninputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, id: shortid.generate() });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;
    !name || !number
      ? alert(`Some field are empty`)
      : this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className={s.a}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.oninputHandler}
            placeholder="Enter name"
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.oninputHandler}
            placeholder="Enter phone number"
          />
        </label>

        <button type="submit" className={s.addBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
