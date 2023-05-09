import { useState } from "react";

const useOpenClose = (state) => {
    const [open, setOpen] = useState(state);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return {
        SearchOpen : open,
        handleClose,
        handleOpen,

    }
}

export default useOpenClose;