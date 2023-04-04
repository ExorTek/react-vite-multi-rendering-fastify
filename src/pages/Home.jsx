export default function Home() {
  const data = {
    react: {
      title: 'React Documentation',
      description: 'Find in-depth information about Next.js features and API.',
      url: 'https://react.dev/',
    },
    vite: {
      title: 'Vite Documentation',
      description: 'Find in-depth information about Vite features and API.',
      url: 'https://vitejs.dev/',
    },
    tailwind: {
      title: 'Tailwind Documentation',
      description: 'Find in-depth information about Tailwind features and API.',
      url: 'https://tailwindcss.com/',
    },
    scss: {
      title: 'SCSS Documentation',
      description: 'Find in-depth information about SCSS features and API.',
      url: 'https://sass-lang.com/',
    }
  }
  return (
    <main className={'flex flex-col items-center justify-center w-full flex-1 px-20 text-center'}>
      <h1 className={'text-6xl font-bold'}>
        Welcome to
        React + Vite SSR + Tailwind + SCSS
      </h1>
      <p className={'mt-3 text-2xl'}>
        Get started by editing{' '}
        <code className={'p-3 font-mono text-lg bg-gray-100 rounded-md'}>
          pages/Home.jsx
        </code>
      </p>
      <div className={'flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'}>
        {Object.entries(data).map(([key, {title, description, url}]) => (
          <a
            key={key}
            href={url}
            className={
              'p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            }
          >
            <h3 className={'text-2xl font-bold'}>
              {title} &rarr;
            </h3>
            <p className={'mt-4 text-xl'}>
              {description}
            </p>
          </a>
        ))}
      </div>
    </main>
  )
}
