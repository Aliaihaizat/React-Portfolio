// components/Hero.jsx
import { useRef } from 'react';

export default function Hero() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* ... other content ... */}
      <button onClick={scrollToContact}>Contact Me</button>
      <div ref={contactRef} id="contact-section"></div>
    </section>
  );
}