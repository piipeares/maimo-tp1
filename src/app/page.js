import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HomeContainer from "@/app/components/HomeContainer";

export default function Home() {
  return (
    <div className="page_container">
      <Navbar />
      <HomeContainer />
      <Footer />
    </div>
  );
}
