const Banner = ({
  className,
  spanClass,
  spanText,
  textBeforeSpan,
  textAfterSpan

}: {
  className?: string
  spanClass?: string
  spanText?: string
  textBeforeSpan?: string
  textAfterSpan?: string
}) => {
  return (  
    <div className={`text-lg max-md:text-sm font-montserrat w-full text-center bg-purple-200 ${className}`}>{textBeforeSpan}{spanText && <span className={`font-bold bg-violet-200 p-1.5 max-md:p-1 rounded ${spanClass}`}>{spanText}</span>}{textAfterSpan}</div>
  );
}
 
export default Banner;