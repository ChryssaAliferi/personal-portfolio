// Navigation and social links shared by the header and footer.

export const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "CV", href: "/cv" },
] as const;

export const socialLinks = [
  { platform: "GitHub", href: "https://github.com/ChryssaAliferi" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/chryssaaliferi/" },
  { platform: "X", href: "https://x.com/ChryssaAl" },
  { platform: "Email", href: "mailto:c.aliferi@gmail.com" },
] as const;

export type SocialPlatform = (typeof socialLinks)[number]["platform"];
