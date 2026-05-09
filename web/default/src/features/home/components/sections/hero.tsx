import { Link } from '@tanstack/react-router'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { Button } from '@/components/ui/button'
import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { systemName } = useSystemConfig()

  return (
    <section className='relative z-10 flex flex-col items-center overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-24'>
      {/* Premium gradient mesh background */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.15]'
        style={{
          background: [
            'radial-gradient(ellipse 80% 60% at 10% 10%, oklch(0.70 0.20 280 / 70%) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 50% at 90% 20%, oklch(0.65 0.18 200 / 60%) 0%, transparent 50%)',
            'radial-gradient(ellipse 50% 40% at 50% 90%, oklch(0.75 0.15 250 / 50%) 0%, transparent 50%)',
            'radial-gradient(ellipse 40% 30% at 30% 60%, oklch(0.60 0.12 150 / 40%) 0%, transparent 50%)',
          ].join(', '),
        }}
      />
      
      {/* Animated floating orbs */}
      <div aria-hidden className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-[15%] left-[10%] size-[300px] rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/10 blur-[80px] animate-float-slow' />
        <div className='absolute top-[25%] right-[15%] size-[250px] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-600/10 blur-[60px] animate-float-medium' />
        <div className='absolute bottom-[30%] left-[30%] size-[200px] rounded-full bg-gradient-to-br from-amber-500/15 to-orange-600/10 blur-[50px] animate-float-fast' />
      </div>

      {/* Grid pattern with gradient */}
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_100%)] bg-[size:4rem_4rem] opacity-[0.06]'
      />

      {/* Premium glass headline card */}
      <div className='flex max-w-3xl flex-col items-center text-center'>
        {/* Badge */}
        <div
          className='landing-animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] px-4 py-1.5 backdrop-blur-sm dark:border-white/[0.06] dark:from-white/[0.04] dark:to-white/[0.01]'
          style={{ animationDelay: '0ms' }}
        >
          <Sparkles className='size-3.5 text-amber-500' />
          <span className='text-muted-foreground text-xs font-medium tracking-wide'>
            {t('Unified API Gateway')}
          </span>
        </div>

        <h1
          className='landing-animate-fade-up text-[clamp(2.25rem,6vw,4rem)] leading-[1.1] font-bold tracking-tight'
          style={{ animationDelay: '80ms' }}
        >
          <span className='block'>{t('Unified Gateway for')}</span>
          <span className='relative mt-1 block'>
            <span className='relative z-10 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm'>
              {t('All Your AI Models')}
            </span>
            {/* Gradient underline glow */}
            <span className='absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-violet-500/50 via-fuchsia-500/50 to-pink-500/50 blur-sm' />
          </span>
        </h1>
        
        <p
          className='landing-animate-fade-up text-muted-foreground/90 mt-6 max-w-xl text-base leading-relaxed opacity-0 md:text-lg'
          style={{ animationDelay: '160ms' }}
        >
          <span className='font-medium text-foreground/95'>{systemName}</span>{' '}
          {t(
            'is an open-source AI API gateway for self-hosted deployments. Connect multiple upstream services, manage models, keys, quotas, logs, and routing policies in one place.'
          )}
        </p>
        
        <div
          className='landing-animate-fade-up mt-8 flex items-center gap-3 opacity-0'
          style={{ animationDelay: '240ms' }}
        >
          {props.isAuthenticated ? (
            <Button
              className='group rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-500/25 transition-all duration-300'
              render={<Link to='/dashboard' />}
            >
              {t('Go to Dashboard')}
              <ArrowRight className='ml-1.5 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      <div
        className='landing-animate-fade-up w-full opacity-0'
        style={{ animationDelay: '350ms' }}
      >
        <HeroTerminalDemo />
      </div>
    </section>
  )
}
