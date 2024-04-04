// vite.config.ts
import { defineConfig } from "file:///D:/ReactJs%20Work/dhavaltank/node_modules/vite/dist/node/index.js";
import react from "file:///D:/ReactJs%20Work/dhavaltank/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/ReactJs%20Work/dhavaltank/node_modules/vite-plugin-pwa/dist/index.js";

// gitprofile.config.ts
var CONFIG = {
  github: {
    username: "DhavalTank01"
    // Your GitHub org/user name. (This is the only required config)
  },
  base: "/dhavaltank/",
  projects: {
    github: {
      display: true,
      // Display GitHub projects?
      header: "Github Projects",
      mode: "automatic",
      // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: "stars",
        // Sort projects by 'stars' or 'updated'
        limit: 8,
        // How many projects to display.
        exclude: {
          forks: false,
          // Forked projects will not be displayed if set to true.
          projects: []
        }
      },
      manual: {
        // Properties for manually specifying projects
        projects: []
      }
    },
    external: {
      header: "My Projects",
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "Project Name",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.",
          imageUrl: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
          link: "https://example.com"
        },
        {
          title: "Project Name",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.",
          imageUrl: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
          link: "https://example.com"
        }
      ]
    }
  },
  seo: {
    title: "Portfolio of Dhaval Tank",
    description: "",
    imageURL: ""
  },
  social: {
    linkedin: "ariful-alam",
    // twitter: 'arif_szn',
    // mastodon: '',
    // researchGate: '',
    facebook: "",
    instagram: "",
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    // medium: '',
    // dev: '',
    // stackoverflow: '', // example: '1/jeff-atwood'
    skype: "",
    telegram: "",
    website: "https://dhavaltank01.github.io/dhavaltank/",
    phone: "+919904924102",
    email: "arifulalamszn@gmail.com"
  },
  resume: {
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "PHP",
    "Laravel",
    "JavaScript",
    "React.js",
    "Node.js",
    "Nest.js",
    "MySQL",
    "PostgreSQL",
    "Git",
    "Docker",
    "PHPUnit",
    "CSS",
    "Antd",
    "Tailwind"
  ],
  experiences: [
    {
      company: "Company Name",
      position: "Position",
      from: "September 2021",
      to: "Present",
      companyLink: "https://example.com"
    },
    {
      company: "Company Name",
      position: "Position",
      from: "July 2019",
      to: "August 2021",
      companyLink: "https://example.com"
    }
  ],
  certifications: [
    {
      name: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet",
      year: "March 2022",
      link: "https://example.com"
    }
  ],
  educations: [
    {
      institution: "Institution Name",
      degree: "Degree",
      from: "2015",
      to: "2019"
    },
    {
      institution: "Institution Name",
      degree: "Degree",
      from: "2012",
      to: "2014"
    }
  ],
  publications: [
    {
      title: "Publication Title",
      conferenceName: "",
      journalName: "Journal Name",
      authors: "John Doe, Jane Smith",
      link: "https://example.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Publication Title",
      conferenceName: "Conference Name",
      journalName: "",
      authors: "John Doe, Jane Smith",
      link: "https://example.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: ""
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "",
    snippetVersion: 6
  },
  themeConfig: {
    defaultTheme: "lofi",
    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,
    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,
    // Display the ring in Profile picture
    displayAvatarRing: true,
    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      "procyon"
    ],
    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem"
    }
  },
  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/DhavalTank01/dhavaltank"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and \u2764\uFE0F`,
  enablePWA: true
};
var gitprofile_config_default = CONFIG;

// vite.config.ts
import { createHtmlPlugin } from "file:///D:/ReactJs%20Work/dhavaltank/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = defineConfig({
  base: gitprofile_config_default.base || "/",
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: gitprofile_config_default.seo.title,
          metaDescription: gitprofile_config_default.seo.description,
          metaImageURL: gitprofile_config_default.seo.imageURL
        }
      }
    }),
    ...gitprofile_config_default.enablePWA ? [
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          navigateFallback: void 0
        },
        includeAssets: ["logo.png"],
        manifest: {
          name: "Portfolio",
          short_name: "Portfolio",
          description: "Personal Portfolio",
          icons: [
            {
              src: "logo.png",
              sizes: "64x64 32x32 24x24 16x16 192x192 512x512",
              type: "image/png"
            }
          ]
        }
      })
    ] : []
  ],
  define: {
    CONFIG: gitprofile_config_default
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiZ2l0cHJvZmlsZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJkOlxcXFxSZWFjdEpzIFdvcmtcXFxcZ2l0cHJvZmlsZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiZDpcXFxcUmVhY3RKcyBXb3JrXFxcXGdpdHByb2ZpbGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2Q6L1JlYWN0SnMlMjBXb3JrL2dpdHByb2ZpbGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCBDT05GSUcgZnJvbSAnLi9naXRwcm9maWxlLmNvbmZpZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogQ09ORklHLmJhc2UgfHwgJy8nLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHtcclxuICAgICAgaW5qZWN0OiB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbWV0YVRpdGxlOiBDT05GSUcuc2VvLnRpdGxlLFxyXG4gICAgICAgICAgbWV0YURlc2NyaXB0aW9uOiBDT05GSUcuc2VvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgbWV0YUltYWdlVVJMOiBDT05GSUcuc2VvLmltYWdlVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIC4uLihDT05GSUcuZW5hYmxlUFdBXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgVml0ZVBXQSh7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICAgICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVGYWxsYmFjazogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlQXNzZXRzOiBbJ2xvZ28ucG5nJ10sXHJcbiAgICAgICAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ1BvcnRmb2xpbycsXHJcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZTogJ1BvcnRmb2xpbycsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZXJzb25hbCBQb3J0Zm9saW8nLFxyXG4gICAgICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogJ2xvZ28ucG5nJyxcclxuICAgICAgICAgICAgICAgICAgc2l6ZXM6ICc2NHg2NCAzMngzMiAyNHgyNCAxNngxNiAxOTJ4MTkyIDUxMng1MTInLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF1cclxuICAgICAgOiBbXSksXHJcbiAgXSxcclxuICBkZWZpbmU6IHtcclxuICAgIENPTkZJRzogQ09ORklHLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcImQ6XFxcXFJlYWN0SnMgV29ya1xcXFxnaXRwcm9maWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJkOlxcXFxSZWFjdEpzIFdvcmtcXFxcZ2l0cHJvZmlsZVxcXFxnaXRwcm9maWxlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vZDovUmVhY3RKcyUyMFdvcmsvZ2l0cHJvZmlsZS9naXRwcm9maWxlLmNvbmZpZy50c1wiOy8vIGdpdHByb2ZpbGUuY29uZmlnLnRzXHJcblxyXG5jb25zdCBDT05GSUcgPSB7XHJcbiAgZ2l0aHViOiB7XHJcbiAgICB1c2VybmFtZTogJ0RoYXZhbFRhbmswMScsIC8vIFlvdXIgR2l0SHViIG9yZy91c2VyIG5hbWUuIChUaGlzIGlzIHRoZSBvbmx5IHJlcXVpcmVkIGNvbmZpZylcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIElmIHlvdSBhcmUgZGVwbG95aW5nIHRvIGh0dHBzOi8vPFVTRVJOQU1FPi5naXRodWIuaW8vLCBmb3IgZXhhbXBsZSB5b3VyIHJlcG9zaXRvcnkgaXMgYXQgaHR0cHM6Ly9naXRodWIuY29tL0RoYXZhbFRhbmswMS9hcmlmc3puLmdpdGh1Yi5pbywgc2V0IGJhc2UgdG8gJy8nLlxyXG4gICAqIElmIHlvdSBhcmUgZGVwbG95aW5nIHRvIGh0dHBzOi8vPFVTRVJOQU1FPi5naXRodWIuaW8vPFJFUE9fTkFNRT4vLFxyXG4gICAqIGZvciBleGFtcGxlIHlvdXIgcmVwb3NpdG9yeSBpcyBhdCBodHRwczovL2dpdGh1Yi5jb20vRGhhdmFsVGFuazAxL3BvcnRmb2xpbywgdGhlbiBzZXQgYmFzZSB0byAnL3BvcnRmb2xpby8nLlxyXG4gICAqL1xyXG4gIGJhc2U6ICcvZ2l0cHJvZmlsZS8nLFxyXG4gIHByb2plY3RzOiB7XHJcbiAgICBnaXRodWI6IHtcclxuICAgICAgZGlzcGxheTogdHJ1ZSwgLy8gRGlzcGxheSBHaXRIdWIgcHJvamVjdHM/XHJcbiAgICAgIGhlYWRlcjogJ0dpdGh1YiBQcm9qZWN0cycsXHJcbiAgICAgIG1vZGU6ICdhdXRvbWF0aWMnLCAvLyBNb2RlIGNhbiBiZTogJ2F1dG9tYXRpYycgb3IgJ21hbnVhbCdcclxuICAgICAgYXV0b21hdGljOiB7XHJcbiAgICAgICAgc29ydEJ5OiAnc3RhcnMnLCAvLyBTb3J0IHByb2plY3RzIGJ5ICdzdGFycycgb3IgJ3VwZGF0ZWQnXHJcbiAgICAgICAgbGltaXQ6IDgsIC8vIEhvdyBtYW55IHByb2plY3RzIHRvIGRpc3BsYXkuXHJcbiAgICAgICAgZXhjbHVkZToge1xyXG4gICAgICAgICAgZm9ya3M6IGZhbHNlLCAvLyBGb3JrZWQgcHJvamVjdHMgd2lsbCBub3QgYmUgZGlzcGxheWVkIGlmIHNldCB0byB0cnVlLlxyXG4gICAgICAgICAgcHJvamVjdHM6IFtdLCAvLyBUaGVzZSBwcm9qZWN0cyB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQuIGV4YW1wbGU6IFsnYXJpZnN6bi9teS1wcm9qZWN0MScsICdhcmlmc3puL215LXByb2plY3QyJ11cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBtYW51YWw6IHtcclxuICAgICAgICAvLyBQcm9wZXJ0aWVzIGZvciBtYW51YWxseSBzcGVjaWZ5aW5nIHByb2plY3RzXHJcbiAgICAgICAgcHJvamVjdHM6IFsnYXJpZnN6bi9naXRwcm9maWxlJywgJ2FyaWZzem4vcGFuZG9yYSddLCAvLyBMaXN0IG9mIHJlcG9zaXRvcnkgbmFtZXMgdG8gZGlzcGxheS4gZXhhbXBsZTogWydhcmlmc3puL215LXByb2plY3QxJywgJ2FyaWZzem4vbXktcHJvamVjdDInXVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dGVybmFsOiB7XHJcbiAgICAgIGhlYWRlcjogJ015IFByb2plY3RzJyxcclxuICAgICAgLy8gVG8gaGlkZSB0aGUgYEV4dGVybmFsIFByb2plY3RzYCBzZWN0aW9uLCBrZWVwIGl0IGVtcHR5LlxyXG4gICAgICBwcm9qZWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnUHJvamVjdCBOYW1lJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGV1aXNtb2QsIG51bmMgdXQuJyxcclxuICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvaWxsdXN0cmF0aW9uLWdhbGxlcnktaWNvbl81Mzg3Ni0yNzAwMi5qcGcnLFxyXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdQcm9qZWN0IE5hbWUnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgZXVpc21vZCwgbnVuYyB1dC4nLFxyXG4gICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICdodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9pbGx1c3RyYXRpb24tZ2FsbGVyeS1pY29uXzUzODc2LTI3MDAyLmpwZycsXHJcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZW86IHtcclxuICAgIHRpdGxlOiAnUG9ydGZvbGlvIG9mIEFyaWZ1bCBBbGFtJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIGltYWdlVVJMOiAnJyxcclxuICB9LFxyXG4gIHNvY2lhbDoge1xyXG4gICAgbGlua2VkaW46ICdhcmlmdWwtYWxhbScsXHJcbiAgICAvLyB0d2l0dGVyOiAnYXJpZl9zem4nLFxyXG4gICAgLy8gbWFzdG9kb246ICdhcmlmc3puQG1hc3RvZG9uLnNvY2lhbCcsXHJcbiAgICAvLyByZXNlYXJjaEdhdGU6ICcnLFxyXG4gICAgZmFjZWJvb2s6ICcnLFxyXG4gICAgaW5zdGFncmFtOiAnJyxcclxuICAgIC8vIHlvdXR1YmU6ICcnLCAvLyBleGFtcGxlOiAncGV3ZGllcGllJ1xyXG4gICAgLy8gZHJpYmJibGU6ICcnLFxyXG4gICAgLy8gYmVoYW5jZTogJycsXHJcbiAgICAvLyBtZWRpdW06ICdhcmlmc3puJyxcclxuICAgIC8vIGRldjogJ2FyaWZzem4nLFxyXG4gICAgLy8gc3RhY2tvdmVyZmxvdzogJycsIC8vIGV4YW1wbGU6ICcxL2plZmYtYXR3b29kJ1xyXG4gICAgc2t5cGU6ICcnLFxyXG4gICAgdGVsZWdyYW06ICcnLFxyXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vZGhhdmFsdGFuazAxLmdpdGh1Yi5pby9kaGF2YWx0YW5rLycsXHJcbiAgICBwaG9uZTogJys5MTk5MDQ5MjQxMDInLFxyXG4gICAgZW1haWw6ICdhcmlmdWxhbGFtc3puQGdtYWlsLmNvbScsXHJcbiAgfSxcclxuICByZXN1bWU6IHtcclxuICAgIGZpbGVVcmw6XHJcbiAgICAgICdodHRwczovL3d3dy53My5vcmcvV0FJL0VSL3Rlc3RzL3hodG1sL3Rlc3RmaWxlcy9yZXNvdXJjZXMvcGRmL2R1bW15LnBkZicsIC8vIEVtcHR5IGZpbGVVcmwgd2lsbCBoaWRlIHRoZSBgRG93bmxvYWQgUmVzdW1lYCBidXR0b24uXHJcbiAgfSxcclxuICBza2lsbHM6IFtcclxuICAgICdQSFAnLFxyXG4gICAgJ0xhcmF2ZWwnLFxyXG4gICAgJ0phdmFTY3JpcHQnLFxyXG4gICAgJ1JlYWN0LmpzJyxcclxuICAgICdOb2RlLmpzJyxcclxuICAgICdOZXN0LmpzJyxcclxuICAgICdNeVNRTCcsXHJcbiAgICAnUG9zdGdyZVNRTCcsXHJcbiAgICAnR2l0JyxcclxuICAgICdEb2NrZXInLFxyXG4gICAgJ1BIUFVuaXQnLFxyXG4gICAgJ0NTUycsXHJcbiAgICAnQW50ZCcsXHJcbiAgICAnVGFpbHdpbmQnLFxyXG4gIF0sXHJcbiAgZXhwZXJpZW5jZXM6IFtcclxuICAgIHtcclxuICAgICAgY29tcGFueTogJ0NvbXBhbnkgTmFtZScsXHJcbiAgICAgIHBvc2l0aW9uOiAnUG9zaXRpb24nLFxyXG4gICAgICBmcm9tOiAnU2VwdGVtYmVyIDIwMjEnLFxyXG4gICAgICB0bzogJ1ByZXNlbnQnLFxyXG4gICAgICBjb21wYW55TGluazogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29tcGFueTogJ0NvbXBhbnkgTmFtZScsXHJcbiAgICAgIHBvc2l0aW9uOiAnUG9zaXRpb24nLFxyXG4gICAgICBmcm9tOiAnSnVseSAyMDE5JyxcclxuICAgICAgdG86ICdBdWd1c3QgMjAyMScsXHJcbiAgICAgIGNvbXBhbnlMaW5rOiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0xvcmVtIGlwc3VtJyxcclxuICAgICAgYm9keTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcclxuICAgICAgeWVhcjogJ01hcmNoIDIwMjInLFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgZWR1Y2F0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBpbnN0aXR1dGlvbjogJ0luc3RpdHV0aW9uIE5hbWUnLFxyXG4gICAgICBkZWdyZWU6ICdEZWdyZWUnLFxyXG4gICAgICBmcm9tOiAnMjAxNScsXHJcbiAgICAgIHRvOiAnMjAxOScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbnN0aXR1dGlvbjogJ0luc3RpdHV0aW9uIE5hbWUnLFxyXG4gICAgICBkZWdyZWU6ICdEZWdyZWUnLFxyXG4gICAgICBmcm9tOiAnMjAxMicsXHJcbiAgICAgIHRvOiAnMjAxNCcsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcHVibGljYXRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUHVibGljYXRpb24gVGl0bGUnLFxyXG4gICAgICBjb25mZXJlbmNlTmFtZTogJycsXHJcbiAgICAgIGpvdXJuYWxOYW1lOiAnSm91cm5hbCBOYW1lJyxcclxuICAgICAgYXV0aG9yczogJ0pvaG4gRG9lLCBKYW5lIFNtaXRoJyxcclxuICAgICAgbGluazogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1B1YmxpY2F0aW9uIFRpdGxlJyxcclxuICAgICAgY29uZmVyZW5jZU5hbWU6ICdDb25mZXJlbmNlIE5hbWUnLFxyXG4gICAgICBqb3VybmFsTmFtZTogJycsXHJcbiAgICAgIGF1dGhvcnM6ICdKb2huIERvZSwgSmFuZSBTbWl0aCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL2V4YW1wbGUuY29tJyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIC8vIERpc3BsYXkgYXJ0aWNsZXMgZnJvbSB5b3VyIG1lZGl1bSBvciBkZXYgYWNjb3VudC4gKE9wdGlvbmFsKVxyXG4gIGJsb2c6IHtcclxuICAgIHNvdXJjZTogJ2RldicsIC8vIG1lZGl1bSB8IGRldlxyXG4gICAgdXNlcm5hbWU6ICdhcmlmc3puJywgLy8gdG8gaGlkZSBibG9nIHNlY3Rpb24sIGtlZXAgaXQgZW1wdHlcclxuICAgIGxpbWl0OiAyLCAvLyBIb3cgbWFueSBhcnRpY2xlcyB0byBkaXNwbGF5LiBNYXggaXMgMTAuXHJcbiAgfSxcclxuICBnb29nbGVBbmFseXRpY3M6IHtcclxuICAgIGlkOiAnJywgLy8gR0EzIHRyYWNraW5nIGlkL0dBNCB0YWcgaWQgVUEtWFhYWFhYWFhYLVggfCBHLVhYWFhYWFhYWFhcclxuICB9LFxyXG4gIC8vIFRyYWNrIHZpc2l0b3IgaW50ZXJhY3Rpb24gYW5kIGJlaGF2aW9yLiBodHRwczovL3d3dy5ob3RqYXIuY29tXHJcbiAgaG90amFyOiB7XHJcbiAgICBpZDogJycsXHJcbiAgICBzbmlwcGV0VmVyc2lvbjogNixcclxuICB9LFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBkZWZhdWx0VGhlbWU6ICdsb2ZpJyxcclxuXHJcbiAgICAvLyBIaWRlcyB0aGUgc3dpdGNoIGluIHRoZSBuYXZiYXJcclxuICAgIC8vIFVzZWZ1bCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IGEgc2luZ2xlIGNvbG9yIG1vZGVcclxuICAgIGRpc2FibGVTd2l0Y2g6IGZhbHNlLFxyXG5cclxuICAgIC8vIFNob3VsZCB1c2UgdGhlIHByZWZlcnMtY29sb3Itc2NoZW1lIG1lZGlhLXF1ZXJ5LFxyXG4gICAgLy8gdXNpbmcgdXNlciBzeXN0ZW0gcHJlZmVyZW5jZXMsIGluc3RlYWQgb2YgdGhlIGhhcmRjb2RlZCBkZWZhdWx0VGhlbWVcclxuICAgIHJlc3BlY3RQcmVmZXJzQ29sb3JTY2hlbWU6IGZhbHNlLFxyXG5cclxuICAgIC8vIERpc3BsYXkgdGhlIHJpbmcgaW4gUHJvZmlsZSBwaWN0dXJlXHJcbiAgICBkaXNwbGF5QXZhdGFyUmluZzogdHJ1ZSxcclxuXHJcbiAgICAvLyBBdmFpbGFibGUgdGhlbWVzLiBUbyByZW1vdmUgYW55IHRoZW1lLCBleGNsdWRlIGZyb20gaGVyZS5cclxuICAgIHRoZW1lczogW1xyXG4gICAgICAnbGlnaHQnLFxyXG4gICAgICAnZGFyaycsXHJcbiAgICAgICdjdXBjYWtlJyxcclxuICAgICAgJ2J1bWJsZWJlZScsXHJcbiAgICAgICdlbWVyYWxkJyxcclxuICAgICAgJ2NvcnBvcmF0ZScsXHJcbiAgICAgICdzeW50aHdhdmUnLFxyXG4gICAgICAncmV0cm8nLFxyXG4gICAgICAnY3liZXJwdW5rJyxcclxuICAgICAgJ3ZhbGVudGluZScsXHJcbiAgICAgICdoYWxsb3dlZW4nLFxyXG4gICAgICAnZ2FyZGVuJyxcclxuICAgICAgJ2ZvcmVzdCcsXHJcbiAgICAgICdhcXVhJyxcclxuICAgICAgJ2xvZmknLFxyXG4gICAgICAncGFzdGVsJyxcclxuICAgICAgJ2ZhbnRhc3knLFxyXG4gICAgICAnd2lyZWZyYW1lJyxcclxuICAgICAgJ2JsYWNrJyxcclxuICAgICAgJ2x1eHVyeScsXHJcbiAgICAgICdkcmFjdWxhJyxcclxuICAgICAgJ2NteWsnLFxyXG4gICAgICAnYXV0dW1uJyxcclxuICAgICAgJ2J1c2luZXNzJyxcclxuICAgICAgJ2FjaWQnLFxyXG4gICAgICAnbGVtb25hZGUnLFxyXG4gICAgICAnbmlnaHQnLFxyXG4gICAgICAnY29mZmVlJyxcclxuICAgICAgJ3dpbnRlcicsXHJcbiAgICAgICdkaW0nLFxyXG4gICAgICAnbm9yZCcsXHJcbiAgICAgICdzdW5zZXQnLFxyXG4gICAgICAncHJvY3lvbicsXHJcbiAgICBdLFxyXG5cclxuICAgIC8vIEN1c3RvbSB0aGVtZSwgYXBwbGllZCB0byBgcHJvY3lvbmAgdGhlbWVcclxuICAgIGN1c3RvbVRoZW1lOiB7XHJcbiAgICAgIHByaW1hcnk6ICcjZmMwNTViJyxcclxuICAgICAgc2Vjb25kYXJ5OiAnIzIxOWFhZicsXHJcbiAgICAgIGFjY2VudDogJyNlOGQwM2EnLFxyXG4gICAgICBuZXV0cmFsOiAnIzJBMjczMCcsXHJcbiAgICAgICdiYXNlLTEwMCc6ICcjRTNFM0VEJyxcclxuICAgICAgJy0tcm91bmRlZC1ib3gnOiAnM3JlbScsXHJcbiAgICAgICctLXJvdW5kZWQtYnRuJzogJzNyZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvLyBPcHRpb25hbCBGb290ZXIuIFN1cHBvcnRzIHBsYWluIHRleHQgb3IgSFRNTC5cclxuICBmb290ZXI6IGBNYWRlIHdpdGggPGEgXHJcbiAgICAgIGNsYXNzPVwidGV4dC1wcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EaGF2YWxUYW5rMDEvZ2l0cHJvZmlsZVwiXHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPkdpdFByb2ZpbGU8L2E+IGFuZCBcdTI3NjRcdUZFMEZgLFxyXG5cclxuICBlbmFibGVQV0E6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyxvQkFBb0I7QUFDclMsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTs7O0FDQXhCLElBQU0sU0FBUztBQUFBLEVBQ2IsUUFBUTtBQUFBLElBQ04sVUFBVTtBQUFBO0FBQUEsRUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNSLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBO0FBQUEsTUFDTixXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUE7QUFBQSxRQUNSLE9BQU87QUFBQTtBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBO0FBQUEsVUFDUCxVQUFVLENBQUM7QUFBQTtBQUFBLFFBQ2I7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxRQUVOLFVBQVUsQ0FBQyxzQkFBc0IsaUJBQWlCO0FBQUE7QUFBQSxNQUNwRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLFFBQVE7QUFBQTtBQUFBLE1BRVIsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLGFBQ0U7QUFBQSxVQUNGLFVBQ0U7QUFBQSxVQUNGLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsYUFDRTtBQUFBLFVBQ0YsVUFDRTtBQUFBLFVBQ0YsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtB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
