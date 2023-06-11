'use client';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';

const TextAreaBlock = () => {
    return (
        // <div className='min-h-screen bg-gray-200 flex items-center justify-center p-8'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-2xl'>
            <textarea
                className='w-full h-96 p-4 rounded-lg resize-none'
                placeholder='Enter your text...'
            ></textarea>
        </div>
        // </div>
    );
};
export default function generatePost() {
    const router = useRouter();
    return (
        <>
            <Header />
            <div className='flex mt-60  mx-20'>
                <div className='mr-20 w-1/2'>
                    <h1 className='text-4xl mb-12 font-extrabold text-black'>
                        Optimized Job Description
                    </h1>
                    <TextAreaBlock />
                </div>
                <div className='flex flex-col w-1/2'>
                    <button
                        className='bg-orange-400 p-4 px-20 rounded-full text-white text-xl mt-12'
                        // onClick={createJobDescription}
                    >
                        Post on LinkedIn
                    </button>
                    <button
                        className='bg-orange-400 p-4 px-20 rounded-full text-white text-xl mt-12'
                        // onClick={createJobDescription}
                    >
                        Post on Slack
                    </button>
                    <div className='bg-white flex justify-between rounded-xl h-1/2 w-full mt-12 p-4'>
                        <div className=''>
                            <p className='text-black font-bold text-2xl'>
                                Budget
                            </p>
                            <p className='text-black font-bold text-2xl'>
                                Title
                            </p>
                            <p className='text-black font-bold text-2xl'>
                                Region
                            </p>
                        </div>
                        <div>
                            <p className='text-black text-2xl'>
                                $100,000 - $120,000
                            </p>
                            <p className='text-black text-2xl'>
                                Software Engineer
                            </p>
                            <p className='text-black text-2xl'>New York</p>
                        </div>
                    </div>
                    <div className='text-black mt-12'>
                        <p className='text-white font-bold text-2xl'>
                            Competetive Salary based on Real-time
                        </p>
                        <div className='flex text-white mt-4'>
                            <p className='mr-32'>Salary</p>
                            <p>$98000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
