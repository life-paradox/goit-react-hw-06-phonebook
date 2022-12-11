import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!contacts?.length) {
    return <p>You can add contacts</p>;
  }

  if (!visibleContacts?.length) {
    return <p>Not found </p>;
  }

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
