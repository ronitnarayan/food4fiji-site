export const siteConfig = {
  name: "Food4Fiji",
  tagline: "Working to feed and support people in Fiji",
  description:
    "Food4Fiji is a planned charity working to provide food and support to people in Fiji.",
  url: "https://food4fiji-site.vercel.app/",
  contactEmail: "narayanronifoffical@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;