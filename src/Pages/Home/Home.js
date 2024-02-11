import Banner from "./Banner/Banner";
import BusinessSummery from "./BusinessSummery/BusinessSummery";
import Contact from "./Contact/Contact";
import Location from "./Team/Team";
import Tools from "./Tools/Tools";


const Home = () => {
  return (
    <>
      <Banner />
      <Tools />
      <BusinessSummery />
      <Location />
      <Contact />
    </>
  )
}

export default Home;