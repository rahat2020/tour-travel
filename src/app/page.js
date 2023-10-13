import FeaturedPlaces from "@/components/FeaturedPlaces/FeaturedPlaces";
import FeaturedVideos from "@/components/FeaturedVideos/FeaturedVideos";
import Header from "@/components/Header/Header";


export default function Home() {
  return (
    <main>
      <Header />
      <FeaturedPlaces/>
      <FeaturedVideos/>
    </main>
  )
}
