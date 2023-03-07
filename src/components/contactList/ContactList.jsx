import PropTypes from 'prop-types';
import { ContactCard, ContactLst } from './contactList.styles';

export const ContactList = ({ contacts, nameFind, onDelete }) => {
  return (
    <>
      <ContactLst>
        {contacts.map(
          item =>
            item.name.toLowerCase().includes(nameFind.toLowerCase()) && (
              <ContactCard className="item" key={item.id}>
                <p>{item.name}</p>
                <p>{item.number}</p>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </ContactCard>
            )
        )}
      </ContactLst>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  nameFind: PropTypes.string.isRequired,
};
