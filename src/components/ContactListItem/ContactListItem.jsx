import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li className={css.contactsListItem}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button
        type='button'
        className={css.deleteBtn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
