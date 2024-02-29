'use client'
import { allVideoList } from '@/components/openaiVideo'

export default function PageComponents() {
  return (
    <div className='pb-5 bg-white rounded shadow-md border-slate-200'>
      <div
        role='list'
        className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'
      >
        {allVideoList.map(file => (
          <div key={file.prompt}>
            <div className='flex items-start justify-center rounded-xl'>
              <video
                src={file.videoUrl}
                controls={true}
                autoPlay={false}
                playsInline={true}
                preload={'metadata'}
                controlsList={'nodownload'}
                style={{ width: '90%', height: '240px' }}
                onMouseOver={event => {
                  event.currentTarget.play()
                }}
                onMouseLeave={event => {
                  event.currentTarget.pause()
                }}
              />
            </div>
            <div className={'flex justify-center items-center'}>
              <p className='pointer-events-none mt-2 block text-sm font-medium w-[90%]'>
                prompt: {file.prompt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
