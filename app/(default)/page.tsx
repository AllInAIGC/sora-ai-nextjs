import HeroHome from '@/components/HeroHome'
import FeaturesBlocks from '@/components/FeaturesBlocks'
import RelatedTweets from '@/components/RelatedTweets'
import VideoExample from '@/components/VideoExample'
// import GetStarted from '@/components/GetStarted'
import FAQ from '@/components/FAQ'
import { VideoItem, randomVideo } from '@/components/openaiVideo'

export default function Home() {
  const videoList = randomVideo(2) as VideoItem[]

  return (
    <>
      <HeroHome />

      <FeaturesBlocks />

      <VideoExample videoList={videoList} />

      <RelatedTweets />

      {/* <GetStarted /> */}

      <section id='faq'>
        <FAQ />
      </section>
    </>
  )
}
