import { useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

function Counter(props: CounterProps) {
  const { end, suffix = '', prefix = '', duration = 1600, decimals = 0 } = props
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  const formatValue = useCallback(
    (v: number) =>
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString(),
    [decimals]
  )

  const animate = useCallback(() => {
    const el = ref.current
    if (!el) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = `${prefix}${formatValue(eased * end)}${suffix}`
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, prefix, suffix, formatValue])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      el.textContent = `${prefix}${formatValue(end)}${suffix}`
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate, end, prefix, suffix, formatValue])

  return (
    <span ref={ref} className='tabular-nums'>
      {prefix}0{suffix}
    </span>
  )
}

interface StatsProps {
  className?: string
}

interface StatItem {
  end: number
  suffix: string
  label: string
  decimals?: number
  color: string
  icon: string
}

export function Stats(_props: StatsProps) {
  const { t } = useTranslation()

  const stats: StatItem[] = [
    { end: 50, suffix: '+', label: t('upstream services integrated'), color: 'from-violet-500 to-fuchsia-500', icon: '⚡' },
    { end: 100, suffix: '+', label: t('model billing support'), color: 'from-blue-500 to-cyan-500', icon: '🎯' },
    { end: 50, suffix: '+', label: t('compatible API routes'), color: 'from-emerald-500 to-teal-500', icon: '🔗' },
    { end: 10, suffix: '+', label: t('scheduling controls'), color: 'from-amber-500 to-orange-500', icon: '📊' },
  ]

  return (
    <div className='relative z-10 overflow-hidden'>
      {/* Ambient glow */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-20 dark:opacity-[0.06]'
        style={{
          background: [
            'radial-gradient(ellipse 50% 60% at 20% 50%, oklch(0.7 0.15 280 / 60%) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 60% at 80% 50%, oklch(0.7 0.15 200 / 60%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />
      
      <div className='mx-auto max-w-6xl px-6 py-16 md:py-20'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8'>
          {stats.map((s, i) => (
            <AnimateInView
              key={s.label}
              delay={i * 100}
              animation='fade-up'
              className='group relative'
            >
              <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/5 dark:border-white/[0.06] dark:from-white/[0.04] dark:to-white/[0.01] dark:hover:border-white/[0.12]'>
                {/* Top gradient line */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${s.color} opacity-60`} />
                
                {/* Hover glow */}
                <div className={`absolute -top-12 left-1/2 -translate-x-1/2 size-32 rounded-full bg-gradient-to-br ${s.color} opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-20`} />
                
                <div className='relative flex flex-col items-center text-center'>
                  <span className='text-2xl mb-2'>{s.icon}</span>
                  <span className='text-3xl font-bold tracking-tight md:text-4xl'>
                    <Counter end={s.end} suffix={s.suffix} decimals={s.decimals} />
                  </span>
                  <span className='text-muted-foreground mt-2 text-xs leading-relaxed'>
                    {s.label}
                  </span>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </div>
  )
}
