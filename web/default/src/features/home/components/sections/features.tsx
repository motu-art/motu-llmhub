import {
  Zap,
  Shield,
  Globe,
  Code,
  Gauge,
  DollarSign,
  Users,
  HeartHandshake,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'fast',
      num: '01',
      title: t('Lightning Fast'),
      desc: t(
        'Optimized network architecture ensures millisecond response times'
      ),
      span: 'md:col-span-2',
      icon: <Zap className='size-4 text-blue-400' />,
      gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
      borderHover: 'hover:border-blue-500/30',
      visual: (
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Llama'].map(
            (name) => (
              <div
                key={name}
                className='border-border/30 bg-muted/20 text-muted-foreground flex items-center justify-center rounded-lg border px-3 py-2 text-xs transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-sm hover:shadow-blue-500/10'
              >
                {name}
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'secure',
      num: '02',
      title: t('Secure & Reliable'),
      desc: t(
        'Enterprise-grade security with comprehensive permission management'
      ),
      span: 'md:col-span-1',
      icon: <Shield className='size-4 text-emerald-400' />,
      gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      borderHover: 'hover:border-emerald-500/30',
      visual: (
        <div className='mt-4 flex items-center justify-center'>
          <div className='relative'>
            <div className='flex size-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/10'>
              <Shield
                className='size-7 text-emerald-500/70'
                strokeWidth={1.5}
              />
            </div>
            <div className='absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40'>
              <svg
                className='size-2.5 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 12.75 6 6 9-13.5'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      num: '03',
      title: t('Global Coverage'),
      desc: t('Multi-region deployment for stable global access'),
      span: 'md:col-span-1',
      icon: <Globe className='size-4 text-violet-400' />,
      gradient: 'from-violet-500/10 via-violet-500/5 to-transparent',
      borderHover: 'hover:border-violet-500/30',
      visual: (
        <div className='mt-4 space-y-2'>
          {[t('Load Balancing'), t('Rate Limiting'), t('Cost Tracking')].map(
            (step, i) => (
              <div key={step} className='flex items-center gap-2'>
                <div
                  className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 ${
                    i === 1
                      ? 'border border-violet-500/30 bg-violet-500/20 text-violet-500 shadow-sm shadow-violet-500/20'
                      : 'border-border/40 bg-muted text-muted-foreground border'
                  }`}
                >
                  {i + 1}
                </div>
                <div className='bg-border/40 h-px flex-1' />
                <span className='text-muted-foreground text-xs'>{step}</span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'developer',
      num: '04',
      title: t('Developer Friendly'),
      desc: t('Compatible API routes for common AI application workflows'),
      span: 'md:col-span-2',
      icon: <Code className='size-4 text-amber-400' />,
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      borderHover: 'hover:border-amber-500/30',
      visual: (
        <div className='mt-4 flex items-center gap-3'>
          <div className='flex -space-x-2'>
            {['API', 'SDK', 'CLI', 'Docs'].map((n) => (
              <div
                key={n}
                className='border-background from-muted to-muted/60 text-muted-foreground flex size-8 items-center justify-center rounded-full border-2 bg-gradient-to-br text-[9px] font-bold shadow-sm'
              >
                {n}
              </div>
            ))}
          </div>
          <div className='text-muted-foreground flex items-center gap-1.5 text-xs'>
            <Code className='size-3.5 text-amber-500' />
            {t('Multi-protocol Compatible')}
          </div>
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Gauge className='size-5' strokeWidth={1.5} />,
      title: t('High Performance'),
      desc: t('Support for high concurrency with automatic load balancing'),
      color: 'from-cyan-500/15 to-blue-500/10',
      ringColor: 'ring-cyan-500/20',
      iconColor: 'text-cyan-500',
    },
    {
      icon: <DollarSign className='size-5' strokeWidth={1.5} />,
      title: t('Transparent Billing'),
      desc: t('Pay-as-you-go with real-time usage monitoring'),
      color: 'from-emerald-500/15 to-teal-500/10',
      ringColor: 'ring-emerald-500/20',
      iconColor: 'text-emerald-500',
    },
    {
      icon: <Users className='size-5' strokeWidth={1.5} />,
      title: t('Team Collaboration'),
      desc: t('Multi-user management with flexible permission allocation'),
      color: 'from-violet-500/15 to-purple-500/10',
      ringColor: 'ring-violet-500/20',
      iconColor: 'text-violet-500',
    },
    {
      icon: <HeartHandshake className='size-5' strokeWidth={1.5} />,
      title: t('Open Source'),
      desc: t('Community driven, self-hosted, and extensible'),
      color: 'from-rose-500/15 to-pink-500/10',
      ringColor: 'ring-rose-500/20',
      iconColor: 'text-rose-500',
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      {/* Ambient gradient */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-[0.15] dark:opacity-[0.05]'
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.7 0.12 280 / 50%) 0%, transparent 70%)',
        }}
      />

      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-lg'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            {t('Core Features')}
          </p>
          <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-3xl'>
            {t('Built for developers,')}
            <br />
            <span className='bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent'>
              {t('designed for scale')}
            </span>
          </h2>
        </AnimateInView>

        {/* Bento grid */}
        <div className='grid gap-3 md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/[0.06] dark:hover:border-white/[0.12] ${f.borderHover} ${f.span}`}
            >
              {/* Top gradient glow on hover */}
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${f.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className='relative p-7 md:p-8'>
                <div className='mb-3 flex items-center gap-3'>
                  <span className='border-border/40 bg-muted text-muted-foreground flex size-7 items-center justify-center rounded-md border text-[10px] font-semibold tabular-nums transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5'>
                    {f.num}
                  </span>
                  <h3 className='text-sm font-semibold'>{f.title}</h3>
                  <div className='ml-auto opacity-50 transition-opacity duration-300 group-hover:opacity-100'>
                    {f.icon}
                  </div>
                </div>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {f.desc}
                </p>
                {f.visual}
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Additional features row */}
        <div className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 100}
              animation='fade-up'
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-lg dark:border-white/[0.05] dark:hover:border-white/[0.12]'
            >
              {/* Top accent */}
              <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${f.color} opacity-0 transition-opacity duration-500 group-hover:opacity-80`} />
              
              <div className='flex flex-col items-center text-center'>
                <div className={`mb-3 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} ring-1 ${f.ringColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <span className={f.iconColor}>{f.icon}</span>
                </div>
                <h3 className='mb-1.5 text-sm font-semibold'>{f.title}</h3>
                <p className='text-muted-foreground max-w-[200px] text-xs leading-relaxed'>
                  {f.desc}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
