import React from "react";
import { GitHubCalendar } from "react-github-calendar";

// changed: define BOTH themes so whichever mode the lib uses, your palette applies
const THEME = {
  light: ["#2b415d", "#386fa4", "#59a5d8", "#84d2f6", "#cff2f9"],
  dark: ["#2b415d", "#386fa4", "#59a5d8", "#84d2f6", "#d9f5fa"],
};

// added: bump this string anytime you want to force a visible change / remount
const THEME_VERSION = "v2-blue-palette"; // added

const USERNAME = "RjGutierrezz";
const MAX_COMMITS = 2;

// added: look back a bit so "today" commits are included even with timezone differences
const COMMITS_LOOKBACK_DAYS = 14;

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

    const isoDateDaysAgo = (days) => {
      const d = new Date();
      d.setDate(d.getDate() - days);
      return d.toISOString().slice(0, 10); // YYYY-MM-DD
    };

    const load = async () => {
      try {
        setLoadingCommits(true);
        setCommitsError("");

        const since = isoDateDaysAgo(COMMITS_LOOKBACK_DAYS);

        // Use GitHub Search Commits API (more reliable than events)
        const res = await fetch(
          `https://api.github.com/search/commits?q=author:${USERNAME}+committer-date:>=${since}&sort=committer-date&order=desc&per_page=${MAX_COMMITS}`,
          {
            headers: {
              // changed: commit search requires this preview Accept; don't duplicate the key
              Accept: "application/vnd.github.cloak-preview+json",
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`GitHub API error (${res.status})`);
        }

        const data = await res.json();
        const items = Array.isArray(data?.items) ? data.items : [];

        const recent = items.map((item) => {
          const repoFullName = item?.repository?.full_name || "";
          const htmlUrl = item?.html_url || "";
          const sha = (item?.sha || "").slice(0, 7);
          const message = item?.commit?.message || "";

          return {
            repoName: repoFullName,
            createdAt: item?.commit?.committer?.date || "",
            message,
            url: htmlUrl,
            sha,
          };
        });

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
                className="md:min-w-[720px] w-full"
                style={{
                  maxWidth: WEEKS_11_MONTHS * (CAL_BLOCK_SIZE + CAL_BLOCK_MARGIN),
                }}
              >
                <GitHubCalendar
                  key={`${USERNAME}-${THEME_VERSION}`} 
                  username={USERNAME}
                  blockSize={CAL_BLOCK_SIZE}
                  blockMargin={CAL_BLOCK_MARGIN}
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