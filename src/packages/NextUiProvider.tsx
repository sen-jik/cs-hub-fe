import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';

export const NextUiProvider: React.FC<NextUIProviderProps> = ({ children, ...props }) => {
  return <NextUIProvider {...props}>{children}</NextUIProvider>;
};
