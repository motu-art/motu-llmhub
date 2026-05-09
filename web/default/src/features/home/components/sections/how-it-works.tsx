import { Settings, Zap, BarChart3, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      num: '1',
      title: t('Configure'),
      desc: t(
        'Add your API keys, set up channels and configure access permissions'
      ),
      icon: <Settings className='size-6' strokeWidth={1.5} />,
      color: 'from-violet-500 to-fuchsia-500',
      bgColor: 'from-violet-500/15 via-violet-500/5 to-transparent',
      ringColor: 'ring-violet-500/20',
      iconColor: 'text-violet-500',
    },
    {
      num: '2',
      title: t('Connect'),
      desc: t(
        'Connect through OpenAI, Claude, Gemini, and other compatible API routes'
      ),
      icon: <Zap className='size-6' strokeWidth={1.5} />,
      color: 'from-fuchsia-500 to-pink-500',
      bgColor: 'from-fuchsia-500/15 via-fuchsia-500/5 to-transparent',
      ringColor: 'ring-fuchsia-500/20',
      iconColor: 'text-fuchsia-500',
    },
    {
      num: '3',
      title: t('Monitor'),
      desc: t('Track usage, costs and performance with real-time analytics'),
      icon: <BarChart3 className='size-6' strokeWidth={1.5} />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-500/15 via-pink-500/5 to-transparent',
      ringColor: 'ring-pink-500/20',
      iconColor: 'text-pink-500',
    },
  ]

  return (
    <section className='relative z-10 overflow-hidden px-6 py-24 md:py-32'>
      {/* Subtle divider */}
      <div className='absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/[0.06]' />
      
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 text-center md:mb-20'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('How It Works')}
          </p>
          <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
            {t('Three steps to get started')}
          </h2>
        </AnimateInView>

        <div className='relative grid gap-6 md:grid-cols-3 md:gap-8'>
          {/* Connection lines (desktop only) */}
          <div className='pointer-events-none absolute top-16 left-[calc(33%+1rem)] right-[calc(33%+1rem)] z-10 hidden md:block'>
            <div className='flex items-center'>
              <div className='h-[2px] flex-1 bg-gradient-to-r from-violet-500/40 to-fuchsia-500/40' />
              <ArrowRight className='mx-2 size-3 text-fuchsia-500/40' />
              <div className='h-[2px] flex-1 bg-gradient-to-r from-fuchsia-500/40 to-pink-500/40' />
              <ArrowRight className='mx-2 size-3 text-pink-500/40' />
            </div>
          </div>

          {steps.map((step, i) => (
            <AnimateInView
              key={step.num}
              delay={i * 150}
              animation='fade-up'
              className='group relative'
            >
              <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/[0.06] dark:hover:border-white/[0.12]'>
                {/* Top gradient accent */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${step.color} opacity-50`} />
                
                {/* Background glow on hover */}
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 size-40 rounded-full bg-gradient-to-br ${step.color} opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-15`} />

                <div className='relative flex flex-col items-center text-center'>
                  <div className='relative mb-6'>
                    <div className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.bgColor} ring-1 ${step.ringColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                      <span className={step.iconColor}>{step.icon}</span>
                    </div>
                    <div className={`absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-xs font-bold text-white shadow-lg`}>
                      {step.num}
                    </div>
                  </div>
                  <h3 className='mb-2 text-base font-semibold'>{step.title}</h3>
                  <p className='text-muted-foreground max-w-[260px] text-sm leading-relaxed'>
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
