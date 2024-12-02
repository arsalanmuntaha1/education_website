import React from 'react';
import { roboto } from './topbar';
import TeamCard from './teamCard';

function Team() {
    return (
        <div className={`${roboto.className}flex text-center gap-20 py-28 bg-primary`}>
            <div>
                <h2 className="font-bold text-5xl ">Our team</h2>
                <p className="text-lg mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                </p>
            </div>
            <div className="flex justify-center flex-wrap">
                <TeamCard
                    image="/assets/team1.svg"
                    name="James Nduku"
                    info="Marketing Coordinator"
                />
                <TeamCard
                    image="/assets/team2.svg"
                    name="Joseph Munyambu"
                    info="Nursing Assistant"
                />
                <TeamCard
                    image="/assets/team3.svg"
                    name="Joseph Ngumbau"
                    info="Medical Assistant"
                />

                <TeamCard image="/assets/team4.svg" name="Erick Kipkemboi" info="Web Designer" />
                <TeamCard
                    image="/assets/team5.svg"
                    name="Stephen Kerubo"
                    info="President of Sales"
                />
                <TeamCard image="/assets/team6.svg" name="John Leboo" info="Dog Trainer" />
            </div>
        </div>
    );
}

export default Team;
