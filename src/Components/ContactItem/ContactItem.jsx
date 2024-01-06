const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <li>
      {name} {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
export default ContactItem;
