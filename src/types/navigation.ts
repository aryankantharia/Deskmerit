export type NavLink = {
  title: string;
  href: string;
  flag?: string;
  tag?: string;
  description?: string;
  image?: string;
  bullets?: string[];
};

export type NavSubMenu = {
  name: string;
  href?: string;
  tag?: string;
  description?: string;
  image?: string;
  bullets?: string[];
  links: NavLink[];
};

export type NavFeature = {
  title: string;
  text: string;
  image: string;
  primary: NavLink;
  secondary: NavLink;
};

export type NavMenu = {
  type: "menu";
  layout: "mega" | "dropdown";
  key: string;
  name: string;
  href?: string;
  heading: string;
  description: string;
  subMenus: NavSubMenu[];
  feature?: NavFeature;
};

export type NavItem = {type: "link";key: string;title: string;href: string;} | NavMenu;

export type FooterColumn = {
  title: string;
  links: NavLink[];
};