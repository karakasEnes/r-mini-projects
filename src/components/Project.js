function Project({ project }) {
  const { projectName, gitLink, liveLink } = project;
  return (
    <div className='group relative bg-slate-800 rounded-3xl text-white'>
      <div className='flex flex-col items-center justify-center px-8 py-4 h-96'>
        <div className='flex w-4/5 justify-center items-center py-8 px-16 text-xl h-2/5'>
          <div className='text-3xl tracking-[0.3em] font-thin'>
            {projectName}
          </div>
        </div>

        <div className='absolute left-0 bottom-0 flex w-full justify-between items-center space-x-4'>
          <a
            href={gitLink}
            target='_blank'
            rel='noreferrer'
            className='hidden group-hover:block py-4 px-8 bg-slate-600 rounded-3xl text-lg flex-1 text-center hover:bg-emerald-500 hover:scale-110'
          >
            Code
          </a>
          <a
            href={liveLink}
            target='_blank'
            rel='noreferrer'
            className='hidden group-hover:block py-4 px-8 bg-slate-600 rounded-3xl text-lg flex-1 text-center hover:bg-emerald-500 hover:scale-110'
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
