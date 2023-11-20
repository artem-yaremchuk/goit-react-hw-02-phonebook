import css from "./Filter.module.css";
import { Component } from "react";

class Filter extends Component {

  handleChange = (evt) => {
    this.props.filterContact(evt.target.value);
  };

  render() {
    return (
      <label htmlFor="inputFilter" className={css.filterLabel}>
        Find contacts by name:
        <input
          type="text"
          className={css.inputFilter}
          id="inputFilter"
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </label>
    );
  }
}

export default Filter;
