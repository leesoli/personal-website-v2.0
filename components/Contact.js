import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center py-8">
      <div className="flex justify-between w-28">
        <a href="https://www.linkedin.com/in/solilee/" >
          <BsLinkedin className="text-4xl" aria-hidden="true"/>
          <span class="sr-only">Linkedin icon</span>
        </a>
        <a href="https://github.com/leesoli">
          <BsGithub className="text-4xl" aria-hidden="true"/>
          <span class="sr-only">Github icon</span>
        </a>
      </div>
    </div>
  )
}