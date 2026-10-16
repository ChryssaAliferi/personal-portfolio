// "Selected work" cards on the home page.

export type Project = {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
};

export const projects: Project[] = [
  {
    tag: "Kotlin",
    tagColor: "bg-[#A97BFF15] text-[#A97BFF]",
    title: "rudder-sdk-kotlin",
    description:
      "Kotlin Android SDK and Kotlin JVM for RudderStack — the Customer Data Platform for Developers. Contributed to core SDK features.",
    stars: 0,
    forks: 0,
    url: "https://github.com/ChryssaAliferi/rudder-sdk-kotlin",
  },
  {
    tag: "Android",
    tagColor: "bg-[#A97BFF15] text-[#A97BFF]",
    title: "AndroidxBiometric",
    description:
      "Example demonstrating the AndroidX Biometric API with a utility class for building biometric prompts on Android.",
    stars: 17,
    forks: 1,
    url: "https://github.com/ChryssaAliferi/AndroidxBiometric",
  },
  {
    tag: "Kotlin",
    tagColor: "bg-[#A97BFF15] text-[#A97BFF]",
    title: "StateStore-Kotlin",
    description:
      "State Management library for Kotlin projects. Simple, lightweight architecture for managing UI state in Android and JVM applications.",
    stars: 0,
    forks: 0,
    url: "https://github.com/ChryssaAliferi/StateStore-Kotlin",
  },
];
