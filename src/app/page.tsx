/* eslint-disable prettier/prettier */

import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons';
import logoAirbnb from '@/images/logos/airbnb.svg';
import logoFacebook from '@/images/logos/facebook.svg';
import logoPlanetaria from '@/images/logos/planetaria.svg';
import logoStarbucks from '@/images/logos/starbucks.svg';
import image1 from '@/images/photos/image-1.png';
import image2 from '@/images/photos/image-2.png';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.png';
import image5 from '@/images/photos/image-5.jpg';
import { formatDate } from '@/lib/formatDate';
import { getSocialLinks } from '@/lib/socialLinks';
import portraitImage from '@/images/avatar.png';
function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path
        d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
        className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
      />
      <path d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6' className='stroke-zinc-400 dark:stroke-zinc-500' />
    </svg>
  );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path
        d='M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
        className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
      />
      <path
        d='M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5'
        className='stroke-zinc-400 dark:stroke-zinc-500'
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

// function Article({ article }: { article: ArticleWithSlug }) {
//   return (
//     <Card as="article">
//       <Card.Title href={`/articles/${article.slug}`}>
//         {article.title}
//       </Card.Title>
//       <Card.Eyebrow as="time" dateTime={article.date} decorate>
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//       <Card.Description>{article.description}</Card.Description>
//       <Card.Cta>Read article</Card.Cta>
//     </Card>
//   )
// }

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  );
}

function Newsletter() {
  return (
    <form action='/thank-you' className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <MailIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Stay up to date</span>
      </h2>
      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className='mt-6 flex'>
        <input
          type='email'
          placeholder='Email address'
          aria-label='Email address'
          required
          className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10'
        />
        <Button type='submit' className='ml-4 flex-none'>
          Join
        </Button>
      </div>
    </form>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel = typeof role.start === 'string' ? role.start : role.start.label;
  let startDate = typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className='flex gap-4'>
      <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
        <Image src={role.logo} alt='' className='h-7 w-7' unoptimized />
      </div>
      <dl className='flex flex-auto flex-wrap gap-x-2'>
        <dt className='sr-only'>Company</dt>
        <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>{role.company}</dd>
        <dt className='sr-only'>Role</dt>
        <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{role.title}</dd>
        <dt className='sr-only'>Date</dt>
        <dd className='ml-auto text-xs text-zinc-400 dark:text-zinc-500' aria-label={`${startLabel} until ${endLabel}`}>
          <time dateTime={startDate}>{startLabel}</time> <span aria-hidden='true'>—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ];

  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <BriefcaseIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href='#' variant='secondary' className='group mt-6 w-full'>
        Download CV
        <ArrowDownIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className='mt-16 sm:mt-20'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=''
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  const socialLinks = getSocialLinks();
  return (
    <>
      <div className='hidden sm:inline'>
        <Photos />
      </div>
      <Container className='mt-16 sm:mt-20'>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
          <div className='m-auto'>
            <div className='max-w-xs px-2.5 lg:max-w-none lg:pl-20'>
              <Image
                src={portraitImage}
                alt=''
                sizes='(min-width: 1024px) 32rem, 20rem'
                className='aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 mt-5'
              />
            </div>
          </div>
          <div className='lg:order-first lg:row-span-2'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
              I’m Shadrac Reyes! I love snowboarding and building products!
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
                I was born in Provo, Utah, but my 24 year journey has taken me across four different states, shaping my
                diverse perspective and love for exploration. From a young age, I found solace and excitement in the
                world of technology. While others were playing outside, you could often find me immersed in video games
                or tinkering with old game consoles and electronics.
              </p>
              <p>
                My interest in programming began unexpectedly during a high school job at a resale company, where I was
                introduced to the world of coding by a co-worker. This revelation sparked a deep curiosity within me,
                leading me to pursue a major in computer science at Southern Utah University (SUU).
              </p>
              <p>
                During my time at SUU, I discovered my passion for programming patterns but found myself struggling with
                the solitary nature of traditional coursework. It wasn&apos;t until a summer spent working in
                door-to-door sales that I realized the importance of collaboration in my learning journey. Armed with
                this newfound insight, I advocated for more group projects in my classes, where I truly thrived in the
                collaborative process of building software.
              </p>
              <p>
                In addition to my academic pursuits, I co-founded Crypto Games LLC, a company dedicated to merging my
                passion for technology with my entrepreneurial spirit. Alongside my partner, we created Crypto Whales, a
                crypto-themed card game designed to introduce the average person to the world of cryptocurrencies in a
                fun and engaging way. Through pitch competitions and fundraising efforts, we secured $20,000 in funding
                to bring our vision to life.
              </p>
              <p>
                When I&apos;m not immersed in the world of technology, you&apos;ll often find me hitting the slopes, as
                snowboarding has been a lifelong passion of mine. I love nothing more than carving through fresh powder
                and soaking in the beauty of the mountains. Additionally, I enjoy staying active and connected with my
                community through playing soccer with local teams.
              </p>
              <p>
                Since then, I&apos;ve had the incredible opportunity to speak at numerous events, sharing my insights
                and enthusiasm for blockchain technology. Whether it&apos;s discussing the importance of
                decentralization or highlighting the potential of blockchain in revolutionizing industries, I&apos;m
                passionate about spreading awareness and fostering understanding in this rapidly evolving field.
              </p>
              <p>
                Today, I bring this passion for innovation, collaboration, and technology to every project I undertake.
                From software development to community engagement, I&apos;m committed to making a positive impact and
                pushing the boundaries of what&apos;s possible.
              </p>
            </div>
          </div>
          <div className='lg:pl-20'>
            <ul role='list'>
              <SocialLink href={socialLinks.linkedIn} icon={LinkedInIcon}>
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href={socialLinks.github} icon={GitHubIcon} className='mt-4'>
                Follow on GitHub
              </SocialLink>
              <SocialLink href={socialLinks.twitter} icon={XIcon} className='mt-4'>
                Follow on X
              </SocialLink>
              <SocialLink href={socialLinks.instagram} icon={InstagramIcon} className='mt-4'>
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href='mailto:shad.b.reyes@gmail.com'
                icon={MailIcon}
                className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
              >
                shad.b.reyes@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <div className='inline sm:hidden'>
        <Photos />
      </div>
    </>
  );
}
