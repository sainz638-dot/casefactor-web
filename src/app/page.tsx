import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StackGame from '@/components/StackGame'
import ProductsSection from '@/components/ProductsSection'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import ShowcaseSection from '@/components/ShowcaseSection'
import EditorSection from '@/components/EditorSection'
import EditorModal from '@/components/EditorModal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="section-glow-divider max-w-4xl mx-auto" />
      <StackGame />
      <div className="section-glow-divider max-w-4xl mx-auto" />
      <ProductsSection />
      <div className="section-glow-divider max-w-4xl mx-auto" />
      <HowItWorks />
      <div className="section-glow-divider max-w-4xl mx-auto" />
      <SocialProof />
      <div className="section-glow-divider max-w-4xl mx-auto" />
      <ShowcaseSection />
      <div className="section-glow-divider max-w-4xl mx-auto" />
      <EditorSection />
      <Footer />
      <EditorModal />
    </main>
  )
}
