import { useEffect, useState } from 'react';

//input variable reference will be a React ref retrieved with useRef
const useIntersectionObserver = (reference) => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      //callback function that does something when item becomes visible
      const handleIntersect = (entries, observer) => {
         //entries is array of items being observed
         if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entries[0].target);
            observer.disconnect();
         }
      };
      //create new intersectionobserver instance and pass it callback function
      const observer = new IntersectionObserver(handleIntersect);
      //check if there is reference passsed in then start observing
      if (reference) {
         observer.observe(reference.current);
      }
      //when component is unmounted we will stop observing it
      return () => observer.disconnect();
   }, [reference]);
   return isVisible;
};

export default useIntersectionObserver;
