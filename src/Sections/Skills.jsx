import { skills } from "../Constants"

const Skills = () => {
  return (
    <div id="Skills" className="text-center py-16 md:py-0">
      <h1 className="text-[24px] text-white font-bold">Skills</h1>
      <p className="text-[#C3C2C2]">Some of my Skills</p>

      <div className='flex flex-wrap gap-2 mx-auto pt-10 justify-center'>
        {
          skills.map((skill, index) => {
            return (
              <li key={index} className='bg-[#191A1D] text-[#959595] py-[15px] px-[30px] rounded-[10px] border border-[#404040] border-dashed font-semibold flex'>{skill.name}</li>
            )
          })
        }
      </div>

    </div>
  )
}

export default Skills
