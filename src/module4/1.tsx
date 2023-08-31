import { ReactNode, useEffect, useRef } from "react";

// 1. Set the correct prop types for this component.
// It has two properties: children and onContentEndVisible. children can be any valid React node,
//and onContentEndVisible is a function without arguments that returns void.
type Props = {
  children: ReactNode;
  onContentEndVisible: () => void;
};

export function Observer({ children, onContentEndVisible }: Props) {
  // 2. Set the correct type for useRef. The endContentRef reference is used for a div element that
  // is located at the end of the content.
  const endContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3. Set the correct type for options (a class can also be a type for options).
    const options: IntersectionObserverInit = {
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

  return (
    <div>
      {children}
      <div ref={endContentRef} />
    </div>
  );
}
