/* eslint-disable react/no-unescaped-entities */
"use client";
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import code from "../public/code.png";
import design from "../public/design.png";
import schedule from "../public/schedule-app.jpg";
import sched from "../public/schedule.webp";
import garbage from "../public/garbage-app.jpg";
import dumpster from "../public/dumpster.webp";
import ecommerce from "../public/ecommerce.webp";
import porsche from "../public/porsche.jpg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> </title>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="py-10">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className=" text-xl dark:text-gray-400"></h1>
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
                  href="mailto:ruffneradam10@gmail.com"
                >
                  Email
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
              I am a front end web developer based in Virginia. I work with
              businesses to create unique websites to stun clients with a clean
              and user friendly environment.
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
          <div className="lg:gap-6 lg:grid grid-cols-3">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={design}
                alt="about me"
                width={100}
                height={100}
                className=" mx-auto rounded-xl"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-600">
                About Me
              </h3>
              <p className="py-2 dark:text-gray-400">
                My name is Adam Ruffner and I am a front end web developer in
                Virginia. In 2020 I decided that I wanted to learn how to code
                -- I started teaching myself with free online material and then
                decided to do an online bootcamp to further my knowledge and to
                have some structure while learning.
              </p>
              <p className=" py-2 dark:text-gray-400">
                Mantra: When you want to succeed as bad as you want to breathe,
                then you will be successful.
              </p>
              <p className=" py-2 dark:text-gray-400">
                When I am not sitting at the computer you can find me on the
                golf course or doing something car related.
              </p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <div className="  text-9xl">🧑🏻‍💻</div>

              <h3 className=" text-lg font-medium pt-8 pb-8 dark:text-teal-600">
                My Tech Stack
              </h3>
              <p className=" text-gray-800 py-3 dark:text-gray-400">• HTML</p>
              <p className=" text-gray-800 py-3 dark:text-gray-400">
                • Javascript
              </p>
              <p className=" text-gray-800 py-3 dark:text-gray-400">
                • ReactJS
              </p>
              <p className=" text-gray-800 py-3 dark:text-gray-400">• NextJS</p>
              <p className=" text-gray-800 py-3 dark:text-gray-400">• NodeJS</p>
              <p className=" text-gray-800 py-3 dark:text-gray-400">
                • Restful APIs
              </p>

              <p className=" text-gray-800 py-3 dark:text-gray-400">
                • Tailwind
              </p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="hashtag image"
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-600 w-100">
                My Why
              </h3>
              <p className="py-2 dark:text-gray-400">
                I do this because it is a career field where you get to
                constantly learn and better yourself. There is a sense of
                accountability with staying up with current technologies.
              </p>
              <p className=" py-2 dark:text-gray-400">
                We may not know what the next big thing in tech will be, but I
                know I will be there for it and ready to adapt.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1 dark:text-teal-600 flex justify-center">
              Portfolio
            </h3>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-center">
            <div className=" basis-1/4 flex-1">
              <p className="py-10 dark:text-gray-400">
                An Ecommerce site to look and filter through products, see
                product descriptions and prices using Fake Store API. It is
                deployed using Vercel.
              </p>
              <a
                href="https://ecommerce-showcase-chi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={ecommerce}
                  alt="car"
                  className="rounded-lg object-cover"
                  // width={"100%"}
                  // height={"90%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className=" basis-1/4 flex-1">
              <p className="py-10 dark:text-gray-400">
                A scheduling app with login, date & time selectors, and don't
                forget your confirmation email sent immediately! Also deplyed to
                vercel, does not use a back end.
              </p>
              <a
                href="https://scheduling-app1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={sched}
                  alt="car"
                  className="rounded-lg object-cover"
                  // width={"100%"}
                  // height={"90%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className=" basis-1/4 flex-1">
              <p className="py-10 dark:text-gray-400">
                One pager for a commercial dumpster business that has been
                around for multiple generations in the Indiana area. Deployed on
                Vercel, currently have placeholder images.
              </p>
              <a
                href="https://buck-truck.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={dumpster}
                  alt="car"
                  className="rounded-lg object-cover"
                  // width={"100%"}
                  // height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
