import Image from 'next/image';

export const SiteLinks = () => {
  const siteLinks = [
    {
      name: 'github',
      icon: require('../../../public/logos/github-mark-white.png'),
      href: 'https://github.com/ShadReyes',
    },
    {
      name: 'LinkedIn',
      icon: require('../../../public/logos/LinkedIn_Mark.png'),
      href: 'https://www.linkedin.com/in/shadracreyes/',
    },
  ];

  return (
    <div className='hidden lg:flex lg:gap-x-4'>
      {siteLinks.map((item) => (
        <a key={item.name} href={item.href} target='_blank' className='text-sm font-semibold leading-6 text-white'>
          <Image width={100} height={100} src={item.icon} alt={item.name} className='h-6 w-6' />
        </a>
      ))}
    </div>
  );
};
