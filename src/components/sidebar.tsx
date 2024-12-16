import React from 'react';
import { DISCORD_INVITE_LINK } from '@/constants';

export default function Sidebar({
	navBarOpen,
	setNavBarOpen
}: {
	navBarOpen: boolean;
	setNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<section
			className={`z-100 h-screen animate-slideInFromRight flex fixed top-0 left-0 w-full sm:hidden ${
				navBarOpen ? '' : 'hidden'
			}`}
		>
			<div className='w-2/4 animate-opacityDelay ease-in bg-black opacity-20'></div>
			<div className='bg-slate-50 w-2/4 dark:bg-slate-90'>
				<div className='py-2 px-4'>
					<button
						onClick={() => setNavBarOpen(!navBarOpen)}
						type='button'
						className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
						data-hs-collapse='#navbar-collapse-with-animation'
						aria-controls='navbar-collapse-with-animation'
						aria-label='Toggle navigation'
					>
						<svg
							className={'openNavIconClassName'}
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M18 6 6 18' />
							<path d='m6 6 12 12' />
						</svg>
					</button>
				</div>
				<div id='menu' className='px-5 mt-5'>
					<div className='flex flex-col space-y-6 font-bold text-base'>
						<a
							className='font-medium text-blue-600 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
							href='/ '
							aria-current='page'
						>
							Home
						</a>
						<a
							className='font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
							href='/projects'
						>
							Projects
						</a>

						<a
							className='flex items-center  font-medium text-gray-500 hover:text-blue-600  dark:text-gray-400 dark:hover:text-blue-500'
							href='https://github.com/opensource-force'
						>
							<svg
								className='flex-shrink-0 size-4'
								xmlns='http://www.w3.org/2000/svg'
								x='0'
								y='0'
								width='100'
								height='100'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z'></path>
							</svg>
						</a>
						<a
							className='flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500'
							href={DISCORD_INVITE_LINK}
						>
							<svg
								className='flex-shrink-0 size-4'
								xmlns='http://www.w3.org/2000/svg'
								x='0'
								y='0'
								width='100'
								height='100'
								viewBox='0 -28.5 256 256'
								fill='currentColor'
							>
								<g>
									<path
										d='M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z'
										fill='#5865F2'
										fillRule='nonzero'
									></path>
								</g>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
