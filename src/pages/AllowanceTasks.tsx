import { Home as HomeIcon, BookOpen, Sprout, SlidersHorizontal, ShieldCheck, RefreshCcw, Target } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/Atoms'
import TaskAllowanceImage from '@/Assest/TaskAllowance.png'
import FamilyChildImage from '@/Assest/Family&Child.png'
import ChildrenImage from '@/Assest/children_.png'

const process = [
  { number: 1, title: 'Assign Task', description: 'Parents can create tasks based on household, academic, personal, or custom activities. Each task can have a reward attached to encourage consistent participation.', image: TaskAllowanceImage, alt: 'Parent and child working on a task together' },
  { number: 2, title: 'Complete Task', description: 'The child completes the assigned task and works toward earning the promised reward. Completing tasks consistently builds positive financial habits over time.', image: FamilyChildImage, alt: 'Family spending time together' },
  { number: 3, title: 'Parent Approves', description: 'Parents review completed work and approve the task, releasing the agreed reward directly into the child\u2019s Finwise account.', image: ChildrenImage, alt: 'Children working together on a tablet' },
]

const categories = [
  { icon: <HomeIcon className="h-5 w-5" />, title: 'Domestic Tasks', description: 'Help children contribute at home while developing responsibility and accountability.', examples: 'Make the bed, Wash dishes, Clean room, Help with laundry' },
  { icon: <BookOpen className="h-5 w-5" />, title: 'Academic Tasks', description: 'Reward learning achievements and educational progress.', examples: 'Complete homework, Read a book, Finish a project, Study session goals' },
  { icon: <Sprout className="h-5 w-5" />, title: 'Personal Development', description: 'Encourage healthy habits and personal growth.', examples: 'Exercise, Practice a skill, Journal writing, Learning activities' },
  { icon: <SlidersHorizontal className="h-5 w-5" />, title: 'Custom Tasks', description: 'Create personalized tasks that fit your family\u2019s unique goals and values.', examples: 'Family projects, Community activities, Special responsibilities, Personal challenges' },
]

const bfiTraits = [
  { icon: <ShieldCheck className="h-12 w-12" strokeWidth={1.8} />, title: 'Responsibility', description: 'Completing assigned tasks demonstrates accountability and commitment.' },
  { icon: <RefreshCcw className="h-12 w-12" strokeWidth={1.8} />, title: 'Consistency', description: 'Regular participation helps build positive habits over time.' },
  { icon: <Target className="h-12 w-12" strokeWidth={1.8} />, title: 'Follow-Through', description: 'Finishing what you start strengthens the behaviors associated with long-term financial success.' },
]

export default function AllowanceTasks() {
  return (
    <div>
      <PageHero
        crumb="Allowance & Task System"
        title="Teach Money. Reward Responsibility. Build Better Habits."
        description="Turn everyday responsibilities into meaningful financial lessons. Parents can assign tasks, set allowances, approve completed work, and help children learn how to earn, save, and manage money responsibly."
        backgroundImage={TaskAllowanceImage}
        backgroundGlow={false}
        stats={[
          { value: '1K+', label: 'Tasks Completed' },
          { value: '1K+', label: 'Rewards Earned' },
          { value: '1K+', label: 'Allowances Managed' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="How Tasks & Allowances Work"
          title="A Simple Way to Build Responsibility"
          description="Parents can create tasks, assign rewards, review completed work, and help children develop positive financial habits through consistent participation."
        />
        <div className="mt-14 space-y-10 md:space-y-12">
          {process.map((p) => (
            <article
              key={p.number}
              className="relative grid min-h-[470px] items-center gap-8 overflow-hidden rounded-[28px] border border-white/5 bg-ink-800 p-7 sm:p-10 md:sticky md:top-[14vh] md:min-h-[380px] md:grid-cols-[1fr_0.85fr] md:px-10 lg:px-14"
              style={{ zIndex: p.number }}
            >
              <div className="relative z-10 flex items-start gap-4 md:gap-5">
                <span className="pt-1 font-display text-base font-bold text-gold-500 sm:text-lg">
                  {String(p.number).padStart(2, '0')}
                </span>
                <div className="max-w-lg">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">{p.description}</p>
                </div>
              </div>
              <div className="relative flex min-h-[245px] items-center justify-center md:min-h-[320px]">
                <div className="absolute left-[12%] top-1/2 flex h-36 w-36 -translate-y-1/2 items-center justify-center rounded-full bg-mist-500/35 font-display text-5xl font-bold text-gold-400 sm:h-44 sm:w-44 sm:text-6xl" aria-hidden="true">
                  {p.number}
                </div>
                <img
                  src={p.image}
                  alt={p.alt}
                  className="relative z-10 h-56 w-56 rounded-full border-4 border-ink-700 object-cover shadow-2xl sm:h-64 sm:w-64 md:h-[280px] md:w-[280px]"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-3 py-12 sm:px-5 sm:py-16">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-ink-800/70 px-5 py-10 sm:px-10 sm:py-12">
          <SectionHeading
            eyebrow="Task Categories"
            title="Tasks for Every Stage of Growth"
            description="Create meaningful tasks that encourage learning, responsibility, and personal development."
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-5">
            {categories.map((c) => (
              <div key={c.title} data-aos="fade-up" className="grid items-center gap-4 rounded-[24px] border border-white/10 border-t-white/25 bg-mist-500/20 p-5 sm:grid-cols-[60px_120px_minmax(0,1fr)] sm:gap-6 sm:px-6 sm:py-5">
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-xl border border-white/15 bg-ink-800/60 text-gold-500">{c.icon}</div>
                <h3 className="font-display text-base font-semibold leading-snug text-white">{c.title}</h3>
                <div>
                  <p className="text-sm leading-relaxed text-mist-300">{c.description}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gold-500">
                    Examples:<br className="hidden sm:block" /> <span className="text-mist-300">{c.examples}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-gold-500">How BFI Contribute</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Every Task Builds Financial Intelligence
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white">
              Consistent task completion helps children develop responsibility, discipline, and follow-through \u2014 contributing positively to their Behavioral Financial Intelligence profile.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-6xl gap-7 sm:grid-cols-3 sm:gap-8">
          {bfiTraits.map((b) => (
            <div key={b.title} data-aos="fade-up" className="min-h-[330px] rounded-[24px] border border-white/10 bg-ink-800 p-7 sm:p-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-ink-800/60 text-gold-500">{b.icon}</div>
              <h3 className="mt-10 font-display text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-mist-100">{b.description}</p>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  )
}
