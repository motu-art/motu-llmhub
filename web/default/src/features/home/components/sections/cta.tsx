import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  return (
    <section className='relative z-10 overflow-hidden px-6 py-28 md:py-36'>
      {/* Premium gradient mesh background */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-[0.1]'
        style={{
          background: [
            'radial-gradient(ellipse 60% 60% at 30% 40%, oklch(0.7 0.18 280 / 70%) 0%, transparent 60%)',
            'radial-gradient(ellipse 50% 50% at 70% 50%, oklch(0.65 0.15 320 / 60%) 0%, transparent 60%)',
            'radial-gradient(ellipse 40% 40% at 50% 80%, oklch(0.75 0.12 200 / 40%) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* Animated floating elements */}
      <div aria-hidden className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-[20%] left-[20%] size-[200px] rounded-full bg-violet-500/20 blur-[60px] animate-float-slow' />
        <div className='absolute bottom-[20%] right-[20%] size-[180px] rounded-full bg-fuchsia-500/20 blur-[50px] animate-float-medium' />
      </div>

      <AnimateInView
        className='mx-auto max-w-2xl text-center'
        animation='scale-in'
      >
        {/* Premium glass card */}
        <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-12 backdrop-blur-xl md:p-16 dark:border-white/[0.08] dark:from-white/[0.04] dark:to-white/[0.01]'>
          {/* Top gradient border */}
          <div className='absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-60' />
          
          {/* Radial glow */}
          <div className='absolute -top-20 left-1/2 -translate-x-1/2 size-60 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-[60px]' />
          
          <div className='relative'>
            <h2 className='text-3xl leading-tight font-bold tracking-tight md:text-5xl'>
              {t('Ready to simplify')}
              <br />
              <span className='bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent'>
                {t('your AI integration?')}
              </span>
            </h2>
            <p className='text-muted-foreground/90 mx-auto mt-6 max-w-md text-sm leading-relaxed md:text-base'>
              {t(
                'Deploy your own gateway and start routing requests through your configured upstream services.'
              )}
            </p>
            <div className='mt-10 flex items-center justify-center gap-4'>
              <Button
                className='group rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1.5 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              <Button
                variant='outline'
                className='rounded-xl border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/[0.03]'
                render={<Link to='/pricing' />}
              >
                {t('View Pricing')}
              </Button>
            </div>
          </div>
        </div>
      </AnimateInView>
    </section>
  )
}
