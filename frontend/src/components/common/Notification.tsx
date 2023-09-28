import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { XMarkIcon } from '@heroicons/react/20/solid';

export const Notifications = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        error: {
          className: '!bg-rose-700 !py-4 !text-rose-100 font-semibold',
        },
        success: {
          className: '!bg-green-700 !py-4 !text-green-50 font-semibold',
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ message }) => (
            <>
              {/* {icon} */}
              <span className="pr-10 text-sm">{message}</span>
              {t.type !== 'loading' && (
                <button
                  className="inline-flex rounded-md "
                  onClick={() => {
                    toast.dismiss();
                  }}
                  type="button"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
