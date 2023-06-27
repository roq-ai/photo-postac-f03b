import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  client_id: yup.string().nullable(),
  digital_graphic_id: yup.string().nullable(),
});
