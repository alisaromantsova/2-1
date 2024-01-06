import { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  onFilterChange(e) {
    this.setState({ filter: e.target.value });
  }
  handlerSubmit(e) {
    const filteredContacts = this.state.contacts.filter((item) => item.name === e.target.name.value);
    if (filteredContacts.length === 0) {
      this.setState((prevState) => prevState.contacts.push({ name: e.target.name.value, id: nanoid(), number: e.target.number.value }));
    } else {
      alert("you've already used this name");
    }
  }

  onDeleteButton(id) {
    this.setState((prevstat) => ({
      contacts: prevstat.contacts.filter((item) => item.id !== id),
    }));
  }

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className="App">
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.handlerSubmit.bind(this)} />
        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange.bind(this)} filter={filter} />
        <ContactList contacts={contacts} filter={filter} onDelete={this.onDeleteButton.bind(this)} />
      </div>
    );
  }
}

export default App;
