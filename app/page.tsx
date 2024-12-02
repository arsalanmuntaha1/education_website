import Achievements from '@/components/achievements';
import Category from '@/components/category';
import Companies from '@/components/companies';
import Courses from '@/components/courses';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Team from '@/components/team';
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Home() {
    return (
        <div>
            <Hero />
            <Companies />
            <Category />
            <Achievements />
            <Courses />
            <Team />
            <Testimonials />
            <Footer/>
        </div>
    );
}
