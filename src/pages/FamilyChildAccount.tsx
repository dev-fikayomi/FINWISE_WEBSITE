import { BatteryCharging, Lock, KeyRound, Wallet2, ShieldCheck, KeySquare, ShieldAlert } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { SectionHeading, NumberedRow } from '@/components/ui/Atoms'
import Button from '@/components/ui/Button'
import FamilyChildHero from '@/Assest/Family&Child.png'
import FamilyChildrenImage from '@/Assest/children_.png'
import ManWoman from '@/Assest/Man_Woman.png'
import BoyAlone from '@/Assest/small_boy.png'
import FamilyLockImage from '@/Assest/lock.png'
import ManOnSuiteImage from '@/Assest/man_pix.png'
import FinwiseMark from '@/Assest/finwise.png'
import DashboardIcon from '@/Assest/mingcute_dashboard-4-line.png'

const steps = [
  { title: 'Create Your Family Account', description: 'Start by setting up your primary parent or guardian account. This becomes the foundation for managing your family\u2019s financial activities, goals, children and permissions.' },
  { title: 'Link your Spouse', description: 'Connect your spouse\u2019s verified FinWise account and decide exactly how you want to manage finances together. Grant specific permissions for viewing balances, managing children and approving requests and more.' },
  { title: 'Add Child Profiles', description: 'Create dedicated financial profiles for each child, whether they\u2019re young, newborn or still on the way. Set tasks, goals, allowances and spending limits based on their needs and stage of life.' },
  { title: 'Give Every Child a Unique ID', description: 'Each child receives a unique FinWise Child ID, making it easy to identify and manage their financial profile, activities, goals and progress within your family account.' },
]

const access = [
  { icon: <BatteryCharging className="h-5 w-5" />, title: 'Fully Managed', description: 'Parents maintain complete control over account activity, savings, allowances, and financial decisions.' },
  { icon: <Lock className="h-5 w-5" />, title: 'Guided Access', description: 'Children can view progress, savings goals, and selected activities while parents retain approval authority.' },
  { icon: <KeyRound className="h-5 w-5" />, title: 'Independent Ownership', description: 'Ownership automatically transfers to the child. Parents retain view-only access unless additional permissions are granted by the child.' },
]

const security = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Role-Based Access Control', description: 'Access is granted based on family roles such as parent, guardian, or child, helping maintain visibility and control.' },
  { icon: <KeySquare className="h-5 w-5" />, title: 'Attribute-Based Access Control', description: 'Additional security rules help protect sensitive information by considering factors such as age, permissions, and account ownership.' },
  { icon: <ShieldAlert className="h-5 w-5" />, title: 'Protected Child Data', description: 'Children\u2019s personal and financial information is safeguarded through multiple layers of access control and security monitoring.' },
  { icon: <Wallet2 className="h-5 w-5" />, title: 'Secure Financial Management', description: 'Savings, goals, allowances, and account activities remain protected while allowing families to collaborate safely.' },
]

export default function FamilyChildAccount() {
  return (
    <div>
     
      <PageHero
        crumb="Family & Child Account"
        title="Build Financial Confidence Across Generations."
        description="Create and manage family financial profiles, guide your children's financial journey, and gain a complete view of your family's progress  all from one place."
        backgroundImage={FamilyChildHero}
        stats={[
          { value: '1K+', label: 'Families connected' },
          { value: '1K+', label: 'Child profiles created' },
          { value: '1K+', label: 'Financial tasks completed' },
          { value: '\u20a62M+', label: 'Family goals created' },
        ]}
      />
      

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="How Family Accounts Work"
          title="One Family. Connected Financial Journeys."
          description="A parent or guardian can create and manage financial profiles for every child in the family, helping them build healthy money habits from an early age."
        />
        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-4">
          {steps.map((s, i) => (
            <NumberedRow key={s.title} number={i + 1} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Age-Based Access & Permissions"
            title="Financial Independence, Introduced Gradually."
            description="Children gain access and responsibility over time, with permissions designed to match their age and stage of development."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {access.map((a) => (
              <div key={a.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">{a.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="How BFI Help You Save Better"
          title="Your Family's Financial Snapshot, All in One Place"
          description="View your family's savings, wallets, goals, and milestones in one dashboard, with liabilities displayed separately for complete transparency."
        />
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <div data-aos="fade-right" className="rounded-2xl border border-white/10 bg-ink-800/80 p-7">
            <div className="mb-5 flex items-center gap-2 text-teal-400">
              <img src={DashboardIcon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
              <span className="text-sm font-semibold text-white">Family Dashboard Overview</span>
            </div>
            {[
              { title: 'Total Family Savings', description: 'View the combined balances across parent and child savings accounts to understand your family\u2019s overall savings progress.' },
              { title: 'Active Savings Goals', description: 'Track all ongoing family, personal, and child savings goals in one place and monitor progress toward important milestones.' },
              { title: 'Child Profiles', description: 'Manage every child account from a centralized dashboard, including savings activities, allowances, goals, and permissions.' },
              { title: 'Family Milestones', description: 'Celebrate completed goals, savings achievements, and important financial milestones across the family.' },
            ].map((row) => (
              <div key={row.title} className="border-t border-white/5 py-4 first:border-none">
                <p className="text-sm font-semibold text-white">{row.title}</p>
                <p className="mt-1 text-sm text-mist-400">{row.description}</p>
              </div>
            ))}
            <Button to="/contact" variant="ghost" className="mt-4 w-full">
              <img src={DashboardIcon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
              Family Net Worth
            </Button>
          </div>
          <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
            {[
              { src: ManOnSuiteImage, alt: 'Man on suite' },
              { src: FamilyChildrenImage, alt: 'Children using a tablet together' },
              { src: ManWoman, alt: 'Financial access key' },
              { src: BoyAlone, alt: 'Boy alone' },
            ].map((image) => (
              <div
                key={image.src}
                tabIndex={0}
                aria-label={`${image.alt}; focus or hover to reveal the Finwise logo`}
                className="group aspect-square rounded-2xl outline-none [perspective:1000px] focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 [backface-visibility:hidden]">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d2340] to-[#071521] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img src={FinwiseMark} alt="Finwise" className="h-3/5 w-3/5 object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Security & Data Protection"
            title="Built With Family Privacy and Security at Its Core."
            description="Every family profile is protected through advanced permission controls that help ensure the right people have access to the right information."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {security.map((s) => (
              <div key={s.title} data-aos="fade-up" className="rounded-2xl border border-white/10 bg-gradient-to-b from-ink-700/60 to-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">{s.icon}</div>
                <h3 className="font-display text-sm font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-mist-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    
  )
}
