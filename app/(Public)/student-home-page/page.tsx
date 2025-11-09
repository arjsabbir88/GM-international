import React from 'react'
import HeroSection from './components/HeroSection';
import { TabsSection } from './components/tabs';
import SupportSection from '@/app/components/HSupport/HSupport';
import PackageOfferSection from './components/PackageOfferSection';
import { NavBar } from '@/app/shared/navbar/NavBar';
import UniversitySection from './components/hospitalList';

const StudentHomePage = () => {
  return (
    <div>
        <div>
            <HeroSection/>
        </div>
        <div>
            <TabsSection/>
        </div> 
        <div className='text-2xl font-bold max-w-7xl mx-auto min-h-[550px] flex items-center justify-center'>
            <PackageOfferSection/>
        </div>
        <div>
            <UniversitySection />
        </div>
        <div>
            <SupportSection/>
        </div>
    </div>
  )
}

export default StudentHomePage;