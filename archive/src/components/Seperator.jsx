export default function Seperator({ className }) {
  return (
    <>
      {/* show the seperator if the height is small */}
      <div className={`${className} z-10 bg-[url('/src/assets/images/wavy-pattern.png')] w-screen h-5 bg-contain bg-center bg-repeat`}></div>
    </>
  )
}
