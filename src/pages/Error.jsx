import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className=" min-h-screen grid items-center">
        <div className=" text-center">
          <p className="text-9xl font-semibold text-primary ">404</p>
          <h1 className=" text-3xl mt-4 tracking-tight font-bold sm:text-5xl">
            page not found
          </h1>
          <p className="mt-4 tracking-wider font-light leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className=" mt-10">
            <Link to="/" className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className=" min-h-screen grid items-center">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};
export default Error;
