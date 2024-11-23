import { match, P } from 'ts-pattern';

export const redirectToLogin = () => {
  match(window.location.pathname)
    // .with(P.string.startsWith('/admin'), () => {
    //   window.location.href = '/admin/login';
    // })
    // .with(P.string.startsWith('/patient'), () => {
    //   window.location.href = '/patient/login';
    // });
    .with(P.string, () => {
      window.location.href = '/login';
    });
};
