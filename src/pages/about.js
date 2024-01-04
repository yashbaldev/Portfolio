import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
const about = () => {
  return(
    <>
        <Head>
            <title>Yash Baldev | About Page</title>
            <meta name="description" content="Yash Baldev Portfolio Website's About page" />
        </Head>
        <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className=' mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
          <div className='col-span-3 flex flex-col items-start justify-start md:col-span-8 xl:col-span-4 md:order-2'>
            <h2 className = 'mb-4 text-lg font- bold uppercase text-dark/75 dark:text-light/75 '>Biography</h2> 
            <p className='my-4 font-medium'>
            Hi, I am Yash Baldev, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
            and user-centered digital experiences. I am always looking for new and innovative ways to bring my clients&apos; visions to life.
            </p>
            <p className=' my-4 font-medium'>
            I believe that design is about more than just making things look pretty, it&apos;s about solving problems and creating intuitive, enjoyable experiences for users. 
            </p>
            <p className=' my-4 font-medium'>
            Whether I am working on a website or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>
          <div className='col-span-3 xl:col-span-4 md:order-1 md:col-span-8 relative h-max rounded-2x1 border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
    <Image src={profilePic} alt="ProfilePic" className='w-full h-auto rounded-2xl' priority
sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
50vw" />
</div>
</div>
      <Skills />  
      <Education />
        </Layout>
      </main>
      </>
  )
}
export default about