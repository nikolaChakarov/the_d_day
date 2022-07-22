import { useEffect, useState } from "react";

const useDebounce = (init, delay) => {
    const [value, setValue] = useState(init);

    const updateValue = (val) => {
        setValue(val);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            updateValue(init);
        }, delay);

        return () => clearTimeout(timer);
    }, [init, delay]);

    return value;
};

export default useDebounce;
