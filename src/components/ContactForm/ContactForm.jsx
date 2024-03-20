import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    console.log(values);
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label>
          Name<Field type="text" name="name"></Field>
          <ErrorMessage name="name" as="span" />
        </label>
        <label>
          Number<Field type="tel" name="number"></Field>
          <ErrorMessage name="number" as="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
