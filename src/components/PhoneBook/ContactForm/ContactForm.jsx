import PropTypes from 'prop-types';

import initialState from './initialState';

import useForm from 'shared/hooks/useForm';

import Button from 'shared/components/Button/Button';

import styles from './contactForm.module.scss';

const ContactForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
      </div>
      <div className={styles.formGroup}>
        <label>Phone number</label>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
