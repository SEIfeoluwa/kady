export type Project = {
  slug: string;
  name: string;
  // null = no photo set yet; renders a gradient placeholder instead.
  heroImage: string | null;
  gallery: (string | null)[];
};

export type ProjectCategory = {
  slug: string;
  label: string;
  cta: string;
  projects: Project[];
};

function placeholderProject(name: string, slug: string): Project {
  return {
    slug,
    name,
    heroImage: null,
    gallery: [null, null, null, null],
  };
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: "residential-projects",
    label: "Residential Projects",
    cta: "View Residential",
    projects: [
      {
        slug: "434-3rd",
        name: "434 3rd",
        heroImage: "/images/005_434_3RD_ST_NE_Unit_2_294212_533270.jpg",
        gallery: ["/images/010_434_3RD_ST_NE_Unit_2_294212_533270.jpg"],
      },
      {
        slug: "2900-12th-street",
        name: "2900 12th Street",
        heroImage: "/images/026_2900_12TH_STREET_UNIT_301_329719_618357.jpg",
        gallery: [
          "/images/029_2900_12TH_STREET_UNIT_301_329719_618357.jpg",
          "/images/038_2900_12TH_ST_NE_101_311020_579396.jpg",
        ],
      },
      placeholderProject("2112-2126 3rd St", "2112-2126-3rd-st"),
      placeholderProject("Kensington Place Condo", "kensington-place-condo"),
      placeholderProject("3800 block of 1st Street SE", "3800-block-of-1st-street-se"),
      placeholderProject("1410 Newton Street", "1410-newton-street"),
      placeholderProject("818 Kennedy St NW", "818-kennedy-st-nw"),
      placeholderProject("1914 8th Street NW", "1914-8th-street-nw"),
    ],
  },
  {
    slug: "custom-homes",
    label: "Custom Homes",
    cta: "View Custom Homes",
    projects: [
      {
        slug: "2004-evarts-street-ne",
        name: "2004 Evarts Street NE",
        heroImage: "/images/001_2004_Evarts_St_NE_162905_171080.jpg",
        gallery: [
          "/images/024_2004_Evarts_St_NE_162905_171080.jpg",
          "/images/034_2004_Evarts_St_NE_162905_171080.jpg",
        ],
      },
      {
        slug: "2715-tennyson-street",
        name: "2715 Tennyson Street",
        heroImage: "/images/001_2715_TENNYSON_ST_NW_208044_288757.jpg",
        gallery: [
          "/images/008_2715_TENNYSON_ST_NW_208044_288757.jpg",
          "/images/030_2715_TENNYSON_ST_NW_208044_288757.jpg",
          "/images/033_2715_TENNYSON_ST_NW_208044_288757-1.jpg",
          "/images/069_2715_TENNYSON_ST_NW_208044_288757-1.jpg",
          "/images/074_2715_TENNYSON_ST_NW_208044_288757-1.jpg",
        ],
      },
      placeholderProject("3819 Albemarle Street", "3819-albemarle-street"),
    ],
  },
  {
    slug: "commercial-projects",
    label: "Commercial Projects",
    cta: "View Commercial",
    projects: [
      {
        slug: "jesus-house-dc-jhdc",
        name: "Jesus House DC (JHDC)",
        heroImage: "/images/JesusHouse-Exterior.jpg",
        gallery: ["/images/JesusHouse-Lobby-01_221104.jpg"],
      },
      placeholderProject("Floridian", "floridian"),
      placeholderProject("New Wine Assembly", "new-wine-assembly"),
      placeholderProject("Winners Chapel", "winners-chapel"),
    ],
  },
  {
    slug: "past-properties",
    label: "Past Properties",
    cta: "View Past Projects",
    projects: [
      placeholderProject("330 Rhode Island", "330-rhode-island"),
      placeholderProject("9105 Tuckerman Street", "9105-tuckerman-street"),
      {
        slug: "13265-sorghum-court",
        name: "13265 Sorghum Court",
        heroImage: "/images/Kady-13465-Sorghum-Court.jpeg",
        gallery: [],
      },
      placeholderProject("R Street", "r-street"),
    ],
  },
];

export function getProjectCategory(slug: string) {
  return projectCategories.find((category) => category.slug === slug);
}
