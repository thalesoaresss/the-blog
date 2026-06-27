import Link from 'next/link';

export function Footer() {
  return (
    <footer className='py-16  text-center bg-slate-900 text-slate-100 w-screen '>
      <p>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
}
