import { toast, ToastOptions, } from 'react-toastify';

const toastOptions: ToastOptions = { 
  theme: 'dark',
  className: 'custom-toast'
};

function toastError (message: string) {
  toast.error(message, toastOptions);
}

function toastWarning (message: string) {
  toast.warn(message, toastOptions);
}

function toastSuccess (message: string) {
  toast.success(message, toastOptions);
}

export { toastError, toastWarning, toastSuccess };