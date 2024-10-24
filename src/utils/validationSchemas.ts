import * as Yup from 'yup';

// Utils
import { isValidTime } from './isValidTime';

export const eventValidationSchema = Yup.object().shape({
  title: Yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(255, 'Must be at most 128 characters')
    .required('Title has to be filled up'),
  description: Yup
    .string()
    .min(6, 'Must be at least 6 characters')
    .max(256, 'Must be at most 256 characters')
    .required('Description has to be filled up'),
  date: Yup
    .string()
    .test('is-set', 'Date has to be filled up', (value) => {
      if (!value) return false;
      return true;
    })
    .test('is-date', 'Date has to be in a date format', (value) => {
      if (!value) return false;
      const dateTest = new Date(value).getTime();
      return !isNaN(dateTest);
    })
    .test('is-future', 'Date has to be in the future', (value) => {
      if (!value) return false;
      const currentDate = new Date();
      const selectedDate = new Date(value);
      return selectedDate > currentDate;
    })
    .required('Date has to be filled up'),
  time: Yup
    .string()
    .test('is-set', 'Time has to be filled up', (value) => {
      if (!value) return false;
      return true;
    })
    .test('is-time', 'Time has to be in a time format', (value) => {
      if (!value) return false;
      console.log('Time:', value, isValidTime(value));
      return isValidTime(value);
    })
    .required('Time has to be filled up'),
  capacity: Yup
    .number()
    .min(1, 'Must be at least 1')
    .required('Capacity has to be filled up')
});