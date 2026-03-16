/*
  Home.jsx — The single-page home route
  Assembles all sections in order inside the Layout wrapper.
  Each section has a matching id attribute for smooth-scroll navigation.
*/

import Layout from '../layout/Layout'
import Hero           from '../components/Hero'
import About          from '../components/About'
import TechnicalSkills from '../components/TechnicalSkills'
import Experience     from '../components/Experience'
import Achievements   from '../components/Achievements'
import Contact        from '../components/Contact'
import Footer         from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      {/* ── Sections — each has id matching navLinks ── */}
      <Hero />
      <About />
      <TechnicalSkills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </Layout>
  )
}
