import {useState, useEffect} from 'react';
import data from '../data.json';
import Image from 'next/image';
import {XIcon, ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon} from '@heroicons/react/solid';

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState('');

  useEffect(() => {
    setProjects(data);
  }, [])

  function moveLeft() {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  function moveRight() {
    if (index <= projects.length) {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  function handleClick(selectedIndex) {
    setIndex(selectedIndex);
  }

  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    setIndex(0);
  }

  function openModal() {
    document.getElementById('modal').classList.remove('hidden')
  }

  return (
    <div id="work" className="flex flex-col py-9 sm:p-12">
      <h2 className="text-4xl my-8 font-cursive self-center">Projects</h2>
      <div className="border-double border-y-4 border-gray-300 py-12 sm:py-16">
        <div className="max-w-4xl sm:flex sm:justify-around sm:mx-auto">
          {projects.map(project => (
            <div className="relative w-3/4 mx-auto sm:w-2/5 mb-4 last:mb-0 sm:mb-0 h-80">
              <Image
                onClick={() => {
                  setProject(project);
                  openModal();
                }}
                layout="fill" objectFit="cover" className="hover:scale-110 hover:brightness-110 duration-500 ease-in-out" src={project.thumbnail}/>
            </div>
          ))}
        </div>
      </div>

      <div id="modal" className="hidden flex flex-col justify-center fixed top-0 left-0 z-30 h-full w-full bg-gray-900">
          <XIcon className="text-white h-5 w-5 absolute right-5 top-5 sm:right-12 sm:top-12 hover:cursor-pointer"onClick={closeModal}/>
          {project &&
          <div className="sm:flex items-center justify-around px-8">
            <div className="flex flex-col-reverse sm:justify-between sm:flex-row items-center sm:w-8/12">
              <div className="flex flex-nowrap sm:flex-col justify-between sm:w-2/12 w-10/12 sm:h-96 overflow-x-auto my-4 border-[1px] border-gray-700 sm:my-0">
                {project.photos.map((url, index) => (
                  <div className="relative w-1/3 sm:w-full h-16 sm:h-32 hover:cursor-pointer">
                  <Image onClick={() => {
                    handleClick(index)
                  }} layout="fill" objectFit="cover" src={url}/>
                  </div>
                ))}
              </div>

              <div className="flex w-full justify-center sm:px-8">
                <div className="w-2/12 flex items-center justify-center text-gray-400">
                  <ChevronLeftIcon      className="w-12 h-12 hover:cursor-pointer hover:brightness-200"
                  onClick={moveLeft}
                  />
                </div>
                <div className="relative  h-72 sm:h-96 mt-8 w-full">
                  <Image layout="fill" src={project.photos[index]} objectFit="contain"/>
                </div>
                <div className="text-gray-400 w-2/12 flex items-center justify-center">
                    <ChevronRightIcon      className="w-12 h-12 hover:cursor-pointer border-gray-400 hover:brightness-200"
                    onClick={moveRight}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mx-auto sm:mx-0 my-4 w-10/12 sm:my-0 sm:w-4/12 sm:px-8 sm:h-96">
              <div className="self-start text-xl text-white text-gray-200">{project.name}</div>
              <div className="my-4 text-white max-w-sm text-gray-400">{project.description}</div>
              <div className="hidden sm:flex flex-wrap max-w-sm my-4">
                {project.techStack.map(item => (
                  <span className="bg-gray-800 p-2 border-[1px] border-gray-200 rounded-3xl mr-1 mb-1 text-gray-200 text-xs">{item}</span>
                ))}
              </div>
              <a href={project.url} className="text-gray-400 border-b-2 w-fit hover:cursor-pointer border-gray-400 hover:brightness-125">View Code <ArrowRightIcon className="inline w-5 h-5"/></a>
            </div>
          </div>
          }
        </div>
    </div>
  )
}