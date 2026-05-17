export const THEMES = {
  obsidian: {
    id: "obsidian",
    label: "Obsidian Atelier",
    short: "Obsidian",
    colophon: "Set in Fraunces & Geist · Built with React",
  },
  brutalist: {
    id: "brutalist",
    label: "Swiss Brutalist Luxe",
    short: "Brutalist",
    colophon: "Set in Bebas Neue & IBM Plex Sans · Built with React",
  },
  kinetic: {
    id: "kinetic",
    label: "Kinetic Couture",
    short: "Kinetic",
    colophon: "Set in Syne & Outfit · Built with React",
  },
  noir: {
    id: "noir",
    label: "Editorial Noir",
    short: "Noir",
    colophon: "Set in Playfair Display & DM Sans · Built with React",
  },
};

export const VALID_THEME_IDS = Object.keys(THEMES);

export function isValidTheme(id) {
  return VALID_THEME_IDS.includes(id);
}
