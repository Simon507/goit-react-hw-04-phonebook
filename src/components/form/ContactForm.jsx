import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Form } from './contactForm.styles';
import { SubmitBtn } from './contactForm.styles';
import { DataBlock } from './contactForm.styles';
import { MessageError } from './contactForm.styles';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('Required')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/),
  number: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required('Required'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        addContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <DataBlock>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <MessageError name="name" component="span" />
        </DataBlock>
        <DataBlock>
          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <MessageError name="number" component="span" />
        </DataBlock>

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
