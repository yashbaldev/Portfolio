import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/project1.jpg'
import project2 from '../../public/images/projects/project2.jpg'
import project3 from '../../public/images/projects/project3.jpg'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject=({type,title,summary,img,link,github})=>{
    return(
        <article className='w-full flex items-center justify-between rounded-br-2xl
        rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative
        lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4 
        '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] dark:bg-light' />

        <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <Image  src={img} alt={title} className="w-full h-auto" priority
sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
50vw" />
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className= 'my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title} </h2>
        </Link>
        <p className= 'my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className=' mt-2 flex items-center'>
    <Link href={github} target="_blank" className=' w-10'> <GithubIcon /> </Link>
    <Link href={link} target="_blank" className=' ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base '>Visit Project</Link>
    </div>
    </div>
    </article>
    )
}
const projects = () => {
  return(
    <>
          <Head>
                <title>Yash Baldev | Projects Page</title>
                <meta name="description" content="Yash Baldev website's projects page" />
          </Head>
          <TransitionEffect />

          <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className=' mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                  <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                  <div className='col-span-12'>
                  <FeaturedProject 
                                title="Helping-you-through Website"
                                summary="The project aimed to facilitate students by providing easy access to resources like previous year papers and books. Developed teamwork skills and learned effective problem-solving in a collaborative environment."
                                link="https://helping-you-through-client.vercel.app/"
                                type="Technologies Used: Figma (UI/UX design), Next.js, Tailwind CSS (Frontend), Express (Backend), GraphQL, PostgreSQL (Database), Vercel (Deployment)"
                                github="https://github.com/ujjwalkirti/helping-you-through"
                                img={project1}
                            />
                          </div>
                          <div className='col-span-12'>
                          <FeaturedProject 
                                title="Loyality and Rewards Project"
                                summary="As a part of Flipkart Grid 5.0 ,addressed challenges in E-commerce loyalty programs by developing a Blockchain-Enhanced Universal Loyalty Hub. Implemented transparent reward systems through smart contracts, for seamless rewards across platforms."
                                link="https://github.com/yashbaldev/Loyality-and-rewards-"
                                type="Technologies Used: Ethereum, Solidity"
                                github="https://github.com/yashbaldev/Loyality-and-rewards-"
                                img={project2}
                            />
                          </div>
                          
                          <div className='col-span-12'>
                          <FeaturedProject 
                                title="A-1 Bakery Website"
                                summary="Implementation of an e-commerce website for A-1 Bakery. The project was part of the Google Winter Of Code (GWOC) event conducted by the GDSC club. Learned real-life problem-solving skills."
                                link="https://github.com/Terminator1601/A-one-Bakery"
                                type= "Technologies Used: Figma (UI design), HTML, CSS, JavaScript, SASS"
                                github="https://github.com/Terminator1601/A-one-Bakery"
                                img={project3}
                            />
                          </div>    
                </div>
                </Layout>
          </main>
    </>
   
  )
}

export default projects