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
export default function candidatePool() {
    const router = useRouter();
    return (
        <>
            <Header />
            <div>Caadmfkld</div>
        </>
    );
}
