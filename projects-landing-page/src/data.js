const projects = [
  {
    id: "1",
    name: "Article Preview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "2",
    name: "Bookmark Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "TailwindCSS"],
    images: {
      desktop: {
        preview: "assets/bookmark-desktop-preview.png",
        full: "assets/bookmark-desktop-full.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "3",
    name: "Bootcamp Testimonial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "4",
    name: "Clock App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS", "Parcel", "API", "AXIOS"],
    images: {
      desktop: {
        preview: "/assets/desktop-clock-app-day.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "5",
    name: "Fylo Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/fylo-desktop-preview.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "6",
    name: "GitHub User Search Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["React", "Styled Components", "Redux", "Redux Thunk", "Api"],
    images: {
      desktop: {
        preview: "/assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "7",
    name: "Huddle Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/huddle-desktop-preview.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "8",
    name: "Intro Component",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/intro-desktop-preview.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "9",
    name: "Meet Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/meeet-desktop-preview.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "10",
    name: "Memory Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["React", "Redux", "React Hooks", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "11",
    name: "NFT Preview Component",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/nft-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "12",
    name: "Profile Card Component",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/profile-desktop.png",
        full: "none",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "13",
    name: "Social Media Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/social-desktop-light-mode.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "14",
    name: "SunnySide Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "SCSS"],
    images: {
      desktop: {
        preview: "/assets/desktop-sunnyside-preview.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "15",
    name: "Testimonial Grid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "TailwindCSS"],
    images: {
      desktop: {
        preview: "/assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "16",
    name: "Time Tracking Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["HTML", "TailwindCSS"],
    images: {
      desktop: {
        preview: "/assets/time-tracking-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "17",
    name: "Url Shortening Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tortor eget mi auctor feugiat.",
    technologies: ["React", "TailwindCSS", "API"],
    images: {
      desktop: {
        preview: "/assets/shortener-desktop-with-link.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
];

export default projects;
