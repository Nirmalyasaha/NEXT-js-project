import React from "react";
import ButtonAppBar from "../header/header";
import Footer from "../footer/footer";
import { Box } from "@mui/material";
import SimpleBottomNavigation from "../footer/footer";


interface headerprop {
    children:React.ReactNode
}

const Wrapper = (props: headerprop) => {
    const { children } = props


    return (
        
        <Box><ButtonAppBar />{children}<SimpleBottomNavigation/></Box>
        
        
        
       

    )
}

export default Wrapper

