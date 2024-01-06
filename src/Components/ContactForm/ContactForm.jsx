import { Component } from "react";

class ContactForm extends Component {
  state = {
    number: "",
    name: "",
  };
  onInputChange(e) {
    this.setState({ name: e.target.value });
  }
  onTelInputChange(e) {
    this.setState({ number: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.onSubmit(e);
    this.reset();
  }
  reset() {
    this.setState({ name: "", number: "" });
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={(e) => this.onInputChange(e)}
          />
          <h2>Tel</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={(e) => this.onTelInputChange(e)}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
