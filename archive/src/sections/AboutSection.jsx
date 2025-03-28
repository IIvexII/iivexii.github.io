import { CompGroupImage, groupImage } from "../assets";
import { Image } from "../components";
import { highlightText } from "../utils";

export default function AboutSection({ aboutMe }) {
  return (
    <section
      id="about-me"
      className="snap-start flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[660px]"
    >
      <div className="mx-8 h-full w-full flex justify-center items-center max-w-[1024px] max-sm:flex-col max-sm:justify-between max-sm:space-y-10 max-sm:pb-16">
        <article className="flex flex-col max-sm:justify-end space-y-10 w-full pr-14 max-lg:pr-10 max-md:pr-4 max-md:space-y-8 max-sm:space-y-6 max-sm:mt-28 max-sm:pr-0">
          <h1 className="text-5xl underline underline-offset-8 decoration-wavy max-md:text-3xl max-sm:text-center hover:scale-110 transition duration-500 ease-in-out select-none">
            About Me
          </h1>
          <p className="text-xl text-justify hyphens-auto max-lg:text-lg max-[900px]:text-base hover:scale-110 custom-transition select-none">
            {highlightText(aboutMe, "highlight")}
          </p>
        </article>

        {/* image collection */}
        <div className="w-full h-full flex justify-center items-center max-sm:items-start">
          <Image
            src={groupImage}
            compressedSrc={CompGroupImage}
            alt="group"
            className="filter saturate-0 object-cover rounded-lg max-lg:w-[350px] max-[900px]:w-[300px] max-sm:w-[220px] max-sm:scale-110 hover:scale-125 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
