// "Thoughts" cards on the home page, newest first.

export type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    date: "Oct 13, 2026",
    title: "Send ChatGPT Ad Conversions to OpenAI Ads with RudderStack",
    excerpt:
      "How RudderStack's OpenAI Ads destination sends conversions from your existing events via the Conversions API, the Pixel, or both, with deduplication and PII hashing built in.",
    tags: ["OpenAI Ads", "Integrations"],
    url: "https://www.rudderstack.com/blog/send-chatgpt-ad-conversions-to-openai-ads-with-rudderstack/",
  },
  {
    date: "Feb 22, 2021",
    title: "Leveraging the Power of Android Design Language",
    excerpt:
      "How Plum translated its brand personality into a cohesive Android design system using Material Design themes and reusable components.",
    tags: ["Android", "Design Systems"],
    url: "https://medium.com/plum-fintech/leveraging-the-power-of-android-design-language-3e931bc4c58",
  },
  {
    date: "Oct 14, 2016",
    title: "Android Architecture with Multi-Screen MVP (Part 2)",
    excerpt:
      "Practical implementation of MVP pattern for complex Android apps using Screens and Flows as conceptual units.",
    tags: ["Architecture", "MVP"],
    url: "https://medium.com/taxibeat/android-architecture-with-multi-screen-mvp-part-2-f4b008bda020",
  },
  {
    date: "Sep 21, 2016",
    title: "Android Architecture with Multi-Screen MVP (Part 1)",
    excerpt:
      "Taxibeat's shift from traditional Android architecture toward Model-View-Presenter pattern with cleaner separation of concerns.",
    tags: ["Architecture", "Android"],
    url: "https://medium.com/taxibeat/android-architecture-with-multi-screen-mvp-46d3ccafa7b9",
  },
];
