import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("users");

  return (
    <div className="px-4">
      <h1 className="mb-10 text-2xl font-medium md:mb-20 md:text-3xl">
        Dashboard
      </h1>
      <div className="tabs border-b border-white justify-between overflow-x-auto">
        <Link className="tab-bordered tab rounded-t-md font-medium tab-active bg-base-300">
          all
        </Link>
        <Link className=" tab rounded-t-md font-medium  bg-base-300">mine</Link>
        <Link className="tab-bordered tab rounded-t-md font-medium  bg-base-300">
          frontend
        </Link>
        <Link className="tab-bordered tab rounded-t-md font-medium  bg-base-300">
          backend
        </Link>
        <Link className="tab-bordered tab rounded-t-md font-medium  bg-base-300">
          design
        </Link>
        <Link className="tab-bordered tab rounded-t-md font-medium  bg-base-300">
          marketing
        </Link>
        <Link className="tab-bordered tab rounded-t-md font-medium  bg-base-300">
          others
        </Link>
      </div>
    </div>
  );
}

export default Home;
