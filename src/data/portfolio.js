export const profile = {
    name: 'Seyi Bamijoko',
    initials: 'SB',
    greeting: "Hi, I'm Seyi Bamijoko.",
    title: 'Full-Stack Developer',
    subtitle:
        "I'm a software developer who recently graduated from the University of Alberta, currently interested in mobile apps, full-stack development, and clean UI design.",
    email: 'seyiwork@yahoo.com',
    resumeUrl: '/Seyi_Bamijoko_Resume.pdf',
    socials: [
        { platform: 'GitHub',   url: 'https://github.com/Bamijoko-Seyi', icon: 'github' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/seyi-bamijoko-327721238', icon: 'linkedin' },
    ],
    ctas: [
        {
            label: 'View DevBoard Live',
            url: 'https://devboard-ui.vercel.app',
            icon: 'external',
            variant: 'primary',
            external: true,
        },
        {
            label: 'Download Resume',
            url: '/Seyi_Bamijoko_Resume.pdf',
            icon: 'download',
            variant: 'secondary',
            download: true,
        },
    ],
}

export const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About',    href: '#about' },
    { label: 'Contact',  href: '#contact' },
]

export const projects = [
    // --- FLAGSHIP PROJECT ---
    {
        id: 'devboard',
        title: 'DevBoard',
        tagline: 'Collaborative Project Tracker',
        description:
            'A full-stack project tracker with JWT authentication, role-based access control (Owner/Editor/Viewer), and a Kanban task board.',
        tech_stack: ['Java 21', 'Spring Boot 4', 'React', 'PostgreSQL', 'Docker'],
        image: '/images/devboard-app-screenshot.png',
        live_url: 'https://devboard-ui.vercel.app',
        repo_url: 'https://github.com/Bamijoko-Seyi/devboard',
        highlight: true,
    },

    // --- GROUP PROJECTS ---
    {
        id: 'sppa',
        title: 'Project SAPPA SiteManager',
        tagline: 'Mobile & Web Site Management Suite',
        description:
            'A platform suite consisting of both mobile and web applications that enables users to manage real-world sites. My roles included: implementing data analytics modules for admin/user views, managing user accounts and site records, and refining the UI.',
        tech_stack: ['JavaScript', 'CSS', 'TypeScript'],
        image: '/images/cmput401-projectSAPPA-sitemanager-app-screenshot.png',
        live_url: null,
        repo_url: 'https://github.com/Bamijoko-Seyi/CMPUT401-ProjectSAPPA-SiteManager',
        highlight: false,
    },
    {
        id: 'firebrick',
        title: 'Project Firebrick',
        tagline: 'Cross-Platform Social Media',
        description:
            'A web app enabling communication between users and admins, plus cross-platform communication with users on other nodes. My roles included: designing the database structure, developing inter-node communication functions, and building the admin section.',
        tech_stack: ['Python', 'JavaScript', 'HTML', 'Django'],
        image: '/images/cmput404-projectfirebrick-socialmedia-app-screenshot.png',
        live_url: null,
        repo_url: 'https://github.com/Bamijoko-Seyi/CMPUT404-ProjectFirebrick-SocialMediaPlatform',
        highlight: false,
    },
    {
        id: 'lucky-event',
        title: 'Lucky Event Management',
        tagline: 'Mobile Event Hosting Platform',
        description:
            'A mobile app that offers users the ability to host and join events. My roles included: implementing core authentication (login/signup), contributing to event creation, managing platform images, and refining the UI.',
        tech_stack: ['JavaScript', 'CSS'],
        image: '/images/cmput301-lucky-eventmanagement-app-screenshot.png',
        live_url: null,
        repo_url: 'https://github.com/Bamijoko-Seyi/CMPUT301-LuckyEvent-EventManagementPlatform',
        highlight: false,
    },
    {
        id: 'mongodb',
        title: 'MongoDB MiniProject',
        tagline: 'Text-Based Social Media App',
        description:
            'A text-based social media application utilizing Python and MongoDB. My roles included: implementing JSON data-loading into MongoDB, developing keyword-based search for tweets and users, and designing the CLI interface.',
        tech_stack: ['Python', 'MongoDB'],
        image: '/images/cmput291-mongoDB-app-screenshot.png',
        live_url: null,
        repo_url: 'https://github.com/Bamijoko-Seyi/CMPUT291-MongoDB-MiniProject2',
        highlight: false,
    },

    // --- SOLO PROJECTS ---
    {
        id: 'sports-news',
        title: 'Sport News App',
        tagline: 'Desktop News Aggregator',
        description:
            'A desktop app that allows you to access the latest sports news from all available providers.',
        tech_stack: ['C#', 'XML', 'Visual Studio'],
        image: '/images/sport-news-app-screenshot.png',
        live_url: null,
        repo_url: 'https://github.com/Bamijoko-Seyi/SportsApp',
        highlight: false,
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Web App',
        tagline: 'Frontend Storefront with Admin Access',
        description:
            'A frontend e-commerce project featuring product filtering, a cart system, and React context for state management.',
        tech_stack: ['React', 'JavaScript', 'CSS'],
        image: '/images/eccomerence-app-screenshot.png',
        live_url: null,
        repo_url: 'https://github.com/Bamijoko-Seyi/Ecommerence-App',
        highlight: false,
    },
    {
        id: 'multimedia',
        title: 'MultiMedia Mobile App',
        tagline: 'Personalized Media Viewer (Suspended)',
        description:
            'A mobile app used to personalize and view media from many platforms.',
        tech_stack: ['JavaScript', 'CSS'],
        image: '/images/multimedia-mobile-app-screenshot.png',
        live_url: null,
        repo_url: 'https://github.com/Bamijoko-Seyi/MultiMedia-App',
        highlight: false,
    }
]

export const about = {
    heading: 'About Me',
    paragraphs: [
        "I'm a software developer based in Canada with a BSc in Computer Science from the University of Alberta. I specialize in building backends with Java and Spring Boot, and connecting them to clean, responsive React interfaces.",
        'My experience includes a software engineering internship at TechGenPro, where I built React features and Python data pipelines. I recently completed DevBoard to deeply master full-stack architecture, Docker, and cloud deployment.',
        "When I'm not coding, I'm usually reading about system design or practicing algorithms.",
    ],
}