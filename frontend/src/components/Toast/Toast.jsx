import { Toaster, toast } from 'react-hot-toast';

const Toast = () => (
  <Toaster 
    position="top-right"
    toastOptions={{
      duration: 2000,
      style: {
        background: '#363636',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '8px',
      },
      success: {
        duration: 2000,
        style: {
          background: '#059669',
        },
      },
      error: {
        duration: 1500,
        style: {
          background: '#DC2626',
        },
      },
      onClick: () => toast.dismiss(),
    }}
  />
);

export { toast };
Toast.displayName = 'Toast';

export default Toast; 