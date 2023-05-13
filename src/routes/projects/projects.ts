export interface Project {
	name: string;
	description: string;
	stack: string[];
	closed?: boolean;
	emoji?: string;
	url?: string;
	github?: string;
}

export const projects: Project[] = [
	{
		name: 'Brema Wallet',
		description:
			"Ecom wallet with simulate transactions between users. Update for diploma in future.",
		stack: [
			'TypeScript',
			'NestJS',
			'NodeJS',
			'JWT',
			'Prisma',
			'PostgreSQL',
			'Svelte',
		],
		url: 'https://github.com/luvlqq/bremaWallet'
	},
	{
		name: 'Brema Chat',
		description:
			'simple online chat build on ws.',
		stack: [
			'TypeScript',
			'NodeJS',
			'NestJS',
			'PostgreSQL',
			'Prisma',
			'Socket.io',
		],
    url: 'https://github.com/luvlqq/bremaChat'
	},
  {
    name: 'Express Auth API',
    description:
      'Auth API. Build by layer architecture.',
    stack: ['TypeScript', 'NodeJS', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    url: 'https://github.com/luvlqq/weather-cli'
  },
	{
		name: 'Weather-CLI',
		description:
			'Is a console application wich can show forecast for your city.',
		stack: ['JavaScript', 'NodeJS', 'CLI'],
	  url: 'https://github.com/luvlqq/weather-cli'
	}
];

export const load = () => {
	return { projects };
};
