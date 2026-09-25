import { Megaphone, FileText, Image as ImageIcon, Building2, Package, ArrowRight, Mail } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading } from '@/components/ui/Atoms'
import BlogCover from '@/components/ui/BlogCover'
import NewsImage from '@/Assest/newsImg.png'
import PressHero from '@/Assest/Press_Hero.png'
import Button from '@/components/ui/Button'
import NewsCarousel from '@/components/ui/NewsCarousel'

const news = [
  { image: NewsImage, date: 'September 2026', readTime: '4 min read', title: 'Finwise expands its vision for lifelong financial intelligence', excerpt: 'Finwise is expanding its mission to help people build smarter financial habits and make better money decisions at every stage of life.' },
  { image: NewsImage, date: 'July 2026', readTime: '3 min read', title: 'Finwise partners with new financial institutions for open banking', excerpt: 'New partnerships extend the range of accounts individuals and families can securely connect to Finwise.' },
   { image: NewsImage, date: 'July 2026', readTime: '3 min read', title: 'Finwise partners with new financial institutions for open banking', excerpt: 'New partnerships extend the range of accounts individuals and families can securely connect to Finwise.' },

]

const mediaKit = [
  { icon: <ImageIcon className="h-5 w-5" />, title: 'Brand Assets', description: 'Finwise logos and approved brand assets.', cta: 'Download Assets' },
  { icon: <Building2 className="h-5 w-5" />, title: 'Company Overview', description: 'A concise overview of Finwise, its mission, and what we\u2019re building.', cta: 'Download Overview' },
  { icon: <Package className="h-5 w-5" />, title: 'Product Information', description: 'Information about Finwise\u2019s products, technology, and financial intelligence platform.', cta: 'Download Product Kit' },
  { icon: <FileText className="h-5 w-5" />, title: 'Media Resources', description: 'Approved materials to help support Finwise coverage.', cta: 'Download Resources' },
]

export default function PressNewsroom() {
  return (
    <div>
       <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${PressHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        <div className="relative">
      <PageHero
        crumb="Press & Newsroom"
        title="The latest from Finwise."
        description="News, announcements, company updates, and resources for media and anyone interested in what we're building."
        // media={<OrbitVisual icon={<Megaphone className="h-10 w-10" />} tone="teal" size="lg" badges={[<FileText className="h-4 w-4" />, <ImageIcon className="h-4 w-4" />]} />}
      />
      </div>
      </div>
      <NewsCarousel items={news} />

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Media Kit" title="Everything you need to tell the Finwise story." align="left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mediaKit.map((m) => (
              <div key={m.title} data-aos="fade-up" className="overflow-hidden rounded-2xl border border-white/5 bg-ink-800/60">
                <img src={NewsImage} alt="" className="h-40 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm text-mist-400">{m.description}</p>
                  <a href="#" className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-500">
                    {m.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <p data-aos="fade-up" className="text-sm font-semibold text-gold-500">Press Contact</p>
        <h2 data-aos="fade-up" data-aos-delay="60" className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
          Need more information?
        </h2>
        <p data-aos="fade-up" data-aos-delay="120" className="mt-4 text-sm text-mist-400">
          For media enquiries, interview requests, company information, or additional
          materials, get in touch with the Finwise team.
        </p>
        <div data-aos="fade-up" data-aos-delay="160" className="mt-6">
          <Button href="mailto:press@finwise.com" variant="primary">
            <Mail className="h-4 w-4" /> Contact Press
          </Button>
        </div>
      </section>
    </div>
  )
}
