export interface Project {
	name: string;
  status: string
	description: string;
	stack: string[];
	closed?: boolean;
	emoji?: string;
	url?: string;
	github?: string;
}

export const projects: Project[] = [
  {
    name: 'Found Flow *',
    status: '/* In develop stage */',
    description: '"Found Flow" is an innovative project that represents a platform where users can create accounts in different currencies and transfer funds to each other. ' +
      'The main feature of this platform is the ability to trade on a currency exchange, where users can independently set and generate currency exchange rates. ',
    stack: ['TypeScript', 'NestJS', 'NodeJS', 'JWT', 'Mailer', 'Socket.io', 'Prisma', 'PostgreSQL', 'Svelte', 'daisyUI', 'tailwind'],
    github: 'https://github.com/luvlqq/fundFlowServer',
  },
	{
		name: 'Brema Wallet',
    status: '/* Complete */',
		description:
			'Ecom wallet with simulate transactions between users. Update for diploma in future.',
		stack: ['TypeScript', 'NestJS', 'NodeJS', 'JWT', 'Prisma', 'PostgreSQL', 'Svelte'],
		github: 'https://github.com/luvlqq/bremaWallet'
	},
	{
		name: 'Brema Chat',
    status: '/* Complete */',
		description: 'Simple online chat build on websocket with Socket.io library',
		stack: ['Svelte', 'TypeScript', 'NodeJS', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.io'],
		github: 'https://github.com/luvlqq/bremaChat'
	},
  {
    name: 'Meetup API',
    status: '/* Complete */',
    description: 'Meetup API build by REST for Modsen company practice.',
    stack: ['TypeScript', 'NodeJS', 'NestJS', 'PostgreSQL', 'Prisma', 'JWT', 'Swagger', 'husky'],
    github: 'https://github.com/luvlqq/modsen_prac'
  },
  {
		name: 'luvlqq.dev',
    status: '/* Complete */',
		description: 'My personal website with my projects, info and links',
		stack: ['TypeScript', 'JavaScript', 'Svelte', 'tailwindcss', 'daisyui', 'flowbite'],
		github: 'https://github.com/luvlqq/luvlqq.dev',
    url: 'https://luvlqq-dev.vercel.app/'
	},
  {
		name: 'Express Auth API',
    status: '/* Complete */',
		description: 'Auth API. Build by layer architecture.',
		stack: ['TypeScript', 'NodeJS', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
		github: 'https://github.com/luvlqq/weather-cli'
	},
  {
		name: 'Weather-CLI',
    status: '/* Complete */',
		description: 'Is a console application wich can show forecast for your city.',
		stack: ['JavaScript', 'NodeJS', 'CLI'],
		github: 'https://github.com/luvlqq/weather-cli'
	}
];
