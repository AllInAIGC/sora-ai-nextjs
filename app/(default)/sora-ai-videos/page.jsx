import { getSEOTags } from '@/libs/seo'
import config from '@/config'
import PageComponent from './PageComponent'

export async function generateMetadata() {
  return getSEOTags({
    title: `Sora AI Videos | ${config.appName}`,
    canonicalUrlRelative: `/sora-ai-videos`,
  })
}

export default function SoraAIVideosPage() {
  return (
    <section className='pt-16'>
      <div className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='pt-12'>
          <div className='max-w-3xl pb-2 mx-auto text-center md:pb-4'>
            <h1 className='mb-4 h2'>Sora AI Videos</h1>
          </div>
        </div>

        <PageComponent />
      </div>
    </section>
  )
}
