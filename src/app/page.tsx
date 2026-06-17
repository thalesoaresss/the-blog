import clsx from 'clsx';

export default function Home() {
  console.log('Hello, welcome to The Blog!');
  return (
    <div>
      <h1 className={clsx('text-4xl', 'font-bold', 'text-center', 'mt-10')}>
        Welcome to The Blog
      </h1>
    </div>
  );
}
