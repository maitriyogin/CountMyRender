import {useEffect, useRef} from "react";

export const useRerenderCount = (id) => {
  const render = useRef(0)
  useEffect(() => {
    render.current = render.current +1;
    console.log(`############ ${id} RERENDER!`, render.current)
  })
}