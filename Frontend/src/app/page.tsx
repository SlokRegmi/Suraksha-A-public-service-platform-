'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Categories } from '@/components/index/categories';
import { OrbitingCirclesPublic } from '@/components/index/orbitingcircles';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';

export default function Home() {
  const { theme } = useTheme(); // Get current theme
  const [mounted, setMounted] = useState(false);

  const [loading, setLoading] = useState(true);

  // Simulate a loading delay (replace this with real data fetching logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Assume it takes 2 seconds to load the content
    return () => clearTimeout(timer);
  }, []);
  // Ensure we only render on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until the component is mounted

  return (
    <>
      <div
        className='flex flex-col w-full h-screen transition-colors duration-300 ease-in-out px-[12rem] pt-5 space-y-10'
      >
        {/* Hero section with distinct background colors */}
          {/* Conditionally render the Skeleton or the actual content based on the loading state */}
          <div
          className={`flex items-center w-full h-[40%] rounded-2xl pl-16 ${theme === 'dark'
            ? 'bg-[#008170] text-[#f5f5f5]' // Dark mode: Darker gray background with light text
            : 'bg-gray-600 text-[#1a1a1a]' // Light mode: Very light gray background with dark text
            }`}
        >          {loading ? (
            // Display skeleton placeholders during loading
            <div className="w-full h-full flex flex-col space-y-5 justify-center ">
            <Skeleton className="h-12 w-64 rounded-md" /> {/* Skeleton for the title */}
              <Skeleton className="h-5 w-full max-w-3xl rounded-md" /> {/* Skeleton for the paragraph */}
              <Skeleton className="h-5 w-full max-w-3xl rounded-md" /> {/* Additional Skeleton line */}
              <Skeleton className="h-5 w-full max-w-3xl rounded-md" /> {/* Skeleton for the paragraph */}

            </div>
          ) : (
            // Display the actual content when loading is complete
            <div className="flex flex-col space-y-5">
              <h1 className="text-5xl font-bold">Surakshya</h1>
              <p className="text-xl max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto ipsam corporis impedit totam,
                veniam, eum provident quisquam neque ratione, incidunt ipsa voluptate quod.
              </p>
            </div>
          )}
        </div>

        {/* Main content section */}
        <div className='flex flex-col h-[60%] space-y-5'>
          <div className='flex flex-col space-y-1'>
            <h2 className='text-3xl'>Categories</h2>
            <span className='text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>

          <div className='w-full'>
            <Categories />
          </div>

        </div>
      </div>


      <div className='flex flex-col items-center mt-20 w-full '>
        <div className='flex flex-col space-y-8 items-center justify-center w-full'>
          <h2 className='text-4xl font-bold max-w-[50rem] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Architecto dolorum
          </h2>
          <span className='text-2xl max-w-4xl text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum iure doloremque corrupti quaerat vel ab fugit fuga quo adipisci
          </span>
        </div>
        <div className='w-full'>
          <OrbitingCirclesPublic />

        </div>
      </div>
    </>
  );
}
