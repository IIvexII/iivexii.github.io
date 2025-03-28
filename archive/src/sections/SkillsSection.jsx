export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="snap-start flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[660px] overflow-hidden">
        <div className="mx-10 h-full w-full flex items-center max-w-[1024px] max-sm:flex-col-reverse max-sm:space-y-20 max-sm:pb-16">
            <div className="mt-56 w-full h-full flex flex-col space-y-16 justify-start items-center max-sm:mt-32">
                {/* Top Title */}
                <h1 className="text-5xl underline underline-offset-8 decoration-wavy  hover:scale-110 custom-transition select-none">Skills</h1>

                {/* List of all skills */}
                <div className="flex justify-center gap-6 max-sm:gap-4 flex-wrap">
                    {/* Dynamically make a list of skills from prop skills */}
                    {skills.map((skill, index) => (
                        <abbr title={skill.name} key={index}  className="bg-white rounded-full w-24 h-24 flex justify-center items-center shadow-lg hover:scale-125 custom-transition select-none max-[792px]:w-20 max-[792px]:h-20 max-sm:w-[70px] max-sm:h-[70px]">
                            {/* Background icon div */}
                            <div style={{ backgroundImage: `url(${skill.icon})` }} className="w-14 h-14 grayscale brightness-95 bg-contain bg-center bg-no-repeat max-[792px]:w-12 max-[792px]:h-12 max-sm:w-9 max-sm:h-9"></div>
                        </abbr>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
