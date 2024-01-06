import ContactItem from "../ContactItem/ContactItem";
const ContactList = ({ contacts, filter, onDelete }) => {
  console.log();
  return (
    <ul>
      {contacts
        .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => (
          <ContactItem key={item.id} name={item.name} number={item.number} id={item.id} onDelete={onDelete} />
        ))}
    </ul>
  );
};
export default ContactList;
