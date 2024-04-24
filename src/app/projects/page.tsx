import Project from './_components/Project/component';
import { Projects } from './projects';

export default function Page() {
	return (
		<main id='content' role='main'>
			{Projects.map(project => (
				<Project data={project} key={project.name} />
			))}
		</main>
	);
}
