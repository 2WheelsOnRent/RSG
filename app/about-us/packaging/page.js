import { PackagingSection } from "../../components/AboutSections";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Packaging | About Us | Prem Marbles",
  description: "Reliable, secure and efficient packaging and delivery.",
};

export default function PackagingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <PackagingSection />
      <Footer />
    </div>
  );
}
