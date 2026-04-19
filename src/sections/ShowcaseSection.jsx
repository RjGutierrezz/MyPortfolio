import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	AnimatePresence,
	LayoutGroup,
	motion,
	useReducedMotion,
} from "motion/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
	FiArrowLeft,
	FiCalendar,
	FiExternalLink,
	FiGithub,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Carousel from "../components/HeroModels/Carousel.jsx";
import GlareHover from "../components/HeroModels/GlareHover.jsx";

gsap.registerPlugin(ScrollTrigger);

const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
	const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
	const normalizedBase = base.endsWith("/") ? base : `${base}/`;
	return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};

const truncateText = (text, maxLength) =>
	text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

const TECH_BADGE_COLORS = [
	"#ffadad",
	"#ffd6a5",
	"#fdffb6",
	"#caffbf",
	"#9bf6ff",
	"#a0c4ff",
	"#bdb2ff",
	"#ffc6ff",
	"#ff9ed7",
];

const pickTechColor = (label) => {
	const s = String(label ?? "");
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	const idx = Math.abs(h) % TECH_BADGE_COLORS.length;
	return TECH_BADGE_COLORS[idx];
};

const DESCRIPTION_SECTION_TITLES = [
	"Overview",
	"Why I Built It",
	"What It Does",
	"My Contribution",
	"Technical Highlights",
	"Challenges and Decisions",
	"Outcome or What I Learned",
];

const featured = [
	{
		id: "studybreak-bite",
		title: "StudyBreak-Bite",
		date: "2025",
		imgPath: asset("images/appmockup.png"),
		imgAlt: "StudyBreak-Bite",
		imgBgClass: "bg-[#E0E1DD]",
		description:
			"A [[mobile|accent]] food discovery and delivery app built for university students, focused on saving time and minimizing interruptions during busy academic schedules.",
		href: "https://github.com/RjGutierrezz/StudyBreak-Bite.git",
		techStack: [
			"React Native",
			"JavaScript",
			"TypeScript",
			"Expo",
			"Expo Router",
			"Tailwind CSS",
		],
		gallery: [asset("images/appmockup.png")],
		liveHref: null,
		disabled: false,
	},
	{
		id: "aura-drip",
		title: "AuraDrip WebApp",
		date: "2026",
		imgPath: asset("images/dashboard.png"),
		imgAlt: "AuraDrip WebApp",
		imgBgClass: "bg-[#E0E1DD]",
		description: `Aura Drip is a [[full-stack|accent]] wardrobe management and outfit recommendation app that helps users organize their clothing in one place and get outfit suggestions based on what they already own. It is designed for users who want a more personalized alternative to generic fashion apps. Instead of browsing random outfit ideas, users can upload their own pieces, manage favorites, and generate recommendations from their actual wardrobe.

Why I Built It
I built Aura Drip because I wanted a project that felt more like a real product than a tutorial or classroom assignment. As a new computer science graduate, I wanted to challenge myself to build something end-to-end that involved frontend development, backend APIs, authentication, database design, deployment, and UI polish. I was also interested in creating something personal and visual, since that pushed me to think more carefully about user experience and responsiveness.

What It Does
- Lets users create an account, sign in securely, and access only their own wardrobe data.
- Allows users to upload clothing items with images and save details like category, color, style, occasion, and warmth.
- Provides search, filtering, editing, deleting, and favoriting for wardrobe items.
- Generates outfit suggestions from natural language prompts using the user's saved clothing items.
- Includes a responsive dashboard, favorites page, outfit page, and profile page for a more complete app experience.

My Contribution
I built this project myself from the ground up, including both the frontend and backend. I implemented the React frontend, designed the app flow and UI, created the Express API, modeled the database with Prisma, and connected everything to Supabase for authentication and image storage. I also handled deployment with Vercel and Render, debugged production issues around database connectivity and auth redirects, and iterated on the mobile experience after the first live version was up.

Technical Highlights
- Built a full-stack architecture with a React + TypeScript frontend and an Express + Prisma backend.
- Designed authenticated API routes that verify Supabase JWTs and scope all clothing data to the current user.
- Modeled wardrobe data in PostgreSQL with Prisma and used migrations to manage schema changes.
- Integrated Supabase Storage for image uploads and Supabase Auth for account creation and login.
- Implemented a rule-based outfit recommendation flow that parses prompt intent and scores saved items based on style, occasion, color, warmth, and favorites.

Challenges and Decisions
One of the biggest challenges was getting the deployed app working smoothly across multiple services. I had to debug issues involving Prisma migrations, environment variables, Supabase auth redirect URLs, and database connectivity from Render. I chose a split deployment setup with Vercel for the frontend and Render for the backend because it matched the architecture of the project better than forcing everything onto one platform. I also spent time refining the mobile experience, which taught me that responsive design is not just about shrinking layouts, but about rethinking spacing, hierarchy, and navigation for smaller screens.

Outcome or What I Learned
This project taught me how much goes into building and shipping a full-stack product beyond just writing features. I became more comfortable working across the entire stack, from database design and API validation to deployment and post-launch UI improvements. More than anything, Aura Drip helped me practice thinking like an engineer who owns a problem end-to-end, which is exactly the kind of mindset I want to bring into an entry-level software engineering role.`,
		href: "https://github.com/RjGutierrezz/Aura-Drip.git",
		techStack: [
			"Vite",
			"TypeScript",
			"HTML",
			"CSS",
			"Supabase",
			"React",
			"Express",
			"Prisma",
		],
		gallery: [
			asset("images/dashboard.png"),
			asset("images/wardrobe.png"),
			asset("images/login.png"),
			asset("images/favorite.png"),
			asset("images/add.png"),
			asset("images/profile.png"),
			asset("images/outfit.png"),
		],
		liveHref: "https://aura-drip.vercel.app",
		disabled: false,
	},
];

const ShowcaseSection = () => {
	const sectionRef = useRef(null);
	const studyBreakRef = useRef(null);
	const potteryRef = useRef(null);
	const reduceMotion = useReducedMotion();

	const [activeProjectId, setActiveProjectId] = useState(null);

	const activeProject = useMemo(
		() => featured.find((p) => p.id === activeProjectId) || null,
		[activeProjectId],
	);

	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === "Escape") setActiveProjectId(null);
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	useEffect(() => {
		if (!activeProjectId) return;

		requestAnimationFrame(() => {
			sectionRef.current?.scrollIntoView({
				behavior: reduceMotion ? "auto" : "smooth",
				block: "start",
			});
		});
	}, [activeProjectId, reduceMotion]);

	useGSAP(() => {
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 3 },
		);

		const cards = [studyBreakRef.current, potteryRef.current];

		cards.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
					},
				},
			);
		});
	}, []);

	const renderMarkedText = (text) => {
		const s = String(text ?? "");
		const parts = [];
		const re = /\[\[([\s\S]+?)\|accent\]\]/g;

		let last = 0;
		let match = re.exec(s);
		while (match) {
			if (match.index > last) {
				parts.push({
					type: "text",
					value: s.slice(last, match.index),
					key: `text-${last}`,
				});
			}
			parts.push({
				type: "mark",
				value: match[1],
				key: `mark-${match.index}-${match[1]}`,
			});
			last = match.index + match[0].length;
			match = re.exec(s);
		}
		if (last < s.length)
			parts.push({ type: "text", value: s.slice(last), key: `text-${last}` });

		return parts.map((part) => {
			if (part.type === "text")
				return <React.Fragment key={part.key}>{part.value}</React.Fragment>;
			return (
				<span key={part.key} className="text-[#aaffb8] font-medium">
					{part.value}
				</span>
			);
		});
	};

	const stripMarks = (text) =>
		String(text ?? "").replace(/\[\[([\s\S]+?)\|accent\]\]/g, "$1");

	const parseDescriptionSections = (text) => {
		const normalized = String(text ?? "").replace(/\r\n/g, "\n").trim();
		if (!normalized) return [];

		const lines = normalized.split("\n");
		const sections = [];
		let currentSection = null;

		lines.forEach((line) => {
			const trimmed = line.trim();

			if (DESCRIPTION_SECTION_TITLES.includes(trimmed)) {
				if (currentSection) sections.push(currentSection);
				currentSection = { title: trimmed, lines: [] };
				return;
			}

			if (!currentSection) currentSection = { title: "Overview", lines: [] };
			currentSection.lines.push(line);
		});

		if (currentSection) sections.push(currentSection);

		return sections
			.map((section) => ({
				...section,
				content: section.lines.join("\n").trim(),
			}))
			.filter((section) => section.content.length > 0);
	};

	const renderDescriptionBlocks = (content, keyPrefix) => {
		const lines = String(content ?? "").split("\n");
		const blocks = [];
		let paragraph = [];
		let list = [];

		const flushParagraph = () => {
			if (!paragraph.length) return;
			blocks.push({ type: "paragraph", content: paragraph.join(" ") });
			paragraph = [];
		};

		const flushList = () => {
			if (!list.length) return;
			blocks.push({ type: "list", items: list });
			list = [];
		};

		lines.forEach((line) => {
			const trimmed = line.trim();

			if (!trimmed) {
				flushParagraph();
				flushList();
				return;
			}

			if (trimmed.startsWith("- ")) {
				flushParagraph();
				list.push(trimmed.slice(2));
				return;
			}

			flushList();
			paragraph.push(trimmed);
		});

		flushParagraph();
		flushList();

		return blocks.map((block) => {
			if (block.type === "list") {
				return (
					<ul key={`${keyPrefix}-list-${block.items.join("|")}`} className="project-page-list">
						{block.items.map((item) => (
							<li key={`${keyPrefix}-item-${item}`}>{renderMarkedText(item)}</li>
						))}
					</ul>
				);
			}

			return (
				<p key={`${keyPrefix}-paragraph-${block.content}`} className="project-page-description">
					{renderMarkedText(block.content)}
				</p>
			);
		});
	};

	const renderDescriptionSections = (text, projectId) => {
		const sections = parseDescriptionSections(text);

		return sections.map((section, index) => (
			<div key={`${projectId}-section-${section.title}-${index}`} className="project-page-section">
				<div className="project-page-section-header text-white-50/80">
					<span className="text-sm md:text-base font-semibold text-[#89dceb]">{section.title}</span>
				</div>
				<div className="project-page-section-content">
					{renderDescriptionBlocks(section.content, `${projectId}-${section.title}`)}
				</div>
			</div>
		));
	};

	const pageTransition = reduceMotion
		? { duration: 0 }
		: { duration: 0.2, ease: "easeInOut" };

	const sharedTransition = reduceMotion
		? { duration: 0 }
		: { duration: 0.2, ease: "easeInOut" };

	const heroBaseWidth =
		typeof window !== "undefined"
			? window.innerWidth < 768
				? Math.max(280, Math.min(window.innerWidth - 32, 380))
				: Math.min(750, window.innerWidth - 160)
			: 320;

	const renderProjectActionIcons = (project) => (
		<div className="project-page-icon-actions">
			<a
				href={project.disabled ? undefined : project.href}
				target={project.disabled ? undefined : "_blank"}
				rel={project.disabled ? undefined : "noopener noreferrer"}
				className="project-page-icon-button"
				aria-label={`Open ${project.title} GitHub repository`}
				aria-disabled={project.disabled ? "true" : undefined}
				onClick={(e) => {
					if (project.disabled) e.preventDefault();
				}}
			>
				<FiGithub className="size-4 md:size-[18px]" />
			</a>

			{project.liveHref ? (
				<a
					href={project.liveHref}
					target="_blank"
					rel="noopener noreferrer"
					className="project-page-icon-button"
					aria-label={`Open ${project.title} live app`}
				>
					<FiExternalLink className="size-4 md:size-[18px]" />
				</a>
			) : null}
		</div>
	);

	return (
		<div id="work" ref={sectionRef} className="app-showcase">
			<div className="w-full">
				<div className="showcase-header mb-4 md:mb-10 flex items-center justify-between w-full text-white-50">
					<div className="flex items-center gap-3">
						<span
							className="icon-mask size-6 md:size-7"
							style={{
								color: "#e0d7f5",
								["--icon-url"]: `url(${asset("images/starlogo.png")})`,
							}}
							aria-hidden="true"
						/>
						<h3 className="text-xl md:text-3xl font-bold">Featured Projects</h3>
					</div>

					<Link to="/projects" className="showcase-cta learn-more-fill">
						View all
					</Link>
				</div>

				<LayoutGroup id="showcase-projects-continuity">
					<AnimatePresence mode="wait">
						{activeProject ? (
							<motion.div
								key={`showcase-detail-${activeProject.id}`}
								className="project-page-view"
								initial={reduceMotion ? false : { opacity: 0, y: 18 }}
								animate={{ opacity: 1, y: 0 }}
								exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
								transition={pageTransition}
							>
								<div className="project-page-shell">
									<motion.article
										layoutId={`showcase-card-${activeProject.id}`}
										className="project-page-card"
										transition={sharedTransition}
									>
										<button
											type="button"
											className="project-page-back"
											aria-label="Back to featured projects"
											onClick={() => setActiveProjectId(null)}
										>
											<FiArrowLeft className="size-4 md:size-5" />
											<span>Back to featured projects</span>
										</button>

										<div className="project-page-content">
											<motion.div
												layoutId={`showcase-image-${activeProject.id}`}
												className="project-page-hero"
											>
												<Carousel
													gallery={
														activeProject.gallery || [activeProject.imgPath]
													}
													baseWidth={heroBaseWidth}
													autoplay={
														(activeProject.gallery || [activeProject.imgPath])
															.length > 1
													}
													autoplayDelay={3000}
													pauseOnHover
													loop={
														(activeProject.gallery || [activeProject.imgPath])
															.length > 1
													}
													round={false}
													showBorder={false}
												/>
											</motion.div>

											<section className="project-page-body">
												<div className="project-page-header">
													<motion.h2
														layoutId={`showcase-title-${activeProject.id}`}
														className="project-page-title"
													>
														{activeProject.title}
													</motion.h2>
													<div className="project-page-meta-row">
														<div className="project-page-meta-item">
															<FiCalendar className="size-4" />
															<span>{activeProject.date || ""}</span>
														</div>
														{renderProjectActionIcons(activeProject)}
													</div>
												</div>

										{Array.isArray(activeProject.techStack) &&
										activeProject.techStack.length > 0 ? (
											<div className="project-page-meta-block">
												<div className="project-page-section">
													<div className="project-page-section-header flex items-center gap-2 text-white-50/80">
														<span
															className="icon-mask size-3 md:size-5"
															style={{ ["--icon-url"]: `url(${asset("images/tag.png")})` }}
															aria-hidden="true"
														/>
														<span className="text-xs md:text-base font-semibold">Tech Stack</span>
													</div>
													<div className="project-page-tag-list">
																{activeProject.techStack.map((t) => (
																	<span
																		key={`${activeProject.id}-expanded-${t}`}
																		className="project-page-tag"
																		style={{ color: pickTechColor(t) }}
																	>
																		{t}
																	</span>
																))}
															</div>
														</div>
													</div>
												) : null}

								{renderDescriptionSections(
									activeProject.description || "",
									activeProject.id,
								)}
							</section>
										</div>
									</motion.article>
								</div>
							</motion.div>
						) : (
							<motion.div
								key="showcase-grid"
								className="showcaselayout"
								initial={reduceMotion ? false : { opacity: 0, y: 18 }}
								animate={{ opacity: 1, y: 0 }}
								exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
								transition={pageTransition}
							>
								<div className="project-list-wrapper overflow-visible grid grid-cols-1 md:grid-cols-2 gap-8">
									{featured.map((project, index) => {
										const ref = index === 0 ? studyBreakRef : potteryRef;

										return (
											<motion.div
												key={project.id}
												layout
												className="project-card-origin"
											>
												<GlareHover
													width="100%"
													height="100%"
													background="transparent"
													borderRadius="20px"
													borderColor="transparent"
													glareColor="#9ad9f5"
													glareOpacity={0.5}
													glareAngle={-30}
													glareSize={400}
													transitionDuration={800}
													playOnce={false}
													className="showcase-float h-full"
													style={{ border: "none" }}
												>
													<motion.div
														layoutId={`showcase-card-${project.id}`}
														className="glass-card w-full h-full"
														transition={sharedTransition}
													>
														<button
															type="button"
															className="project w-full h-full text-left"
															ref={ref}
															onClick={() => setActiveProjectId(project.id)}
														>
															<motion.div
																layoutId={`showcase-image-${project.id}`}
																className={`image-wrapper ${project.imgBgClass}`}
															>
																<img
																	src={project.imgPath}
																	alt={project.imgAlt}
																	loading="lazy"
																/>
															</motion.div>

															<div className="showcase-text-with-cta text-white">
																<motion.h2
																	layoutId={`showcase-title-${project.id}`}
																	className="mb-3"
																>
																	{project.title}
																</motion.h2>
																<p className="text-[#e0d7f5] md:text-lg">
																	{renderMarkedText(
																		truncateText(
																			stripMarks(project.description || ""),
																			140,
																		),
																	)}
																</p>
																<div className="mt-6 flex items-center gap-2 text-white-50/80">
																	<span
																		className="icon-mask size-4 md:size-5"
																		style={{
																			["--icon-url"]: `url(${asset("images/tag.png")})`,
																		}}
																		aria-hidden="true"
																	/>
																	<span className="text-sm md:text-base font-semibold">
																		Tech Stack
																	</span>
																</div>
																<div className="mt-3 flex flex-wrap gap-2">
																	{project.techStack.map((t) => (
																		<span
																			key={`${project.id}-card-${t}`}
																			className="glass-card--static text-xs px-3 py-1 rounded-sm font-bold"
																			style={{ color: pickTechColor(t) }}
																		>
																			{t}
																		</span>
																	))}
																</div>
															</div>
														</button>
													</motion.div>
												</GlareHover>
											</motion.div>
										);
									})}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</LayoutGroup>
			</div>
		</div>
	);
};

export default ShowcaseSection;
