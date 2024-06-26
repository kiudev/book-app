import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorPalette } from "../../colorPalette";

export default function Create(props) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width={72}
         height={72}
         viewBox="0 0 1024 1024"
         {...props}
      >
         <Path
            fill={colorPalette[0]}
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0z"
         />
      </Svg>
   );
}
