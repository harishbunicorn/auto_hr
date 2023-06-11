'use client';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function selectJob() {
    const jobsList = [
        { value: '', name: '---Select----' },
        { value: 'Software Developer', name: 'Software Developer' },
        { value: 'UI/UX Designer', name: 'UI/UX Designer' },
    ];
    const [selectedOption, setSelectedOption] = useState('');
    const router = useRouter();

    console.log(
        '🚀 ~ file: page.js:11 ~ selectJob ~ selectedOption:',
        selectedOption
    );

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const createJobDescription = () => {
        router.push('/generatePost');
    };
    return (
        <>
            <Header />
            <div class='flex justify-center items-center h-screen'>
                <div class='flex flex-col items-center'>
                    <h1 className='text-4xl mb-12 font-extrabold text-black'>
                        Select Current Open Roles
                    </h1>
                    <select
                        className='w-full h-12 rounded-md p-4'
                        value={selectedOption}
                        onChange={handleSelectChange}
                    >
                        {jobsList.map((job, id) => (
                            <option value={job.value} key={id}>
                                {job.name}
                            </option>
                        ))}
                    </select>
                    <button
                        className='bg-orange-400 p-4 px-20 w-full rounded-full text-white text-xl mt-12'
                        onClick={createJobDescription}
                    >
                        Create Job Description
                    </button>
                </div>
            </div>
        </>
    );
}
