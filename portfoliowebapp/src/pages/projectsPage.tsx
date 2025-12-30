import ProjectCard from "../components/projectCard";
import scales from '../assets/scales.svg';
import testImg from '../assets/testImg.jpg';
import CoolBackground from '../components/coolBackground';

function Projects () {
    const projects = [
        { id: 1, image: testImg, title: 'Hunting Bibel', link: '/projects/huntingBibel' },
        { id: 2, image: testImg, title: 'My garden weather', link: '/projects/gardenWeather' },
        { id: 3, image: testImg, title: 'hhghfg' },
        { id: 4, image: testImg, title: 'rrs' },
        { id: 5, image: testImg, title: 'Hunt' },
    ];

    return (
        <div className='relative flex md:flex-row flex-col items-center justify-center p-5 min-h-screen overflow-hidden'>

          <CoolBackground image={scales} />

            <div className="flex flex-col z-50">
               <h2 className="text-5xl font-bold text-black text-center mb-12">My Projects</h2>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-30 gap-15 mx-auto">
                    {projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            image={project.image} 
                            title={project.title}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;