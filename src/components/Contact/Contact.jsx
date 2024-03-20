import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div>
      <p>
        <FaUser /> {name}
      </p>
      <p>
        <FaPhone /> {number}
      </p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
