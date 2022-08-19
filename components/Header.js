import Link from 'next/link';
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function Header() {

  function openNav() {
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('close-icon').classList.remove('hidden');
  }

  function closeNav() {
    document.getElementById('close-icon').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
  }

  return (
    <div className="flex justify-between p-9 sm:p-12">
      <div className="text-xl font-medium">So li Anna Lee</div>
      <nav>
        <MenuIcon className="h-6 w-6 sm:hidden" onClick={openNav}/>
        <XIcon className="hidden relative bottom-5 h-6 w-6 z-20" id="close-icon" onClick={closeNav}/>
        <ul id="menu" className="fixed sm:sticky sm:h-fit top-0 left-0 right-0 bottom-0 z-10 h-screen flex flex-col items-center justify-center bg-white hidden sm:flex sm:flex-row text-lg sm:justify-between sm:w-48">
          <li className="p-1 text-xl sm:text-base" onClick={closeNav}><Link href="#about"><a>About</a></Link></li>
          <li className="p-1 text-xl sm:text-base" onClick={closeNav}><Link href="#work"><a>Work</a></Link></li>
          <li className="p-1 text-xl sm:text-base" onClick={closeNav}><Link href="#contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}