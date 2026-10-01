import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";

const workTopicsEn = [
  {
    title: "Relationships with people",
    description: "Difficulties connecting with a partner, family, or colleagues — from closeness to distance.",
  },
  {
    title: "Reactions",
    description: "Jealousy, anxiety, irritation — feelings that overwhelm faster than you can think them through.",
  },
  {
    title: "Codependency",
    description: "When your own life dissolves into someone else's.",
  },
  {
    title: "Childhood scenarios",
    description: "Patterns formed long ago that still drive today's decisions.",
  },
  {
    title: "Health",
    description: "Psychosomatics and the link between the body and what has no words yet.",
  },
  {
    title: "Anxiety",
    description: "Background tension that keeps you from living in the present moment.",
  },
];

const testimonialsEn = [
  {
    name: "Anna, 34",
    text: "I came in feeling like I was living someone else's invented version of my life. Over a few months of working with Roman I learned to see where my own wishes end and other people's expectations begin. It wasn't easy, but it was exactly what I needed.",
  },
  {
    name: "Dmitry, 41",
    text: "I reached out because of irritability that was damaging my family relationships. Roman helped me see the root cause — not in my wife or kids, but in an old scenario. I react very differently now.",
  },
  {
    name: "Elena, 29",
    text: "We worked on the anxiety that kept me from making any decisions. This integral approach isn't just talking — it's systemic work. I feel the results not only in my head, but in my body.",
  },
  {
    name: "Sergey, 47",
    text: "I put off therapy for a long time, thinking I'd manage on my own. The online format worked well with my busy schedule. Working with self-images brought unexpected clarity on things that had bothered me for years.",
  },
];

const homeHighlightsEn = [
  { title: "Articles", description: "Notes from practice: reactions, relationships, childhood scenarios.", to: "/articles", cta: "Read articles" },
  { title: "How I work", description: "An individual approach, relationship levels, self-images.", to: "/en/about", cta: "About the approach" },
  { title: "What people come with", description: "Relationships, reactions, codependency, scenarios, health, anxiety.", to: "/en/#topics", cta: "Main topics" },
  { title: "Group therapy in Moscow", description: "I run in-person groups — a 10-session cycle and themed meetings.", to: "/groups", cta: "More about groups" },
];

export default function HomeEn() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-stone-50 to-stone-50" />
        <div className="mx-auto max-w-6xl px-6 pb-5 pt-5 sm:pt-7 lg:px-8">
          <div className="flex items-start gap-5 sm:gap-8 md:gap-6">
            <div className="flex flex-1 flex-col items-start gap-4 sm:gap-8">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-sage-600">
                Home
              </span>
              <h1 className="text-2xl leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
                From the web of others&rsquo; opinions — <span className="text-sage-700">to yourself.</span> The present.
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-ink-700/80 sm:text-lg">
                I&rsquo;m Roman Kuznetsov, a psychologist. I help people work through difficulties in
                how they relate to others, the world, and themselves — where familiar coping
                strategies no longer work.
              </p>
            </div>

            <div className="flex w-24 flex-none flex-col items-center gap-3 sm:w-56 md:w-72 lg:w-80">
              <div className="w-full overflow-hidden rounded-2xl bg-sand-200 shadow-xl shadow-ink-900/10 sm:rounded-[2rem]">
                <img
                  src="/images/site/hero-roman.png"
                  alt="Roman Kuznetsov"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <img
                src="/images/site/logo-voicetherapy.png"
                alt="Voice Therapy"
                className="h-6 w-auto opacity-90 sm:h-8"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/en/booking"
              className="rounded-full bg-sage-600 px-8 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-sage-700"
            >
              Book a consultation
            </Link>
            <Link
              to="/en/about"
              className="rounded-full border border-sand-300 px-8 py-3.5 text-center text-sm font-medium text-ink-900 transition-colors hover:border-sage-400 hover:text-sage-700"
            >
              Learn about the approach
            </Link>
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-10 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Main topics"
          description="Every request is different, but the same processes usually lie underneath."
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workTopicsEn.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-sand-200 bg-white/60 p-7 transition-colors hover:border-sage-300"
            >
              <h3 className="text-xl text-ink-900">{topic.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            align="left"
          />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {testimonialsEn.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col justify-between rounded-2xl border border-sand-200 bg-white p-8"
              >
                <blockquote className="text-sm leading-relaxed text-ink-700/80">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-sage-700">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14">
        <img
          src="/images/site/quote-section-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-ink-900/60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-2xl italic leading-relaxed text-white sm:text-3xl">
            &ldquo;Every traveler eventually realizes that the most interesting journey
            is the one inward.&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/70">
            Roman Kuznetsov
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <SectionHeading eyebrow="Learn more" title="Where to go next" />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeHighlightsEn.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group flex flex-col justify-between rounded-2xl border border-sand-200 bg-white p-6 transition-colors hover:border-sage-300"
            >
              <div>
                <h3 className="text-base text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                  {item.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-medium text-sage-700 group-hover:text-sage-800">
                {item.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 text-center lg:px-8">
        <h2 className="text-3xl text-ink-900 sm:text-4xl">
          Ready to take the first step?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-700/70">
          Book a consultation — in person in central Moscow or online, whichever format suits you.
        </p>
        <Link
          to="/en/booking"
          className="mt-8 inline-block rounded-full bg-sage-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
        >
          Book a consultation
        </Link>
      </section>
    </div>
  );
}
