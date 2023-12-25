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
		name: 'Fit App *',
		status: '/* In develop stage */',
		description: 'Fit app - is a API for mobile fitness app.',
		stack: ['TypeScript', 'NestJS', 'NodeJS', 'JWT', 'Mailer', 'Socket.io', 'Prisma', 'PostgreSQL', 'Microservices', 'RabbitMQ', 'Winston', 'Google Cloud', 'Vercel', 'Docker', 'Kubernetes', 'Chache', 'REST', 'Swagger', 'CI/CD', 'Jest'],
		github: 'https://github.com/luvlqq/fitapp',
},
{
	name: 'Nestjs-googldrive-upload',
	status: '/* Complete */',
	description: 'Library for upload files in google drive.',
	stack: ['TypeScript', 'NestJS', 'NodeJS', 'Google API'],
	url: 'https://www.npmjs.com/package/nestjs-googledrive-upload',
	github: 'https://github.com/luvlqq/nestjs-googledrive',
},
{
    name: 'GraphQL Microservice Catalog',
    status: '/* Complete */',
    description: 'GraphQL API for catalog with microservices: auth, calatog, order, cart, gateway.',
    stack: ['TypeScript', 'NestJS', 'NodeJS', 'JWT', 'Prisma', 'PostgreSQL', 'GraphQL', 'Apollo', 'CQRS', 'MongoDB', 'Cache', 'Winston', 'Stripe', 'Swagger', 'Jest'],
    github: 'https://github.com/luvlqq/microservice_gql_catalog',
},
{
    name: 'Meetup API Microservice',
    status: '/* Complete */',
    description: 'REST API microservice. Upgrade version of Meetup API.',
    stack: ['TypeScript', 'NestJS', 'NodeJS', 'JWT', 'Prisma', 'PostgreSQL', 'Swagger', 'Microservice', 'RabbitMQ', 'Google Cloud', 'Elasticsearch', 'Kibana', 'PDF', 'CSV', 'OAuth'],
    github: 'https://github.com/luvlqq/Meetup_API_Microservices',
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
		description: 'Simple online chat build on websocket with Socket.io library.',
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
		description: 'My personal website with my projects, info and links.',
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
