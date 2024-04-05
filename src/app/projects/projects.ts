export const Projects: ProjectData[] = [
	{
		name: 'osf-IRCd',
		descriptionShort: 'A minimal IRC server written in Nim',
		descriptionLong: 'A project that deserves a better description.',
		langs: ['Nim'],
		repo: 'https://github.com/opensource-force/osf-IRCd',
		wantContributors: true
	},
	{
		name: 'DisCog',
		descriptionShort: 'A general-purpose Discord bot written in TypeScript.',
		descriptionLong: 'Akpi should write a better description too.',
		langs: ['TypeScript'],
		repo: 'https://github.com/akpi816218/discog',
		wantContributors: true
	},
	{
		name: 'SmaugX',
		descriptionShort: 'A MUD server written in C#.',
		descriptionLong: "I'm no better about READMEs.",
		langs: ['C#', 'Postgres'],
		repo: 'https://github.com/DitchTurtL/SmaugX',
		wantContributors: true
	}
];

export interface ProjectData {
	name: string;
	descriptionShort: string;
	descriptionLong: string;
	langs: string[];
	repo: string;
	wantContributors: boolean;
}
