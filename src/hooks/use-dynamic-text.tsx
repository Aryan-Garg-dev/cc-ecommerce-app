import { useEffect } from "react";

export const useDynamicText = (id: string, from: string, to: string)=>{
  useEffect(()=>{
    const textElement = document.getElementById(id);
    if (!textElement) return;

    const handleMouseMove = (e: MouseEvent)=>{
      const { offsetX, target } = e;
      if (!(target instanceof HTMLElement)) return;
      const width = target.offsetWidth;

      const percentage = (offsetX/width)*100;
      textElement.style.background = `linear-gradient(to right, ${to} ${percentage}%, ${from} ${percentage}%)`;
      textElement.style.backgroundClip = "text";
      textElement.style.color = "transparent";
    }

    const handleMouseLeave = ()=>{
      textElement.style.background = "none";         
      textElement.style.backgroundClip = "unset";   
      textElement.style.color = from;   
    }

    textElement.addEventListener('mousemove', handleMouseMove);
    textElement.addEventListener('mouseleave', handleMouseLeave);

    return ()=>{
      textElement.removeEventListener('mousemove', handleMouseMove);
      textElement.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [id, from, to])
}