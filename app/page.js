import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title> </title>
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className=" text-xl">developedbyadam</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium">
              Adam Ruffner
            </h2>
            <h3 className=" text-2xl py-2">Web Developer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus quidem corporis voluptate voluptatem! Distinctio
              totam est earum? Nemo esse soluta architecto, vitae dolorum
              excepturi similique facilis, vel ullam perferendis error.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>
        {/* end of first page */}
        <section>
          <div>
            <h3 className=" text-3xl py-1">Specialties</h3>
            <p className=" text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam
              odit deleniti possimus nihil, blanditiis debitis vero nobis in
              perspiciatis expedita iure natus recusandae corrupti magni. Odit
              corporis modi unde.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
