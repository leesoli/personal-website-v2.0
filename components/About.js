export default function About() {
  return (
    <div id="about" >
      <div className="sm:flex p-9 sm:p-12">
        <div className="flex flex-col justify-between sm:w-80 lg:items-center lg:w-full pb-8">
          <h2 className="text-4xl font-cursive">Hi there!</h2>

          <p className="my-4 max-w-xl lg:text-center">I'm Anna, a React front-end developer based in Tustin, California. I'm a self-taught developer with a keen eye for design and love to build simple, stylish interfaces on my free time. I'm inspired and motivated by anything that is food (including the first application I ever built!).</p>

          <p className="my-4 max-w-xl lg:text-center">I became interested in programming in 2021 during the pandemic. Previously, I worked as a Medic and Teamleader in the U.S. Army and was in search of a career where I would feel equally fulfilled and challenged. I fell in love with programming as it allowed me to apply my creative ability and problem-solving skills.</p>

          <p className="my-4 max-w-xl lg:text-center">After completing Scrimba Frontend Career Path, I am searching for a new challenge: to jumpstart my career in frontend development.</p>

          <p className="my-4 max-w-xl lg:text-center">On my free time, I like to go rock climb or swimming.</p>
        </div>
        <div className=""></div>
      </div>

      <div className="flex flex-col p-9 sm:p-8 sm:mb-12 sm:flex-row sm:justify-between sm:mx-auto w-full sm:w-3/4 bg-gray-100 sm:rounded-xl max-w-3xl">
        <div className="pb-4 text-xl font-cursive sm:text-2xl">Skills</div>

        <div className="sm:w-80 flex flex-wrap">
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">Javascript</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">React</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">Redux</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">HTML</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">CSS</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">Tailwind</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">Next.js</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">Node.js</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">Express</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">MongoDB</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">PostgreSQL</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">MySQL</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">RESTful API Development</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">GitHub</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">npm</span>
          <span className="bg-white border-2 border-gray-300 px-2 rounded-lg mr-1 mb-1">Figma</span>
        </div>
      </div>
    </div>
  )
}