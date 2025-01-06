// import React, { ReactElement } from "react";
// import Header from "./header/Header";
// import HeaderBottom from "./header/HeaderBottom";
// import Footer from "./Footer";
// // import Header from "./Header";

// // import { ThemeProvider } from "@emotion/react";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// // import { ColorModeContext, useMode } from "@/components/header/theme";
// import { ColorModeContext, useMode } from "@/theme";
// // import Header from "./Header";
// // import Header from "@/components/Header";

// interface Props{
//     children:ReactElement
// }

// const RootLayout = ({children}: Props) =>{
//     const [theme, colorMode] = useMode();
//     return(
//         // @ts-ignore
//         <ColorModeContext.Provider value={colorMode}>
       
//         <ThemeProvider theme={theme}>


//         <CssBaseline />
//         {/* <Products productData={productData} /> */}
//         </ThemeProvider>
//         {/* <> */}
//         <Header/>
//         <HeaderBottom/>
//         {children} 
//         <Footer/>
//         {/* </> */}

// </ColorModeContext.Provider>
//     );
// };

// export default RootLayout;











import React, { ReactElement } from "react";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";
import Footer from "./Footer";

interface Props{
    children:ReactElement
}

const RootLayout = ({children}: Props) =>{
    return(
        <>
        <Header/>
        <HeaderBottom/>
        {children}
        <Footer/>
        </>

    );
};

export default RootLayout;