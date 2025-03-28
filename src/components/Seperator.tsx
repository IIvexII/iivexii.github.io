type SeperatorProps = {
  className?: string;
};

export default function Seperator({ className }: SeperatorProps) {
  return (
    <>
      {/* show the seperator if the height is small */}
      <div
        className={`${className} z-10 bg-[url('/assets/images/wavy-pattern.png')] w-screen h-5 bg-contain bg-center bg-repeat`}
      ></div>
    </>
  );
}
