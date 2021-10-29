
import Footer from "../components/footer";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";


export default function Component() {
  return (
    <>
      <main className="flex-grow">
        <HeroHome />
        <Features />
        {/* <Count /> */}
      </main>
      <Footer />
    </>
  );
}
