import { useState } from "react";

const useToggle = () => {
    const [toggle, setToggle] = useState(false);

    // Drawer Toogle
    const [state,
        setState] = useState({left : false});

    const menuToggle = () => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ['left'] : !state.left });

    };


    return {
        toggle,
        setToggle,
        state,
        menuToggle
    }
}

export default useToggle;