'use client'
import Link from 'next/link'
import { VideoItem } from '@/components/openaiVideo'

const VideoExample = ({ videoList }: { videoList: Array<VideoItem> }) => {
  return (
    <section>
      {' '}
      <div className='max-w-6xl px-2 mx-auto border-[14px] border-[#ffffff1f] object-fill mt-8'>
        <div className={'mx-auto bg-white'}>
          <div className={'pb-2 border-b-2'}>
            <h2
              className={
                'text-blue-500 pt-4 text-4xl flex justify-center items-center'
              }
            >
              Sora Video Examples
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-4 px-6 py-4 md:grid-cols-2'>
            {videoList.map((file, index) => (
              <div key={index}>
                <div className='flex items-start justify-center rounded-xl'>
                  <video
                    src={file.videoUrl}
                    controls={true}
                    autoPlay={false}
                    playsInline={true}
                    preload={'metadata'}
                    controlsList={'nodownload'}
                    onMouseOver={event => {
                      event.currentTarget.play()
                    }}
                    onMouseLeave={event => {
                      event.currentTarget.pause()
                    }}
                    style={{ width: '90%', height: '270px' }}
                  />
                </div>
                <div className={'flex justify-center items-center'}>
                  <p className='pointer-events-none mt-2 block text-sm font-medium text-gray-500 w-[90%]'>
                    Prompt: {file.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div key={'more'} className={'px-6 py-4'}>
            <Link
              href={`/sora-ai-videos`}
              className={
                'flex justify-center items-center text-xl text-red-400 hover:text-blue-600'
              }
            >
              get more {'>>'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoExample
