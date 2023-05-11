import 'styled-components';

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
