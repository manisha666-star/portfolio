export type DesignGalleryItem = {
  title: string;
  image: string;
  alt: string;
  link?: string;
  aspectRatio?: string;
};

export type DesignGalleryGroup = {
  title: string;
  description: string;
  items: DesignGalleryItem[];
};

export type DesignCaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  year: string;
  overview: string;
  role: string;
  objective: string;
  process: string[];
  tools: string[];
  groups: DesignGalleryGroup[];
  results: string;
};

const imageCycle = [
  "/Design/manisha.png",
  "/Design/Thunderbolts.png",
  "/Design/wdl.png",
  "/Design/parkwise.png",
];

const socialMediaItems: DesignGalleryItem[] = [

  {
    title: "Segway",
    image: "/Social Media/Segway.png",
    alt: "Segway social media design preview",
    aspectRatio: "980 / 984",
  },
  {
    title: "GEMS Pre Registration",
    image: "/Social Media/gems pre registration.png",
    alt: "GEMS pre registration social media design preview",
    aspectRatio: "1520 / 1520",
  },
  {
    title: "Grade 1",
    image: "/Social Media/grade 1.png",
    alt: "Grade 1 social media design preview",
    aspectRatio: "1520 / 1520",
  },
  {
    title: "TDC Taekwondo",
    image: "/Social Media/tdc taekwondo.png",
    alt: "TDC Taekwondo social media design preview",
    aspectRatio: "1570 / 1566",
  },
  {
    title: "Yala",
    image: "/Social Media/yala.png",
    alt: "Yala social media design preview",
    aspectRatio: "652 / 646",
  },
  {
    title: "AVYA",
    image: "/Social Media/avya.png",
    alt: "AVYA social media design preview",
    aspectRatio: "1570 / 1566",
  },
  {
    title: "Dr. Rhazes",
    image: "/Social Media/Dr.rhazes.png",
    alt: "Dr. Rhazes social media design preview",
    aspectRatio: "658 / 660",
  },
  {
    title: "Ehub",
    image: "/Social Media/ehub.png",
    alt: "Ehub social media design preview",
    aspectRatio: "970 / 966",
  },
  {
    title: "Sea",
    image: "/Social Media/sea.png",
    alt: "Sea social media design preview",
    aspectRatio: "658 / 658",
  },
  {
    title: "8848",
    image: "/Social Media/8848.png",
    alt: "8848 social media design preview",
    aspectRatio: "974 / 972",
  },
  {
    title: "Sea Links",
    image: "/Social Media/seaLinks .png",
    alt: "Sea Links social media design preview",
    aspectRatio: "656 / 654",
  },
  {
    title: "NCLEX",
    image: "/Social Media/Nclex.png",
    alt: "NCLEX social media design preview",
    aspectRatio: "970 / 966",
  },
];

const posterItems: DesignGalleryItem[] = [
  {
    title: "Opening",
    image: "/Social Media/opeing.png",
    alt: "Opening poster design preview",
    aspectRatio: "686 / 962",
  },
  {
    title: "TDC Taekwondo",
    image: "/Social Media/tdc taekwondo.png",
    alt: "TDC Taekwondo poster design preview",
    aspectRatio: "1570 / 1566",
  },
  {
    title: "Cover Orchids",
    image: "/Social Media/cover orchids.png",
    alt: "Cover orchids poster design preview",
    aspectRatio: "1974 / 746",
  },
  {
    title: "Print Kitchen",
    image: "/Social Media/print kitchen .png",
    alt: "Print Kitchen poster design preview",
    aspectRatio: "1156 / 962",
  },
];

function makeItems(groupTitle: string, imageOffset = 0): DesignGalleryItem[] {
  return [1, 2, 3].map((number) => {
    const image = imageCycle[(imageOffset + number - 1) % imageCycle.length];

    return {
      title: `${groupTitle} ${number}`,
      image,
      alt: `${groupTitle} design preview ${number}`,
    };
  });
}

export const designCaseStudies: DesignCaseStudy[] = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Logos / Guidelines / Brand Applications",
    summary:
      "Identity systems built around logos, brand guidelines, business cards, and applied brand touchpoints.",
    image: "/Design/Branding.png",
    year: "2024",
    overview:
      "Brand Identity brings together visual systems designed to make organizations, campaigns, and school communications feel consistent, recognizable, and polished.",
    role:
      "I created logo concepts, visual rules, brand layouts, and application mockups that can be reused across print and digital materials.",
    objective:
      "Create identity systems that are simple enough to use consistently and expressive enough to feel distinct.",
    process: [
      "Explored visual directions based on audience, tone, and brand goals.",
      "Designed logo concepts, typography pairings, and color systems.",
      "Tested identity elements across common print and digital formats.",
      "Prepared organized brand assets for repeat use.",
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    groups: [
      {
        title: "Logos",
        description:
          "Logo marks, lockups, monograms, and identity explorations.",
        items: [
          {
            title: "Manisha Rai Portfolio",
            image: "/Design/Mr LOGO.png",
            alt: "Manisha Rai portfolio brand identity preview",
          },
          {
            title: "Thunderbolts Cup",
            image: "/Design/Thunderbolts.png",
            alt: "Thunderbolts Cup logo preview",
          },
          {
            title: "Women's Deadlift Competition",
            image: "/Design/wdl.png",
            alt: "Logo design preview 3",
          },
        ],
      },
      {
        title: "Brand Guidelines",
        description:
          "Color, typography, spacing, and usage rules for consistent brand presentation.",
        items: [
          {
            title: "Thunderbolts Cup Brand Guidelines",
            image: "/Design/tbc guidelines.png",
            alt: "Thunderbolts Cup brand guidelines preview",
            link: "https://drive.google.com/file/d/1eGPGcyK_bOw2yWOIh35TRIr4b0y5ksXu/view",
          },
        ],
      },
      {
        title: "Business Cards",
        description:
          "Professional card layouts and identity touchpoints for print use.",
        items: [
          {
            title: "Business Card GEMS school",
            image: "/Design/VC sample 3.jpg",
            alt: "Business Card GEMS school preview",
          },
        ],
      },
      // {
      //   title: "Brand Applications",
      //   description:
      //     "Applied brand visuals across stationery, mockups, and campaign surfaces.",
      //   items: makeItems("Brand Application", 3),
      // },
    ],
    results:
      "The collection shows how identity work can move from a logo into a flexible visual system.",
  },
  {
    slug: "marketing-campaigns",
    title: "Marketing & Campaigns",
    category: "Social Media / Posters / Ads / Digital Campaigns",
    summary:
      "Campaign visuals for social media, posters, banners, newspaper ads, and digital promotions.",
    image: "/Design/Marketing.png",
    year: "2024",
    overview:
      "Marketing & Campaigns collects communication visuals created for announcements, admissions, events, promotions, and school community engagement.",
    role:
      "I designed campaign visuals, post templates, advertising layouts, and repeatable systems that keep messages clear across formats.",
    objective:
      "Create campaign assets that are quick to understand, visually consistent, and ready for both print and digital channels.",
    process: [
      "Defined the campaign message and primary audience.",
      "Built adaptable layouts for different media formats.",
      "Balanced brand consistency with campaign-specific energy.",
      "Prepared artwork for platform and print requirements.",
    ],
    tools: ["Illustrator", "Photoshop", "Canva"],
    groups: [
      {
        title: "Social Media",
        description:
          "Facebook posts, Instagram posts, story layouts, and carousel-style communication.",
        items: socialMediaItems,
      },
      {
        title: "Posters",
        description:
          "Event, announcement, and promotional posters with clear visual hierarchy.",
        items: posterItems,
      },
      {
        title: "Banners",
        description:
          "Horizontal and vertical campaign banners for school and event communication.",
        items: makeItems("Banner", 3),
      },
      {
        title: "Newspaper Ads",
        description:
          "Print advertising layouts designed for legibility and institutional polish.",
        items: makeItems("Newspaper Ad", 0),
      },
      {
        title: "Digital Campaigns",
        description:
          "Campaign systems adapted for repeated digital announcements and promotions.",
        items: makeItems("Digital Campaign", 1),
      },
    ],
    results:
      "The collection makes campaign work easy to scan by format while keeping every image expandable in the same-page lightbox.",
  },
  {
    slug: "editorial-print",
    title: "Editorial & Print",
    category: "Yearbooks / Prospectus / Brochures / Certificates",
    summary:
      "Editorial and print materials for schools and educational institutions, focused on clear layouts and typography.",
    image: "/Design/gems.png",
    year: "2024",
    overview:
      "I designed a variety of editorial and print materials for schools and educational institutions, focusing on clear layouts, typography, and visual storytelling.",
    role:
      "I handled layout direction, typography, visual hierarchy, production-ready composition, and image-led storytelling across multi-page and single-page formats.",
    objective:
      "Turn dense information into readable, polished, and memorable print pieces.",
    process: [
      "Grouped content into clear editorial sections before starting layout.",
      "Built consistent typography, spacing, image treatment, and page rhythm.",
      "Adapted each layout for print readability and institutional tone.",
      "Prepared final artwork for review, handoff, and production use.",
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    groups: [
      {
        title: "Yearbooks",
        description:
          "Covers, opening spreads, feature pages, and student-focused editorial layouts.",
        items: makeItems("Yearbook", 1),
      },
      {
        title: "Prospectus",
        description:
          "Admissions-led publication layouts with structured information and refined hierarchy.",
        items: makeItems("Prospectus", 2),
      },
      {
        title: "Brochures",
        description:
          "Folded and multi-panel informational layouts for school communication.",
        items: makeItems("Brochure", 3),
      },
      {
        title: "Certificates",
        description:
          "Formal print pieces designed around clarity, balance, and institutional polish.",
        items: makeItems("Certificate", 0),
      },
      {
        title: "Flyers",
        description:
          "Single-page promotional layouts for events, announcements, and campaigns.",
        items: makeItems("Flyer", 1),
      },
      {
        title: "Booklets",
        description:
          "Compact multi-page documents with consistent grids and readable flow.",
        items: makeItems("Booklet", 2),
      },
    ],
    results:
      "The collection keeps print work organized by format, with compact thumbnails and larger previews available on click.",
  },
  {
    slug: "event-branding",
    title: "Event Branding",
    category: "Thunderbolts Cup / Medals / Backdrops / Event Graphics",
    summary:
      "Event identity systems and supporting graphics for school events, sports, ceremonies, and campaigns.",
    image: "/Design/Thunderbolts.png",
    year: "2023",
    overview:
      "Event Branding brings together visual systems for school and sporting events, including Thunderbolts Cup assets, medals, stage graphics, shirts, and event communication pieces.",
    role:
      "I created the event direction and adapted it across promotional, environmental, apparel, and ceremony materials.",
    objective:
      "Build energetic event systems that feel cohesive across every touchpoint visitors and participants see.",
    process: [
      "Defined the event theme and visual direction.",
      "Created core identity elements and supporting graphics.",
      "Adapted the system across print, apparel, stage, and digital formats.",
      "Refined artwork for consistency across production needs.",
    ],
    tools: ["Illustrator", "Photoshop", "After Effects"],
    groups: [
      {
        title: "Thunderbolts Cup",
        description:
          "Sports event identity assets, campaign graphics, and event communication.",
        items: makeItems("Thunderbolts Cup", 2),
      },
      {
        title: "Medals",
        description:
          "Award and medal concepts designed for ceremony and event use.",
        items: makeItems("Medal", 3),
      },
      {
        title: "Stage Backdrops",
        description:
          "Large-format backdrop layouts for event stages and photo moments.",
        items: makeItems("Stage Backdrop", 0),
      },
      {
        title: "T-shirts",
        description:
          "Event apparel graphics and wearable identity applications.",
        items: makeItems("T-shirt", 1),
      },
      {
        title: "Event Graphics",
        description:
          "Supporting signage, announcement graphics, and event-day visuals.",
        items: makeItems("Event Graphic", 2),
      },
    ],
    results:
      "The event work reads as one complete system, from announcement graphics to physical event materials.",
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    category: "GEMS School / ParkWise UI / NepEdu / Dashboards",
    summary:
      "Interface and product design work for school platforms, dashboards, mobile apps, and product concepts.",
    image: "/Design/parkwise.png",
    year: "2024",
    overview:
      "UI / UX Design gathers interface work for websites, dashboards, mobile apps, and education-focused digital products.",
    role:
      "I worked on interface structure, content hierarchy, visual design, responsive layouts, and user-focused product flows.",
    objective:
      "Design digital experiences that are clear, practical, and easy to move through.",
    process: [
      "Mapped user needs and key information priorities.",
      "Designed screens around navigation clarity and repeated workflows.",
      "Refined visual hierarchy, spacing, and responsive behavior.",
      "Prepared UI directions for implementation and presentation.",
    ],
    tools: ["Figma", "Illustrator", "Next.js"],
    groups: [
      {
        title: "GEMS School",
        description:
          "School website and communication interface concepts.",
        items: makeItems("GEMS School UI", 1),
      },
      {
        title: "ParkWise UI",
        description:
          "Parking and mobility interface screens focused on clear product flow.",
        items: makeItems("ParkWise UI", 3),
      },
      {
        title: "NepEdu",
        description:
          "Education platform concepts and learning-focused interface layouts.",
        items: makeItems("NepEdu", 0),
      },
      {
        title: "Dashboards",
        description:
          "Data-heavy layouts designed for scanning, comparison, and repeated use.",
        items: makeItems("Dashboard", 2),
      },
      {
        title: "Mobile Apps",
        description:
          "Mobile-first screens and app concepts with compact interaction flows.",
        items: makeItems("Mobile App", 3),
      },
    ],
    results:
      "The UI work shows how design decisions support clarity, structure, and usability across product types.",
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    category: "GIFs / Video Edits / Animations / Promotional Videos",
    summary:
      "Motion-led design work including animated graphics, video edits, GIFs, and promotional content.",
    image: "/Design/Thunderbolts.png",
    year: "2024",
    overview:
      "Motion Graphics collects animated and video-based work made for event promotion, announcements, campaigns, and digital communication.",
    role:
      "I created motion concepts, edited visuals, adapted campaign artwork for video, and prepared promotional motion assets.",
    objective:
      "Use movement to make campaign and event communication more engaging while keeping the message clear.",
    process: [
      "Defined the message and the motion format needed.",
      "Prepared static artwork and assets for animation.",
      "Edited movement, pacing, transitions, and campaign timing.",
      "Exported final graphics for digital sharing and promotion.",
    ],
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    groups: [
      {
        title: "GIFs",
        description:
          "Short looping graphics for announcements and lightweight campaign moments.",
        items: makeItems("GIF", 2),
      },
      {
        title: "Video Edits",
        description:
          "Edited promotional clips and visual sequences for digital use.",
        items: makeItems("Video Edit", 3),
      },
      {
        title: "Animations",
        description:
          "Animated campaign elements, transitions, and moving visual systems.",
        items: makeItems("Animation", 0),
      },
      {
        title: "Promotional Videos",
        description:
          "Video-led promotional pieces for campaigns, events, and school updates.",
        items: makeItems("Promotional Video", 1),
      },
    ],
    results:
      "The motion collection groups animated work by format while keeping previews easy to browse.",
  },
];

export function getDesignCaseStudy(slug: string) {
  return designCaseStudies.find((project) => project.slug === slug);
}
