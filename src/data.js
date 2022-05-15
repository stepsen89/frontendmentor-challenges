const projects = [
  {
    id: "1",
    name: "Article Preview",
    description:
      "Simple component to preview short article. Responsive for desktop, mobile and tablet.",
    technologies: ["HTML", "SCSS"],
    activeLink: "https://stepsen89.github.io/frontendmentor-challenges/article-preview/index.html",
    images: {
      desktop: {
        preview: "/assets/article-preview-desktop.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "/assets/article-preview-desktop.png",
        full: "/assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "2",
    name: "Bookmark Manager",
    description:
      "Landing Page for bookmark manager extension. Responsive for desktop, mobile and tablet.",
    technologies: ["HTML", "TailwindCSS"],
    activeLink: "https://stepsen89.github.io/frontendmentor-challenges/bookmark-manager/index.html",
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
    description: "Bootcamp Testimonial Slider",
    technologies: ["HTML", "JS", "SCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/bootcamp-testimonial/index.html",
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
      "Landing page which displays current date && time (IP), theme depending on daytime. Mobile and Desktop versions.",
    technologies: ["HTML", "JS", "SCSS", "Parcel", "API", "Axios"],
    activeLink: "https://stepsen89.github.io/frontendmentor-challenges/clock-app/dist/index.html",
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
      "Landing Page for fictive Fylo cloud storage and sharing platform. Fully resposive.",
    technologies: ["HTML", "SCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/fylo-landing-page/index.html",
    images: {
      desktop: {
        preview: "/assets/fylo_test.png",
        full: "assets/article-preview-desktop.png",
      },
      mobile: {
        preview: "/assets/fylo-test.png",
        full: "assets/article-preview-desktop.png",
      },
    },
  },
  {
    id: "6",
    name: "GitHub User Search Application",
    description:
      "Application to search for github users and see basic information such as name, location, followers and description.",
    technologies: ["React", "Redux", "Redux Thunk", "API"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/github-user-search/build/index.html",
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
    description: "Landing page for a community platform. Desktop, tablet and mobile versions.",
    technologies: ["HTML", "SCSS"],
    activeLink: "https://stepsen89.github.io/frontendmentor-challenges/huddle/index.html",
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
    description: "Registration page and sign up component (form) for coding platform.",
    activeLink: "https://stepsen89.github.io/frontendmentor-challenges/intro-component/index.html",
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
    description: "Landing Page for group chat application. Fully responsive.",
    technologies: ["HTML", "SCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/meet-landing-page/index.html",
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
      "Simple memory game for up to 4 players. Single and multi-player mode in different grid sizes. Responsive for desktop and mobile.",
    technologies: ["React", "Redux", "React", "SCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/memory-game/build/index.html",
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
    description: "Simple preview component for NFT values. Responsive.",
    technologies: ["HTML", "SCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/nft-preview-card-component-main/index.html",
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
    description: "Simple profile card. Responsive.",
    technologies: ["HTML", "SCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/profile-card-component/index.html",
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
      "Social media stats dashboard for different platforms. Dark and light mode. Responsive for desktop, tablet and mobile.",
    technologies: ["HTML", "SCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/social-media-dashbaord/index.html",
    images: {
      desktop: {
        preview: "/assets/social-desktop-light-mode.png",
        full: "/assets/social-desktop-dark.png",
      },
      mobile: {
        preview: "/assets/social-mobile-dark-preview.png",
        full: "/assets/social-mobile-full.png",
      },
    },
  },
  {
    id: "14",
    name: "SunnySide Landing Page",
    description: "Landing Page for digital agency. Responsive for desktop and mobile.",
    technologies: ["HTML", "SCSS"],
    activeLink: "https://stepsen89.github.io/frontendmentor-challenges/sunnyside/index.html",
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
    description: "Grid preview of testimonials. Desktop and mobile views.",
    technologies: ["HTML", "TailwindCSS"],
    activeLink: "https://stepsen89.github.io/frontendmentor-challenges/testimonial-grid/index.html",
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
      "Simple time tracking dashboard interface which displays daily, weekly and monthly stats.",
    technologies: ["HTML", "JS", "TailwindCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/time-tracking-dashboard/index.html",
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
      "Landing page and URL shortening functionality. Responsive for desktop and mobile.",
    technologies: ["React", "JS", "API", "TailwindCSS"],
    activeLink:
      "https://stepsen89.github.io/frontendmentor-challenges/url-shortening-application/build/index.html",
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
