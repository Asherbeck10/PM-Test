import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AccessMarkets from "../../components/AccessMarkets/AccessMarkets";
import Services from "../../components/Services/Services";
import Empower from "../../components/Empower/Empower";
import Withdrawals from "../../components/Withdrawals/Withdrawals";
import Updates from "../../components/Updates/Updates";
import Reviews from "../../components/Reviews/Reviews";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1440px] bg-white">
      <Header />
      <Hero />
      <AccessMarkets />
      <Services />
      <Empower />
      <Withdrawals />
      <Updates />
      <Reviews />
      <GetStarted />
      <Footer />
    </div>
  );
}
