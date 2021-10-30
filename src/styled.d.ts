// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      gold: string;
      blue: string;
      grey: string;
      lightGrey: string;
      white: string;
      green: string;
      red: string;
    };
  }
}
