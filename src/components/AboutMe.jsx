import { FaBook } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoLogoGameControllerB, IoMdFootball } from "react-icons/io";

const AboutMe = () => {
  return (
    <div className="mt-28">
      <div>
        <h1 className="text-4xl text-center font-bold my-12">
          A Little About Me
        </h1>
        <h3 className="text-3xl font-semibold mt-12 mb-8">Who Am I!</h3>
        <p className="text-lg">
          I’m a passionate MERN Stack Developer who loves building modern,
          scalable, and high-performance web applications. My journey into web
          development started with a curiosity about how websites work, and over
          time, that curiosity turned into a deep passion for coding. From
          writing my first Hello World program to developing full-fledged
          applications, I’ve come a long way and continue to learn every day.
        </p>
        <h3 className="text-3xl font-semibold mt-12 mb-8">
          My Programming Journey
        </h3>
        <p className="text-lg">
          My journey began with a fascination for technology and
          problem-solving. I started exploring programming by learning
          JavaScript, which led me to dive deep into full-stack web development.
          As I honed my skills, I discovered the power of the MERN stack
          (MongoDB, Express, React, Node.js) and fell in love with creating
          seamless, user-friendly applications. I enjoy working on real-world
          projects, whether it’s developing a dynamic web app, optimizing
          performance, or integrating APIs. The ability to turn ideas into
          reality through code is what excites me the most!
        </p>
        <h3 className="text-3xl font-semibold mt-12 mb-8">
          What I Love to Work On
        </h3>
        <div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <FaCheck className="text-green-600 text-2xl" />
            <p>
              <span className="text-xl font-semibold">
                Full-Stack Web Development -
              </span>{" "}
              Building interactive, scalable, and responsive applications.
            </p>
          </div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <FaCheck className="text-green-600 text-2xl" />
            <p>
              <span className="text-xl font-semibold">Frontend Magic -</span>{" "}
              Crafting sleek UI/UX experiences with React & Tailwind CSS.
            </p>
          </div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <FaCheck className="text-green-600 text-2xl" />
            <p>
              <span className="text-xl font-semibold">
                Backend Engineering -
              </span>
              Developing RESTful APIs, managing databases, and ensuring
              security.
            </p>
          </div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <FaCheck className="text-green-600 text-2xl" />
            <p>
              <span className="text-xl font-semibold">
                Optimizing Performance -
              </span>{" "}
              Speeding up applications and enhancing user experience.
            </p>
          </div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <FaCheck className="text-green-600 text-2xl" />
            <p>
              <span className="text-xl font-semibold">
                Learning & Experimenting -
              </span>{" "}
              Staying updated with the latest technologies and best practices.
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-semibold mt-12 mb-8">
          Hobbies & Interests
        </h3>
        <p className="text-lg">
          While coding is a big part of my life, I also love exploring other
          creative and recreational activities:
        </p>
        <div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <IoMdFootball className="text-2xl" />
            <p>
              <span className="text-xl font-semibold">Sports Enthusiast -</span>{" "}
              I enjoy playing football, cricket
            </p>
          </div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <IoLogoGameControllerB className="text-2xl" />
            <p>
              <span className="text-xl font-semibold">Gaming -</span> I like to
              play strategy and combat game in my free time
            </p>
          </div>
          <div className="flex lg:items-center gap-2 my-4 text-lg">
            <FaBook className="text-2xl" />
            <p>
              <span className="text-xl font-semibold">
                Tech & Self-Development Books -
              </span>{" "}
              Always on the lookout for inspiration and learning new skills.
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-semibold mt-12 mb-8">Let’s Connect!</h3>
        <p className="text-lg">
          I’m always open to new opportunities, collaborations, and interesting
          tech discussions. If you’re looking for someone who’s passionate about
          coding, problem-solving, and building exciting web applications, let’s
          connect and create something amazing together!
        </p>
        <button className="btn bg-sky-600 text-white my-6">
          Get in Touch!
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
