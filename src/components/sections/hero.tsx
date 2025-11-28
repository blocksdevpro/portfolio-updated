import React, { useEffect, useMemo, useState } from "react";
import {
  Verified,
  MapPin,
  Globe,
  Clock,
  Mail,
  User,
  Code2,
  Terminal,
} from "lucide-react";
import { ResumeData } from "@/types/resume";


interface HeroProps {
  data: ResumeData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {

  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Memoize static computed values
//   const avatarUrl = useMemo(
//     () =>
//       `https://ui-avatars.com/api/?name=${encodeURIComponent(
//         data.name ?? ""
//       )}&background=0D8ABC&color=fff&size=128`,
//     [data.name]
    //   );
  const avatarUrl =
    "https://40ar4rk0hv.ufs.sh/f/9Pu2ZyQIW8BFkxw2CxtHqGNu7tCzy62FwhZjiv9UlmR30p15";

  // Derive current company safely
  const currentCompany = data.experience?.[0]?.company ?? "Freelance";

  return (
    <section className="animate-fade-in space-y-8 delay-100">
      {/* Top Section: Profile Header */}
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-8 sm:gap-12">
        <div className="flex-1 flex flex-col gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              {data.name}
              <Verified className="w-6 h-6 text-blue-500 fill-blue-100 dark:fill-blue-900/30" />
            </h1>
            <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
              {data.title}
            </p>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            Building scalable backend systems and secure APIs with clean code
            and attention to detail.
          </p>
        </div>

        <div className="relative shrink-0 self-start sm:self-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 shadow-lg rotate-3 transition-transform hover:rotate-0 duration-300 bg-white dark:bg-zinc-900">
            <img
              src={avatarUrl}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-900 text-[10px] font-medium px-2 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-zinc-600 dark:text-zinc-300">
              Open to work
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-sm text-zinc-600 dark:text-zinc-400">
        {/* Left Card */}
        <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-5 space-y-3 bg-white/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3 overflow-hidden">
            <Terminal className="w-4 h-4 text-zinc-400 shrink-0" />
                      
            <span className="truncate">
              {data.title} @ {currentCompany}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
            <a
              href={data.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 hover:underline underline-offset-4 transition-colors"
            >
              {data.website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-5 space-y-3 bg-white/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>{time} (Local)</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
            <a
              href={`mailto:${data.email}`}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 hover:underline underline-offset-4 transition-colors"
            >
              {data.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>{data.pronouns || "he/him"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
