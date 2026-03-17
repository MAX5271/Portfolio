import { GitHubCalendar } from "react-github-calendar";

const PINGS = [
  { name: "GITHUB", url: "https://github.com/MAX5271", icon: "i-simple-icons-github" },
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/nitigya-chandel-180bb6286/", icon: "i-simple-icons-linkedin" },
  { name: "CODECHEF", url: "https://www.codechef.com/users/nitigyachandel", icon: "i-simple-icons-codechef" },
  { name: "CODEFORCES", url: "https://codeforces.com/profile/MAX5271", icon: "i-simple-icons-codeforces" },
  { name: "EMAIL", url: "mailto:nitigya.2023ug4010@iiitranchi.ac.in", icon: "i-simple-icons-gmail" },
];

export default function Telemetry() {
  return (
    <section id="telemetry" className="py-24 px-4 md:px-12 lg:px-24 border-t border-subtle bg-base">
      
      <div className="w-full mb-16 flex justify-between items-end border-b border-subtle pb-6">
        <h2 className="text-5xl font-display font-black text-primary tracking-tighter">
          System_Telemetry.
        </h2>
        <p className="font-mono text-secondary text-sm hidden md:block uppercase tracking-widest">
          // LIVE_DATA_FEED
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h3 className="text-secondary font-mono uppercase tracking-widest text-sm border-b border-subtle pb-3">
            ~/github/activity_log
          </h3>
          
          <div className="p-6 border border-subtle bg-neutral-950 overflow-x-auto">
            <GitHubCalendar 
              username="MAX5271" 
              colorScheme="dark"
              style={{ fontFamily: 'monospace' }}
            />
          </div>

          <a
            href="/NitigyaChandelResume.pdf"
            download="Nitigya_Chandel_Resume.pdf"
            className="w-full block text-center px-6 py-4 mt-2 border border-white text-white font-mono text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
          >
            [ DOWNLOAD_RESUME.pdf ]
          </a>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <h3 className="text-secondary font-mono uppercase tracking-widest text-sm border-b border-subtle pb-3">
            ~/network/pings
          </h3>
          
          <div className="flex flex-col gap-3">
            {PINGS.map((ping) => (
              <a
                key={ping.name}
                href={ping.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 border border-subtle bg-neutral-900 hover:bg-white transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className={`${ping.icon} w-5 h-5 text-neutral-400 group-hover:text-black transition-colors`} />
                  <span className="font-mono text-sm font-bold text-neutral-300 group-hover:text-black transition-colors">
                    {ping.name}
                  </span>
                </div>
                <span className="font-mono text-neutral-500 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
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