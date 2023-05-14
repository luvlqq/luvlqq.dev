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
			'Ecom wallet with simulate transactions between users. Update for diploma in future.',
		stack: ['TypeScript', 'NestJS', 'NodeJS', 'JWT', 'Prisma', 'PostgreSQL', 'Svelte'],
    github: 'https://github.com/luvlqq/bremaWallet'
	},
	{
		name: 'Brema Chat',
		description: 'Simple online chat build on websocket with Socket.io library',
		stack: ['TypeScript', 'NodeJS', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.io'],
    github: 'https://github.com/luvlqq/bremaChat'
	},
	{
		name: 'Express Auth API',
		description: 'Auth API. Build by layer architecture.',
		stack: ['TypeScript', 'NodeJS', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    github: 'https://github.com/luvlqq/weather-cli'
	},
	{
		name: 'Weather-CLI',
		description: 'Is a console application wich can show forecast for your city.',
		stack: ['JavaScript', 'NodeJS', 'CLI'],
    github: 'https://github.com/luvlqq/weather-cli'
	}
];
