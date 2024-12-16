'use client';

import { ToastContainer, ToastPosition, Zoom } from 'react-toastify';

import { cn } from '@/packages';

import 'react-toastify/dist/ReactToastify.css';

const toastContainerClassName = (position?: ToastPosition) => {
  if (position === 'bottom-center') {
    return '!mb-16';
  }
  if (position === 'top-center') {
    return '!mt-12';
  }
  return '';
};

// TODO 토스트 규격 시안이 아직 나오지 않아서 임시로 변경
const StyledToastContainer = () => {
  return (
    <ToastContainer
      icon={false}
      position="top-center"
      theme="dark"
      className={(context) =>
        cn(
          toastContainerClassName(context?.position),
          '!px-6 sm:!w-auto sm:!px-1',
          context?.defaultClassName
        )
      }
      toastClassName={() =>
        cn(
          'bg-default-800/90',
          'flex justify-between items-center',
          'relative p-4 min-h-14 rounded-xl overflow-hidden cursor-pointer',
          'mb-2 py-2 px-6 text-xl text-slate-50'
        )
      }
      closeButton={false}
      bodyClassName={() => cn('flex p-0 whitespace-pre-wrap')}
      autoClose={2000}
      transition={Zoom}
      pauseOnHover
      closeOnClick
      hideProgressBar
    />
  );
};

export { StyledToastContainer };
