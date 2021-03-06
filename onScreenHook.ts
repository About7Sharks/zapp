import { useEffect, useState } from "https://esm.sh/react";
// Hook
export const useOnScreen = (ref: any, offset: string) => {
  console.log("Ref screen change");
  let rootMargin = offset;
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (ref.current === undefined) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, rootMargin]);
  return isIntersecting;
};
