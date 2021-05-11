import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Slide />
    </>
  )
}
