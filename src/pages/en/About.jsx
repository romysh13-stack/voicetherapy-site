import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";
import { contacts, credentials, engineerStats } from "../../data/content";

const mainMethodEn = {
  title: "Integral Neuroprogramming (INP)",
  description:
    "This is the core method I work in — not a single technique, but an integrative approach developed by S. V. Kovalev. INP doesn't replace psychoanalysis, CBT, emotional-imagery therapy, or family systems therapy — it combines them into one system along with elements of body-oriented work, so we can move at whichever level the client's request needs: thoughts, emotions, images, the body, or the context of relationships.",
};

const methodsEn = [
  {
    title: "Psychoanalysis",
    description:
      "We look at where a reaction comes from: early experience and unconscious patterns often drive today's choices without us noticing. We work with the root cause, not just the symptom.",
  },
  {
    title: "CBT (Cognitive Behavioral Therapy)",
    description:
      "We break down the “thought → emotion → behavior” chain using real examples from your life and change the thinking and behavior patterns that no longer serve you.",
  },
  {
    title: "Emotional-imagery therapy",
    description:
      "Some experiences are hard to put into words but easy to see as an image or metaphor. Working with imagery lets us transform what an ordinary conversation can't reach.",
  },
  {
    title: "Family systems therapy",
    description:
      "We look at a person not in isolation, but as part of a system — a family, a lineage. Many reactions and scenarios are explained by one's place and role in that system, not only by personal traits.",
  },
];

const relationshipLevelsEn = [
  { level: "Domination", description: "Relationships built on power and control — one person sets the rules for both." },
  { level: "Manipulation", description: "Hidden influence, indirect ways of getting what you want from another person." },
  { level: "Rivalry", description: "Constant comparison, a struggle over who is right, who is better, who is in charge." },
  { level: "Cooperation", description: "A shared goal matters more than personal ambition — both sides start acting together." },
  { level: "Partnership", description: "Equal roles, mutual respect for boundaries and each person's contribution." },
  { level: "Intimacy", description: "Openness, trust, and genuine contact — the highest form of connection between people." },
];

const formatsEn = [
  { title: "In-person sessions", description: "Face-to-face consultations in central Moscow — for those who value direct contact." },
  { title: "Online", description: "Zoom or Telegram — work from anywhere in the world without losing quality of contact." },
  { title: "Coaching", description: "For those who are ready for change and want to move quickly and purposefully." },
];

export default function AboutEn() {
  return (
    <div>
      <section className="bg-sand-50 pb-5 pt-7">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Approach"
            title="What I draw on in my work"
            description="A brief look at each method — so it makes sense even if you've never been to therapy."
          />

          <div className="mt-6 rounded-2xl border border-sage-300 bg-white p-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-sage-600">
              Core method
            </span>
            <h3 className="mt-3 text-xl text-ink-900">{mainMethodEn.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
              {mainMethodEn.description}
            </p>
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.15em] text-ink-700/50">
            What INP is built from
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {methodsEn.map((method) => (
              <div key={method.title} className="rounded-2xl border border-sand-200 bg-white p-7">
                <h3 className="text-lg text-ink-900">{method.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key idea"
            title="Levels of relationship"
            description="Any relationship — with a partner, a parent, a colleague, or yourself — can be placed on a scale from control to genuine closeness. Therapy is often about consciously moving along that scale."
          />

          <div className="relative mt-7">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-sand-300 sm:block" />
            <div className="flex flex-col gap-6">
              {relationshipLevelsEn.map((item, index) => (
                <div key={item.level} className="relative flex gap-6 sm:pl-0">
                  <div className="hidden sm:flex sm:w-8 sm:flex-none sm:items-start sm:justify-center">
                    <span className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-sage-400 bg-stone-50 text-xs font-medium text-sage-700">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-sand-200 bg-white p-6">
                    <h3 className="text-lg text-ink-900">{item.level}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:items-start lg:px-8">
          <div>
            <div className="mb-8 overflow-hidden rounded-2xl bg-ink-900">
              <img
                src="/images/site/selfimages-illustration.jpg"
                alt="Self-images"
                className="aspect-square w-full object-cover opacity-90"
              />
            </div>
            <SectionHeading eyebrow="Concept" title="Self-images" />
            <p className="mt-6 text-base leading-relaxed text-ink-700/70">
              Each of us doesn&rsquo;t have one whole &ldquo;self&rdquo; but many images: who I am
              with my parents, who I become at work, who I remain alone with myself. Some of these
              images are shaped by genuine needs, others are borrowed from outside — from the
              expectations of family, society, and past experience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-700/70">
              Working with self-images is a process of telling apart what&rsquo;s a real &ldquo;I
              want&rdquo; from what&rsquo;s an echo of someone else&rsquo;s opinion that stopped
              being relevant long ago. That&rsquo;s exactly what the motto means: &ldquo;From the
              web of others&rsquo; opinions — to yourself. The present.&rdquo; Therapy helps untangle
              these layers and reconnect with a life that&rsquo;s truly yours, not borrowed.
            </p>
          </div>

          <div className="rounded-2xl border border-sand-200 bg-sage-50 p-8">
            <h3 className="text-lg text-ink-900">How the work is structured</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-ink-700/70">
              <li>— Identify the real request behind the symptom</li>
              <li>— Explore which self-image the problematic reaction belongs to</li>
              <li>— Trace the connection to the current level of relationship</li>
              <li>— Look for childhood scenarios that keep the pattern in place</li>
              <li>— Build a new, stable way of responding</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <SectionHeading
          eyebrow="Qualifications"
          title="Education and certificates"
          description="Beyond a base degree in psychology — ongoing training in related fields, from psychosomatics to sexology and coaching."
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {credentials.map((item) => (
            <div key={item.title} className="rounded-2xl border border-sand-200 bg-white p-6">
              <h3 className="text-sm leading-snug text-ink-900">{item.title}</h3>
              <p className="mt-2 text-xs text-ink-700/60">{item.issuer}</p>
              <p className="mt-1 text-xs font-medium text-sage-700">{item.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Formats" title="Session formats" />

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {formatsEn.map((format) => (
              <div key={format.title} className="rounded-2xl border border-sand-200 bg-white p-7">
                <h3 className="text-lg text-ink-900">{format.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                  {format.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col items-start gap-2 rounded-2xl border border-sage-200 bg-sage-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-700/80">
              Working hours: <span className="font-medium text-ink-900">9:00–19:00 (GMT+3, Moscow)</span>
            </p>
            <Link
              to="/en/booking"
              className="rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Path to the profession"
            title="From engineer to psychologist"
            description="My first degree was in civil engineering (Ogarev Mordovia State University, 2005–2011). For a few years I thought in terms of loads, calculations, and load-bearing structures — and that way of thinking never really left when I moved into psychology."
          />

          <div>
            <p className="text-base leading-relaxed text-ink-700/70">
              In engineering, you can&rsquo;t reinforce a facade if the crack runs through the
              foundation — you find the load-bearing structure first, then work with it. I use the
              same principle in therapy: instead of propping up the symptom, I look for the load-bearing
              point — the scenario, self-image, or reaction the whole problem rests on. That&rsquo;s where
              the systemic quality clients often mention comes from.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {engineerStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-sage-700">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-ink-900">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-ink-700/60">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
