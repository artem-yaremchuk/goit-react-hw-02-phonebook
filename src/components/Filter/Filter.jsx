import css from "./Filter.module.css";
import { Component } from "react";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleChange = (evt) => {
    this.setState({ filter: evt.target.value });
    this.props.filterContact(this.state);
  };

  render() {
    const { filter } = this.state;
    return (
      <label htmlFor="inputFilter" className={css.filterLabel}>
        Find contacts by name:
        <input
          type="text"
          className={css.inputFilter}
          id="inputFilter"
          value={filter}
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </label>
    );
  }
}

export default Filter;
