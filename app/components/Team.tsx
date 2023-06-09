import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

interface TeamsData {
  img: string;
  name: string;
  comment: string;
  facebook: string;
  github: string;
  mail: string;
  linkden: string;
}

const AllLinks = [
  {
    img: "https://avatars.githubusercontent.com/u/59206903?v=4",
    name: "Sibendra Timalsina",
    comment: "i practice sometimes :)",
    facebook: "https://www.facebook.com/sibindra.timalsina.7",
    github: "https://github.com/Sibindra",
    linkden: "https://www.linkedin.com/in/sibendra-timalsina-b7165b262/",
    mail: "timalsinasibindra@gmail.com",
  },
  {
    name: "Aananda Bhusal",
    img: "https://avatars.githubusercontent.com/u/84623222?v=4",
    comment: "lets do it 👍",
    facebook: "https://www.facebook.com/aananda.bhusal",
    github: "https://github.com/Aananda-git",
    linkden: "https://www.linkedin.com/in/aananda-bhusal-74228b249/",
    mail: "aananda.191701@ncit.edu.np",
  },

  {
    name: "Deepak Rana Magar",
    img: "https://avatars.githubusercontent.com/u/94750400?v=4",
    comment: "an artist simply trying",
    facebook: "https://www.facebook.com/deepak.rana1234",
    github: "https://github.com/DeepakRanaMagar",
    linkden: "#",
    mail: "dpk.me.123@gmail.com",
  },

  {
    name: "Sachit Khadka",
    img: "https://avatars.githubusercontent.com/u/106606778?v=4",
    comment: "Tryna be useful",
    facebook: "https://www.facebook.com/sachit.khadka.12/",
    github: "https://github.com/Sachit56",
    linkden: "https://www.linkedin.com/in/sachit-khadka-a2913725a/",
    mail: "sachitkhadka73@gmail.com",
  },
];

function TeamSection(props: TeamsData) {
  return (
    <div className="items-center border-2 border-black rounded-none shadow sm:flex">
      <div className="flex-1 w-full sm:w-48 h-48">
        <div className="relative w-full h-full">
          <Image
            className="rounded-none"
            src={props.img}
            alt="Bonnie Avatar"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {props.name}
        </h3>
        <p className="mt-3 mb-4 text-lg text-gray-500">{props.comment}</p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <Link
              href={props.facebook}
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link
              href={props.github}
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link
              href={props.linkden}
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link
              href={`mailto:${props.mail}`}
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              <FaEnvelope className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div id="team">
      <section className="bg-white border-2">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">
              Meet our passionate team behind this app
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {AllLinks.map((link) => (
              <TeamSection
                key={link.name}
                img={link.img}
                name={link.name}
                comment={link.comment}
                facebook={link.facebook}
                github={link.github}
                linkden={link.linkden}
                mail={link.mail}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
