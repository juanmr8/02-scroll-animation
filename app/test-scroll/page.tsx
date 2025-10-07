import Link from 'next/link';

export default function TestPage() {
  return (
    <div className='mx-auto max-w-4xl px-8 py-16'>
      <div className='fixed top-4 right-4 z-50'>
        <Link
          href='/'
          className='block rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700'
        >
          Back to Main
        </Link>
      </div>

      <h1 className='mb-8 text-center text-4xl font-bold'>
        Lenis Smooth Scroll Test Page
      </h1>

      <div className='space-y-8'>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className='rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 p-8'
          >
            <h2 className='mb-4 text-2xl font-bold'>Section {i + 1}</h2>
            <p className='leading-relaxed text-gray-700'>
              This is section {i + 1} of the test page. The smooth scrolling is
              now enabled globally through the Lenis provider in the root
              layout, so every page in your application will automatically have
              buttery smooth scrolling without any additional setup required.
              This makes the user experience consistent across your entire
              application.
            </p>
            <p className='mt-4 text-gray-600'>
              You can scroll up and down to test the smooth scrolling behavior.
              The Lenis provider handles all the smooth scrolling logic
              automatically, and you can customize the scrolling behavior by
              modifying the options in the provider component.
            </p>
          </div>
        ))}
      </div>

      <div className='mt-16 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 p-8 text-white'>
        <h2 className='mb-4 text-2xl font-bold'>🎉 Lenis Provider Active</h2>
        <p className='text-lg'>
          This page demonstrates that Lenis smooth scrolling is working globally
          through the provider pattern. No need to wrap individual pages
          anymore!
        </p>
      </div>
    </div>
  );
}
