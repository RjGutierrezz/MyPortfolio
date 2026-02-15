import React from "react";
import { GitHubCalendar } from "react-github-calendar";

// changed: define BOTH themes so whichever mode the lib uses, your palette applies
const THEME = {
  light: ["#caf0f8", "#0096c7", "#0077b6", "#023e8a", "#03045e"],
  dark: ["#e0fbfc", "#90e0ef", "#00b4d8", "#0077b6", "#023e8a"],
};

// added: bump this string anytime you want to force a visible change / remount
const THEME_VERSION = "v2-blue-palette"; // added

const USERNAME = "RjGutierrezz";
const MAX_EVENTS = 40;
const MAX_COMMITS = 8;

// added: show only ~11 months worth of weeks by constraining visible width
const CAL_BLOCK_SIZE = 14;
const CAL_BLOCK_MARGIN = 4;
const WEEKS_11_MONTHS = 48; // ~ (365 * 11/12) / 7

const GithubContributions = () => {
  const [commits, setCommits] = React.useState([]);
  const [loadingCommits, setLoadingCommits] = React.useState(true);
  const [commitsError, setCommitsError] = React.useState("");

  React.useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoadingCommits(true);
        setCommitsError("");

        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/events/public?per_page=${MAX_EVENTS}`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`GitHub API error (${res.status})`);
        }

        const events = await res.json();

        const pushEvents = Array.isArray(events)
          ? events.filter((e) => e?.type === "PushEvent")
          : [];

        const flattened = pushEvents.flatMap((e) => {
          const repoName = e?.repo?.name || "";
          const commits = e?.payload?.commits || [];
          const createdAt = e?.created_at || "";

          return commits.map((c) => ({
            repoName,
            createdAt,
            message: c?.message || "",
            url: c?.url ? c.url.replace("api.", "").replace("/repos/", "/").replace("/commits/", "/commit/") : "",
            sha: (c?.sha || "").slice(0, 7),
          }));
        });

        const recent = flattened
          .filter((c) => c.message && c.url)
          .slice(0, MAX_COMMITS);

        if (!cancelled) setCommits(recent);
      } catch (err) {
        if (!cancelled) setCommitsError(err?.message || "Failed to load commits");
      } finally {
        if (!cancelled) setLoadingCommits(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section>
      <div className="w-full h-full xl:px-20 md:px-20 px-5">
        <div className="card-border rounded-xl p-6 md:p-10 border border-[#3d5a80] bg-[#0D1B2A]/40">
          <h2 className="text-xl md:text-3xl font-bold text-white-50">
            GitHub Contributions
          </h2>
          <p className="text-white-50/70 mt-2">
            Recent activity from my GitHub profile.
          </p>

          {/* changed: calendar + recent commits layout */}
          <div className="mt-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8 overflow-x-auto no-scrollbar">
              {/* changed: constrain the visible width to ~11 months */}
              <div
                className="min-w-[720px]"
                style={{
                  maxWidth: WEEKS_11_MONTHS * (CAL_BLOCK_SIZE + CAL_BLOCK_MARGIN),
                }}
              >
                <GitHubCalendar
                  key={`${USERNAME}-${THEME_VERSION}`} // added: forces remount so new colors show
                  username={USERNAME}
                  blockSize={CAL_BLOCK_SIZE} // changed: use constants
                  blockMargin={CAL_BLOCK_MARGIN} // changed: use constants
                  fontSize={14}
                  theme={THEME}
                />
              </div>
            </div>

            <aside className="xl:col-span-4 rounded-lg border border-[#3d5a80] bg-[#0D1B2A]/30 p-4 md:p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-white-50 font-semibold text-lg">
                  Recent commits
                </h3>
                <a
                  className="text-white-50/80 text-sm underline"
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View profile
                </a>
              </div>

              {loadingCommits ? (
                <p className="text-white-50/70 mt-3 text-sm">Loading…</p>
              ) : commitsError ? (
                <p className="text-white-50/70 mt-3 text-sm">
                  {commitsError}
                </p>
              ) : commits.length === 0 ? (
                <p className="text-white-50/70 mt-3 text-sm">
                  No recent commits found.
                </p>
              ) : (
                <ul className="mt-4 flex flex-col gap-3">
                  {commits.map((c, idx) => (
                    <li key={`${c.url}-${idx}`} className="text-sm">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-50 hover:text-[#e0fbfc] transition-colors"
                        title={c.message}
                      >
                        <div className="font-semibold">
                          {c.repoName.split("/").pop()}{" "}
                          <span className="text-white-50/60 font-normal">
                            ({c.sha})
                          </span>
                        </div>
                        <div className="text-white-50/70 line-clamp-2">
                          {c.message}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;