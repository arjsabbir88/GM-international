import React from 'react'
import HeroSection from './components/HeroSection';
import { TabsSection } from './components/tabs';
import SupportSection from '@/app/components/HSupport/HSupport';

const StudentHomePage = () => {
  return (
    <div>
        <div>
            <HeroSection/>
        </div>
        <div>
            <TabsSection/>
        </div> 
        <div className='text-2xl font-bold border-2 max-w-7xl mx-auto border-red-500 min-h-[550px] flex items-center justify-center'>
            <h1 className='text-center'>popular package section comming soon...</h1>
        </div>
        <div>
            <SupportSection/>
        </div>
    </div>
  )
}

export default StudentHomePage;