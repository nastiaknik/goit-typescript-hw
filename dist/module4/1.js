import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export function Observer({ children, onContentEndVisible }) {
    // 2. Set the correct type for useRef. The endContentRef reference is used for a div element that
    // is located at the end of the content.
    const endContentRef = useRef(null);
    useEffect(() => {
        // 3. Set the correct type for options (a class can also be a type for options).
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
            root: null,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    onContentEndVisible();
                    observer.disconnect();
                }
            });
        }, options);
        if (endContentRef.current) {
            observer.observe(endContentRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [onContentEndVisible]);
    return (_jsxs("div", { children: [children, _jsx("div", { ref: endContentRef })] }));
}
