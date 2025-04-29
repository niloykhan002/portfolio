import lifestream from "../assets/projects/lifestream.png";
import studycircle from "../assets/projects/studycircle.png";
import crowdcube from "../assets/projects/crowdcube.png";

const Projects = () => {
  return (
    <div className="mt-28">
      <h1 className="text-4xl text-center font-bold my-12">Projects</h1>
      <div className="grid grid-cols-3">
        {/* card-1 */}
        <div className="card border border-gray-100 bg-base-100 w-96 shadow-sm">
          <figure className="p-5">
            <img
              className="rounded-lg h-52 w-full"
              src={studycircle}
              alt="Study Circle"
            />
          </figure>
          <div className="p-5">
            <h2 className="text-2xl font-semibold">Study Circle</h2>
            <p className="my-3 text-lg">
              Study Circle comes into the scenario to reduce or minimize the
              communication gap and connects people in a moment using the
              amazing power of SMS and email.
            </p>
            <div className="card-actions mb-5">
              <div className="badge badge-outline">Javascript</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Tailwind</div>
            </div>
            <div>
              <a
                href="https://study-circle-b312a.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn rounded-lg text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card border border-gray-100 bg-base-100 w-96 shadow-sm">
          <figure className="p-5">
            <img
              className="rounded-lg h-52 w-full border border-gray-200"
              src={crowdcube}
              alt="Study Circle"
            />
          </figure>
          <div className="p-5">
            <h2 className="text-2xl font-semibold">Crowd Cube</h2>
            <p className="my-3 text-lg">
              We’re a personal crowdfunding website where you can raise money
              for anything that matters to you. From personal causes and
              projects to events and more.
            </p>
            <div className="card-actions mb-5">
              <div className="badge badge-outline">Javascript</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Tailwind</div>
            </div>
            <div>
              <a
                href="https://crowdcube-8aca5.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn rounded-lg text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card border border-gray-100 bg-base-100 w-96 shadow-sm">
          <figure className="p-5">
            <img
              className="rounded-lg h-52 w-full border border-gray-200"
              src={lifestream}
              alt="Study Circle"
            />
          </figure>
          <div className="p-5">
            <h2 className="text-2xl font-semibold">Life Stream</h2>
            <p className="my-3 text-lg">
              This is Website for blood donation and find donor online. Our
              online blood donation platform connects donors with those in need,
              making it easy to find and give blood when it matters most.
            </p>
            <div className="card-actions mb-5">
              <div className="badge badge-outline">Javascript</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Tailwind</div>
            </div>
            <div>
              <a
                href="https://life-stream-4c273.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn rounded-lg text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
