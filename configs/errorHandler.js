import { toast } from 'react-toastify';

export default function errorHandler(error) {
  if (error) {
    console.log('error.response');
    console.log(error.response);
    let message;
    if (error.response) {
      message = error.response.data.msg;

      if (typeof message === 'string') toast.error(message);

      return error;
    }
  }
}
