import { IconType } from "react-icons";

export interface ExperienceInterface {
    title: string;
    position: string;
    company: string;
    range: string;
    description: string[];

}

export interface WorkInterface {
    title: string;
    description: string;
    image: string;
    tecnology: string[];
    state: number;
    links: {
        title: string,
        link: string,
        icon: IconType,
    }[];
}

export interface ExperimentInterface {
    title: string;
    tecnology: string[];
    links: {
        link: string,
        icon: IconType,
    }[];
}

export interface LanguageInterface {
    title: string;
    lang: string;
    menu: {
        title: string;
        link: string
    }[];
    banner: {
        title: string;
        subtitle: string;
        description: string;
        button: string
    }
    about: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        skills: {
            description: string;
            hardskills: { title: string; skills: { title: string, icon: IconType }[] };
            softskills: { title: string; skills: { title: string, icon: IconType }[] };
        }
    };
    experiences: {
        title: string;
        experience: ExperienceInterface[]
    };
    works: {
        title: string;
        work: WorkInterface[]
    };
    experiments: {
        title: string;
        experiment: ExperimentInterface[]
    };
    contact:
    {
        title: string;
        subtitle: string;
        description: string;
        button: string

    }
    footer: string
}