import Link from 'next/link';

export const Header = () => {
    return (
        <header className='absolute top-4 text-white justify-between'>
            <div className='container mx-auto py-4 px-8 flex items-center mr-32'>
                <div className='flex mr-96'>
                    <Link href='/'>Logo</Link>
                </div>
                <nav className='ml-96'>
                    <ul className='flex space-x-32'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/candidatePool'>Candidate Pool</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
