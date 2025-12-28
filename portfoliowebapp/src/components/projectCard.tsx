import { Link } from 'react-router-dom';

interface ProjectCardProps {
    image: string;
    title: string;
    link?: string;
}

function ProjectCard({ image, title, link}: ProjectCardProps) {
    const content = (
        <div className="flex flex-col items-center text-black justify-center gap-4 hover:text-LightPurple hover:underline hover:decoration-LightPurple transition-all duration-500 cursor-pointer">
            <img src={image} alt={title} className="w-80 h-48 object-cover rounded-lg border-2 border-zinc-900" />
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
    );

    if (link) {
        return <Link to={link}>{content}</Link>;
    }

    return content;
}
export default ProjectCard;