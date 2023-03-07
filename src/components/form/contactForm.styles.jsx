import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMes } from 'formik';

export const Form = styled(FormikForm)`
  padding: 20px;
  border: 1px solid black;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
`;

export const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
`;

export const MessageError = styled(FormikErrorMes)`
  color: tomato;
`;
