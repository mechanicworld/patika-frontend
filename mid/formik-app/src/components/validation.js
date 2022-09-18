import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().min(5).required(),
  passwordConfirm:yup.string().oneOf([yup.ref('password')]).required()

});

export default validationSchema