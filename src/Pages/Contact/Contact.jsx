import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiCustomerService2Line,
} from "react-icons/ri";
import Hero from "./components/Hero";
import HeroCards from "./components/HeroCards";
import ContactBackupTeam from "./components/ContactBackupTeam";
import Form from "./components/Form";
import FAQ from "./components/FAQ";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Hero */}
      <Hero />

      {/* Contact Cards */}
      <HeroCards />

      {/* Form + Map */}
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        {/* Form */}
        <Form />

        {/* Contact Backup Team */}
        <ContactBackupTeam />
      </div>

      {/* FAQ */}
      <FAQ />
    </div>
  );
}

export default Contact;
