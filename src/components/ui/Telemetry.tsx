import { GitHubCalendar } from "react-github-calendar";


// Socials array
const PINGS = [
  {
    name: "GITHUB",
    url: "https://github.com/MAX5271",
    icon: "i-simple-icons-github",
    themeVar: "var(--theme-pop-yellow)",
  },
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/nitigya-chandel-180bb6286/",
    icon: "i-simple-icons-linkedin",
    themeVar: "var(--theme-pop-blue)",
  },
  {
    name: "CODECHEF",
    url: "https://www.codechef.com/users/nitigyachandel",
    icon: "i-simple-icons-codechef",
    themeVar: "var(--theme-pop-orange)",
  },
  {
    name: "CODEFORCES",
    url: "https://codeforces.com/profile/MAX5271",
    icon: "i-simple-icons-codeforces",
    themeVar: "var(--theme-pop-purple)",
  },
  {
    name: "EMAIL",
    url: "mailto:nitigya.2023ug4010@iiitranchi.ac.in",
    icon: "i-simple-icons-gmail",
    themeVar: "var(--theme-pop-mint)",
  },
];

export default function Telemetry() {
  return (
    <section
      id="telemetry"
      className="py-24 px-4 md:px-12 lg:px-24 border-t-4 border-strong max-w-[100rem] mx-auto"
    >

        {/* Title */}
      <div className="w-full mb-16 flex justify-between items-end border-b-4 border-strong pb-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-primary tracking-tighter uppercase">
          System_Telemetry.
        </h2>
        <p className="font-mono text-secondary text-sm hidden md:block uppercase tracking-widest font-bold">
          // LIVE_DATA_FEED
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* Github Calendar section */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h3 className="text-secondary font-mono uppercase tracking-widest text-sm border-b-2 border-strong pb-3 font-bold">
            ~/github/activity_log
          </h3>


          <div className="p-6 border-2 border-strong bg-[#0a0a0a] overflow-x-auto relative rounded-structural-curve">
            {/* Three buttons giving it a mac like theme */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Github Calendar */}
            <div className="pt-8 text-white [&_text]:fill-white [&_span]:text-white">
              <GitHubCalendar
                username="MAX5271"
                colorScheme="dark"
                style={{
                  fontFamily: "var(--custom-font-code)",
                }}
              />
            </div>
          </div>
          
          {/* Resume download section */}
          <a
            href="/NitigyaChandelResume.pdf"
            download="Nitigya_Chandel_Resume.pdf"
            className="w-full block text-center px-6 py-4 mt-2 border-2 border-btn-work-border bg-btn-work-bg text-btn-work-text font-mono text-sm font-bold tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 active:translate-y-1 active:translate-x-1 hover:[filter:var(--matrix-glow)] rounded-micro-curve"
          >
            [ DOWNLOAD_RESUME.pdf ]
          </a>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <h3 className="text-secondary font-mono uppercase tracking-widest text-sm border-b-2 border-strong pb-3 font-bold">
            ~/network/pings
          </h3>
            
            {/* Socials section */}
          <div className="flex flex-col gap-3">
            {PINGS.map((ping) => (
              <a
                key={ping.name}
                href={ping.url}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  { "--section-color": ping.themeVar } as React.CSSProperties
                }
                className="group flex items-center justify-between p-4 border-2 border-strong bg-surface transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:[filter:drop-shadow(6px_6px_0_var(--section-color))] rounded-micro-curve"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`${ping.icon} w-5 h-5 text-secondary group-hover:text-primary transition-colors`}
                  />
                  <span className="font-mono text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                    {ping.name}
                  </span>
                </div>
                <span className="font-mono text-strong group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 font-bold">
                  -&gt;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}