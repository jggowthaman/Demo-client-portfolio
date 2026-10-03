import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  Compass,
  Heart,
  Lightbulb,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Profile() {
  const focusAreas = [
    {
      icon: Users,
      number: "01",
      title: "Leadership Development",
      text: "Supporting professionals in developing greater awareness, perspective and purposeful leadership behaviour.",
    },
    {
      icon: MessageCircle,
      number: "02",
      title: "Communication",
      text: "Helping people communicate with clarity, listen with intention and create stronger professional connections.",
    },
    {
      icon: Brain,
      number: "03",
      title: "Behavioural Development",
      text: "Exploring the behaviours and interpersonal capabilities that influence professional relationships and effectiveness.",
    },
    {
      icon: Lightbulb,
      number: "04",
      title: "Emotional Intelligence",
      text: "Building awareness of emotions, empathy and behavioural responses to navigate professional situations more effectively.",
    },
  ];

  const principles = [
    "Awareness before action",
    "Clarity in communication",
    "Understanding behaviour",
    "Continuous development",
  ];

  return (
    <main className="overflow-x-hidden bg-brand-ivory text-brand-black">

      {/* =====================================================
          PROFILE HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-navy">

        {/* Decorative circle */}
        <motion.div
          className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full border border-brand-yellow/20 sm:-right-32 sm:h-[520px] sm:w-[520px] lg:-right-20 lg:top-20 lg:h-[650px] lg:w-[650px]"
          animate={{
            rotate: 360,
            scale: [1, 1.03, 1],
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-midnight/95 via-brand-navy/90 to-transparent lg:w-[70%]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-40">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

            {/* Left */}
            <Reveal direction="left">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-brand-yellow" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow sm:text-xs">
                    Profile
                  </p>

                </div>

                <h1 className="mt-6 font-display text-5xl font-medium leading-[1] text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                  R.A.
                  <span className="block text-brand-yellow">
                    Nadesan
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
                  Executive Coach, behavioural and soft-skills trainer,
                  focused on helping professionals understand themselves,
                  communicate effectively and develop their leadership
                  capabilities.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">

                  <Link
                    to="/workshop"
                    className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-brand-yellow px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-brand-black transition-all duration-300 hover:bg-white sm:text-sm"
                  >
                    Explore Workshops

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-[52px] items-center justify-center gap-3 border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black sm:text-sm"
                  >
                    Get in Touch
                  </Link>

                </div>

              </div>

            </Reveal>


            {/* Right image */}
            <Reveal direction="right">

              <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">

                <div className="absolute -bottom-4 -left-4 h-full w-full border-2 border-brand-yellow/70 sm:-bottom-5 sm:-left-5" />

                <div className="relative overflow-hidden bg-brand-midnight">

                  <img
                    src="/profile.jpg"
                    alt="R.A. Nadesan"
                    className="h-[500px] w-full object-cover object-top grayscale-[8%] transition duration-700 hover:scale-105 sm:h-[580px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-yellow">
                      Executive Coaching
                    </p>

                    <p className="mt-2 font-display text-2xl text-white sm:text-3xl">
                      Leadership begins with awareness.
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROFESSIONAL INTRODUCTION
      ===================================================== */}
      <section className="bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            {/* Heading */}
            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  Professional Perspective
                </p>

                <div className="mt-5 h-1 w-16 bg-brand-yellow" />

                <h2 className="mt-7 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                  Understanding people is at the heart of development.
                </h2>

              </div>

            </Reveal>


            {/* Content */}
            <Reveal direction="right">

              <div className="max-w-3xl">

                <p className="text-lg leading-8 text-brand-muted">
                  Professional growth is not simply about acquiring more
                  knowledge. It also involves understanding how we think,
                  behave, communicate and respond to the people and situations
                  around us.
                </p>

                <p className="mt-7 text-lg leading-8 text-brand-muted">
                  R.A. Nadesan's work brings together executive coaching,
                  behavioural development, communication and emotional
                  intelligence to explore these dimensions of professional
                  effectiveness.
                </p>

                <p className="mt-7 text-lg leading-8 text-brand-muted">
                  His published work has addressed subjects including
                  personality, emotional intelligence, positivity and
                  continuous personal development.
                </p>

                <div className="mt-9 h-px w-full bg-brand-navy/10" />

                <p className="mt-7 text-sm font-semibold leading-7 text-brand-navy">
                  The objective is simple: create greater awareness, improve
                  the way people connect and turn insight into purposeful
                  action.
                </p>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORE AREAS
      ===================================================== */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <Reveal>

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                Areas of Expertise
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                Developing people from the inside out.
              </h2>

              <p className="mt-5 text-base leading-7 text-brand-muted">
                A combination of leadership, communication and behavioural
                perspectives creates a broader approach to professional
                development.
              </p>

            </div>

          </Reveal>


          <div className="mt-14 grid gap-px overflow-hidden bg-brand-navy/10 sm:grid-cols-2">

            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >

                  <div className="group h-full bg-white p-8 transition-all duration-500 hover:bg-brand-navy sm:p-10">

                    <div className="flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white">
                        <Icon size={22} />
                      </div>

                      <span className="font-display text-3xl text-brand-navy/10 transition-colors duration-500 group-hover:text-white/10">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="mt-8 font-display text-2xl text-brand-navy transition-colors duration-500 group-hover:text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-brand-muted transition-colors duration-500 group-hover:text-white/60">
                      {item.text}
                    </p>

                    <div className="mt-7 h-px w-10 bg-brand-yellow transition-all duration-500 group-hover:w-20" />

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-yellow py-24 sm:py-32">

        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-brand-black/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-brand-black/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-black/60">
                  The Philosophy
                </p>

                <h2 className="mt-6 font-display text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
                  Awareness creates
                  <span className="block">
                    the possibility of change.
                  </span>
                </h2>

              </div>

            </Reveal>


            <Reveal direction="right">

              <div className="space-y-5">

                {principles.map((principle, index) => (

                  <div
                    key={principle}
                    className="flex items-center gap-5 border-b border-brand-black/15 pb-5"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-yellow">
                      <Check size={16} />
                    </div>

                    <div className="flex items-center justify-between gap-5">

                      <p className="font-display text-xl text-brand-navy sm:text-2xl">
                        {principle}
                      </p>

                      <span className="hidden text-xs font-bold tracking-[0.2em] text-brand-black/30 sm:block">
                        0{index + 1}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          EMOTIONAL INTELLIGENCE
      ===================================================== */}
      <section className="bg-brand-navy py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

            <Reveal direction="left">

              <div>

                <div className="flex items-center gap-4">

                  <Heart
                    size={28}
                    className="text-brand-yellow"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-yellow">
                    Emotional Intelligence
                  </p>

                </div>

                <h2 className="mt-7 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  Listen beyond
                  <span className="block text-brand-yellow">
                    the words.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                  Emotional intelligence involves more than recognising our
                  own emotions. It also involves empathy, perspective,
                  listening and understanding the people around us.
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                  These capabilities can influence the quality of
                  communication, relationships and professional interactions.
                </p>

                <Link
                  to="/workshop"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-brand-yellow pb-2 text-sm font-bold uppercase tracking-[0.15em] text-brand-yellow"
                >
                  Explore Workshops

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>

              </div>

            </Reveal>


            <Reveal direction="right">

              <div className="relative">

                <div className="absolute -inset-5 border border-brand-yellow/20" />

                <div className="relative bg-brand-midnight p-8 sm:p-12">

                  <Compass
                    size={42}
                    className="text-brand-yellow"
                  />

                  <p className="mt-8 font-display text-3xl leading-tight text-white sm:text-4xl">
                    “Listen for
                    <span className="text-brand-yellow">
                      {" "}feeling and meaning,
                    </span>
                    not merely the words.”
                  </p>

                  <div className="mt-8 h-px w-16 bg-brand-yellow" />

                  <p className="mt-6 text-sm leading-7 text-white/50">
                    A principle discussed by R.A. Nadesan in his published
                    writing on emotional intelligence and communication.
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTINUOUS DEVELOPMENT
      ===================================================== */}
      <section className="bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <Reveal>

            <Target
              size={34}
              className="mx-auto text-brand-gold"
            />

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
              Continuous Development
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Sharpen the skills that shape
              <span className="text-brand-gold">
                {" "}your next chapter.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-brand-muted">
              Professional development is an ongoing process. Reflection,
              learning and deliberate improvement can help people strengthen
              the capabilities they rely on every day.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 bg-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black"
            >
              Start a Conversation

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          PROFILE CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-navy py-24 sm:py-32">

        <motion.div
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-yellow"
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">

          <Reveal>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-yellow">
              Continue Exploring
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover the work behind
              <span className="block text-brand-yellow">
                the profile.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Explore workshops, professional engagements and opportunities
              to connect with R.A. Nadesan.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

              <Link
                to="/workshop"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-brand-yellow px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-black transition-all duration-300 hover:bg-white"
              >
                View Workshops

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black"
              >
                Contact
              </Link>

            </div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}