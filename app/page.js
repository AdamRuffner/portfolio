"use client";
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import code from "../public/code.png";
import porsche from "../public/porsche.jpg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> </title>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="py-10">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className=" text-xl dark:text-gray-400">developedbyadam</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl dark:text-gray-400"
                />
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
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Adam Ruffner
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-gray-300">
              Web Developer
            </h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-l mx-auto dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus quidem corporis voluptate voluptatem! Distinctio
              totam est earum? Nemo esse soluta architecto, vitae dolorum
              excepturi similique facilis, vel ullam perferendis error.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-600">
            <a href="https://www.linkedin.com/in/adamruffner">
              <AiFillLinkedin />
            </a>
            <a href="https://www.github.com/adamruffner">
              <AiFillGithub />
            </a>
          </div>
        </section>
        {/* end of first page */}
        <section className="mt-20">
          <div>
            <h3 className=" text-3xl py-1 dark:text-teal-600">Specialties</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam
              odit deleniti possimus nihil, blanditiis debitis vero nobis in
              perspiciatis expedita iure natus recusandae corrupti magni. Odit
              corporis modi unde.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="hashtag image"
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-600">
                Great Coding
              </h3>
              <p className=" py-2 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quae sed omnis sunt aliquid ex vel. Dolore cum ullam laborum
                aperiam ea illum, error sit fugiat iste eos! Doloribus, ipsum?
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className=" text-gray-800 py-1 dark:text-gray-400">HTML</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">Tailwind</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">ReactJS</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">NodeJS</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="hashtag image"
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-600">
                Great Coding
              </h3>
              <p className=" py-2 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quae sed omnis sunt aliquid ex vel. Dolore cum ullam laborum
                aperiam ea illum, error sit fugiat iste eos! Doloribus, ipsum?
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className=" text-gray-800 py-1 dark:text-gray-400">HTML</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">Tailwind</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">ReactJS</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">NodeJS</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="hashtag image"
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-600">
                Great Coding
              </h3>
              <p className=" py-2 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quae sed omnis sunt aliquid ex vel. Dolore cum ullam laborum
                aperiam ea illum, error sit fugiat iste eos! Doloribus, ipsum?
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className=" text-gray-800 py-1 dark:text-gray-400">HTML</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">Tailwind</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">ReactJS</p>
              <p className=" text-gray-800 py-1 dark:text-gray-400">NodeJS</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1 dark:text-teal-600">Portfolio</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, molestias eos obcaecati, deleniti quibusdam omnis
              voluptatem natus commodi aliquid vitae praesentium. Delectus odio,
              ratione deserunt commodi dicta tenetur eos in?
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                src={porsche}
                alt="car"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={porsche}
                alt="car"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={porsche}
                alt="car"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={porsche}
                alt="car"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
