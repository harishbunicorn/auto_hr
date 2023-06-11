'use-client';
import { useRouter } from 'next/navigation';

export default function HomeComponent() {
    const router = useRouter();
    return (
        <div className='flex-col justify-start m-20 w-1/3 mt-60 text-black'>
            <h1 className='text-4xl mb-12 font-extrabold'>
                Simplify Your HR Processes and Streamline Workforce Management
            </h1>
            <h2 className='text-2xl'>
                Experience Effortless Recruitment and Onboarding
            </h2>
            <button
                className='bg-orange-400 p-8 px-20 rounded-full text-white text-xl mt-12'
                onClick={() => router.push('/selectJob')}
            >
                Get Started
            </button>
        </div>
    );
}
