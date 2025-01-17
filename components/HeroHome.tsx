import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className='relative'>
      {/* Illustration behind hero content */}
      <div
        className='absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2 -z-1'
        aria-hidden='true'
      >
        <svg
          width='1360'
          height='578'
          viewBox='0 0 1360 578'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              x1='50%'
              y1='0%'
              x2='50%'
              y2='100%'
              id='illustration-01'
            >
              <stop stopColor='#FFF' offset='0%' />
              <stop stopColor='#EAEAEA' offset='77.402%' />
              <stop stopColor='#DFDFDF' offset='100%' />
            </linearGradient>
          </defs>
          <g fill='url(#illustration-01)' fillRule='evenodd'>
            <circle cx='1232' cy='128' r='128' />
            <circle cx='155' cy='443' r='64' />
          </g>
        </svg>
      </div>

      <div className='max-w-6xl px-4 mx-auto sm:px-6'>
        {/* Hero content */}
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-16'>
            <span className='mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl leading-tighter'>
              <h2 className='block'>Sora AI</h2>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                a wonderful video generator model
              </span>
            </span>

            <div className='max-w-3xl mx-auto mt-8'>
              <p className='mb-8 text-xl text-gray-600'>
                The first foundation model for generative video based on the
                video model openai's sora.
              </p>

              <div className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'>
                <div>
                  <Link
                    className='w-full mb-4 text-white bg-blue-600 btn hover:bg-blue-700 sm:w-auto sm:mb-0'
                    href='#getStarted'
                  >
                    Start free
                  </Link>
                </div>

                <div>
                  <Link
                    className='w-full text-white bg-gray-900 btn hover:bg-gray-800 sm:w-auto sm:ml-4'
                    href='#faq'
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
