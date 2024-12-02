import React from 'react';
import { roboto } from './topbar';
import CategoryCard from './categoryCard';
import Button from './button';

function Category() {
    return (
        <div className={`${roboto.className} text-center gap-20 py-28 `}>
            <div>
                <h2 className="text-5xl font-bold">Explore Courses By Category</h2>
                <p className="text-lg pt-6">
                    Discover a wide range of courses covering a variety of subjects, taught by
                    expert instructors.
                </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-20 ">
                <CategoryCard
                    image="/assets/pen-tool-2.svg"
                    title="Design & Development"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/volume-high.svg"
                    title="Marketing"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/group.svg"
                    title="Development"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/microphone.svg"
                    title="Communication"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/link.svg"
                    title="Digital Marketing"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/arrow-2.svg"
                    title="Self Development"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/briefcase.svg"
                    title="Business"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/book.svg"
                    title="Finance"
                    description="50+ Courses Available"
                />
                <CategoryCard
                    image="/assets/book2.svg"
                    title="Consulting"
                    description="50+ Courses Available"
                    
                />
            </div>

            <div className='pt-16'>
                <Button name="View All Courses" className="py-3 px-6" />{' '}
            </div>
        </div>
    );
}

export default Category;
