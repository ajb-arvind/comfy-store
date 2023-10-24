const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center sm:gap-6 items-center">
        <h1 className=" text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          we love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure earum
        quam vel iusto necessitatibus! Possimus officiis molestiae unde ab,
        blanditiis, dicta aut cumque animi repellendus explicabo neque quis?
        Officiis, ad!
      </p>
    </>
  );
};
export default About;
