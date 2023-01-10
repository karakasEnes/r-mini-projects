import ProjectList from "./ProjectList";

function Main() {
  return (
    <main className='bg-white'>
      <section className='bg-slate-900 mx-auto min-h-screen py-20 px-8 font-sans'>
        <h1 className='text-white text-center text-5xl mb-10 font-semibold '>
          React Mini Projects
        </h1>
        <ProjectList />
      </section>
    </main>
  );
}

export default Main;
