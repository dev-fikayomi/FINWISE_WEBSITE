import { ClipboardList, CheckCircle2, Home as HomeIcon, BookOpen, Sprout, SlidersHorizontal, ShieldCheck, RefreshCcw, Target } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading } from '@/components/ui/Atoms'

const process = [
  { number: 1, title: 'Assign Task', description: 'Parents can create tasks based on household, academic, personal, or custom activities. Each task can have a reward attached to encourage consistent participation.' },
  { number: 2, title: 'Complete Task', description: 'The child completes the assigned task and works toward earning the promised reward. Completing tasks consistently builds positive financial habits over time.' },
  { number: 3, title: 'Parent Approves', description: 'Parents review completed work and approve the task, releasing the agreed reward directly into the child\u2019s Finwise account.' },
]

const categories = [
  { icon: <HomeIcon className="h-5 w-5" />, title: 'Domestic Tasks', description: 'Help children contribute at home while developing responsibility and accountability.', examples: 'Make the bed, Wash dishes, Clean room, Help with laundry' },
  { icon: <BookOpen className="h-5 w-5" />, title: 'Academic Tasks', description: 'Reward learning achievements and educational progress.', examples: 'Complete homework, Read a book, Finish a project, Study session goals' },
  { icon: <Sprout className="h-5 w-5" />, title: 'Personal Development', description: 'Encourage healthy habits and personal growth.', examples: 'Exercise, Practice a skill, Journal writing, Learning activities' },
  { icon: <SlidersHorizontal className="h-5 w-5" />, title: 'Custom Tasks', description: 'Create personalized tasks that fit your family\u2019s unique goals and values.', examples: 'Family projects, Community activities, Special responsibilities, Personal challenges' },
]

const bfiTraits = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Responsibility', description: 'Completing assigned tasks demonstrates accountability and commitment.' },
  { icon: <RefreshCcw className="h-5 w-5" />, title: 'Consistency', description: 'Regular participation helps build positive habits over time.' },
  { icon: <Target className="h-5 w-5" />, title: 'Follow-Through', description: 'Finishing what you start strengthens the behaviors associated with long-term financial success.' },
]

export default function AllowanceTasks() {
  return (
    <div>
      <PageHero
        crumb="Allowance & Task System"
        title="Teach Money. Reward Responsibility. Build Better Habits."
        description="Turn everyday responsibilities into meaningful financial lessons. Parents can assign tasks, set allowances, approve completed work, and help children learn how to earn, save, and manage money responsibly."
        media={<OrbitVisual icon={<ClipboardList className="h-10 w-10" />} tone="gold" size="lg" badges={[<CheckCircle2 className="h-4 w-4" />, <Target className="h-4 w-4" />]} />}
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
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {process.map((p) => (
            <div key={p.number} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 font-display text-lg font-bold text-gold-500">
                {p.number}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Task Categories"
            title="Tasks for Every Stage of Growth"
            description="Create meaningful tasks that encourage learning, responsibility, and personal development."
          />
          <div className="mt-12 grid gap-4">
            {categories.map((c) => (
              <div key={c.title} data-aos="fade-up" className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-ink-800/60 p-6 sm:flex-row sm:items-start">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">{c.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-mist-400">{c.description}</p>
                  <p className="mt-2 text-xs text-gold-500">
                    Examples: <span className="text-mist-400">{c.examples}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="How BFI Contribute"
          title="Every Task Builds Financial Intelligence"
          description="Consistent task completion helps children develop responsibility, discipline, and follow-through \u2014 contributing positively to their Behavioral Financial Intelligence profile."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {bfiTraits.map((b) => (
            <div key={b.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">{b.icon}</div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-mist-400">{b.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
