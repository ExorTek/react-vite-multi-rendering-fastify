import {useState} from "react";

export default function About() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <main className={'flex flex-col items-center justify-center w-full flex-1 px-20 text-center'}>
      <h1 className={'text-6xl font-bold'}>
        About
      </h1>
      <p className={'mt-3 text-2xl'}>
        Get started by editing{' '}
        <code className={'p-3 font-mono text-lg bg-gray-100 rounded-md'}>
          pages/About.jsx
        </code>
      </p>
      <div className={'flex flex-row items-center justify-center max-w-4xl mt-6 gap-5 sm:w-full'}>
        <button
          onClick={decrement}
          className={'p-6 text-2xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700'}
        >
          -
        </button>
        <span className={'p-6 text-2xl font-bold text-white bg-blue-600 rounded-lg'}>
          {count}
        </span>
        <button
          onClick={increment}
          className={'p-6 text-2xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700'}
        >
          +
        </button>
      </div>
    </main>
  )
}
