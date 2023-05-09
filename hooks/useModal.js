import React from "react";
import { useState } from "react";

const useModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
        console.log(open)
    };
    const handleClose = () => setOpen(false);

    return {
        open,
        setOpen,
        handleClose,
        handleOpen
    }
}

export default useModal;