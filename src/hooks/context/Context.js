import React, { useState } from "react";
import ClassContext from "./ClassContext";
import FunctionContext from "./FunctionContext";
import { ThemeProvider } from "./ThemeContext";

export default function Context() {

    return (
        <>
            <ThemeProvider>                
                <FunctionContext />                
            </ThemeProvider>
        </>
    )

}
