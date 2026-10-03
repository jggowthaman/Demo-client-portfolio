import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  BriefcaseBusiness,
  ChevronDown,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Home() {
  const expertise = [
    {
      icon: Users,
      title: "Leadership Development",
      text: "Developing leadership capability, perspective and purposeful action in changing environments.",
    },
    {
      icon: MessageCircle,
      title: "Leadership Communication",
      text: "Helping professionals communicate ideas with greater clarity, influence and meaning.",
    },
    {
      icon: Sparkles,
      title: "Business Storytelling",
      text: "Using the power of narrative to connect strategy, insight and human understanding.",
    },
    {
      icon: Brain,
      title: "Behavioural Development",
      text: "Exploring the behaviours, perspectives and interpersonal skills that shape professional effectiveness.",
    },
  ];

  const stats = [
    {
      number: "01",
      label: "Leadership",
    },
    {
      number: "02",
      label: "Communication",
    },
    {
      number: "03",
      label: "Behaviour",
    },
    {
      number: "04",
      label: "Storytelling",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-brand-ivory text-brand-black">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-navy">

        {/* Decorative Circle 1 */}
        <motion.div
          className="pointer-events-none absolute -right-40 top-16 h-[360px] w-[360px] rounded-full border border-brand-yellow/20 sm:-right-32 sm:top-20 sm:h-[450px] sm:w-[450px] lg:-right-32 lg:h-[500px] lg:w-[500px]"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Decorative Circle 2 */}
        <motion.div
          className="pointer-events-none absolute -right-24 top-36 h-[250px] w-[250px] rounded-full border border-brand-gold/20 sm:-right-20 sm:top-48 sm:h-[320px] sm:w-[320px] lg:h-[350px] lg:w-[350px]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Background Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-midnight/95 via-brand-navy/90 to-brand-navy/50 lg:w-[65%]" />

        {/* Desktop Gold Shape */}
        <motion.div
          className="pointer-events-none absolute right-[-15%] top-0 hidden h-full w-[42%] skew-x-[-12deg] bg-brand-yellow lg:block"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Hero Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:flex lg:min-h-screen lg:items-center lg:px-12 lg:pb-20 lg:pt-32">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div className="max-w-3xl">

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4"
              >
                <span className="h-px w-8 bg-brand-yellow sm:w-12" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow sm:text-xs sm:tracking-[0.3em]">
                  Executive Coach
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-[3.35rem] font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-7xl xl:text-[82px]"
              >
                R.A.
                <span className="block text-brand-yellow">
                  Nadesan
                </span>
              </motion.h1>

              {/* Heading + Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-5 max-w-2xl sm:mt-7"
              >

                <h2 className="max-w-xl text-base font-medium leading-7 text-white/90 sm:text-xl sm:leading-relaxed md:text-2xl">
                  Leadership.
                  <span className="mx-1.5 text-brand-yellow sm:mx-2">
                    Communication.
                  </span>
                  Transformation.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                  Executive coaching, behavioural development and leadership
                  communication designed to help professionals think with
                  clarity, communicate with purpose and create meaningful
                  impact.
                </p>

              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                }}
                className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-4"
              >

                <Link
                  to="/profile"
                  className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 bg-brand-yellow px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-brand-black transition-all duration-300 hover:bg-white sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.12em]"
                >
                  Explore Profile

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 border border-white/30 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.12em]"
                >
                  Start a Conversation
                </Link>

              </motion.div>

            </div>


            {/* =================================================
                RIGHT IMAGE
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-[calc(100%-16px)] max-w-[380px] sm:max-w-[430px] lg:ml-auto lg:w-full lg:max-w-[480px]"
            >

              <div className="relative">

                {/* Gold Frame */}
                <div className="absolute -bottom-3 -left-3 h-full w-full border-2 border-brand-yellow/70 sm:-bottom-4 sm:-left-4 lg:-bottom-5 lg:-left-5" />

                {/* Image Container */}
                <div className="relative overflow-hidden bg-brand-midnight">

                  <img
                    src="/profile.jpg"
                    alt="R.A. Nadesan"
                    className="h-[420px] w-full object-cover object-top grayscale-[10%] transition duration-700 hover:scale-105 sm:h-[500px] lg:h-[540px]"
                  />

                  {/* Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/85 via-transparent to-transparent" />

                  {/* Image Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-yellow sm:text-xs sm:tracking-[0.25em]">
                      Leadership & Development
                    </p>

                    <p className="mt-1.5 font-display text-xl text-white sm:mt-2 sm:text-2xl">
                      Think. Communicate. Lead.
                    </p>

                  </div>

                </div>

                {/* Floating Coaching Badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-3 top-6 hidden bg-white p-4 shadow-2xl sm:-right-4 sm:top-8 sm:block sm:p-5 lg:-right-5 lg:top-10"
                >

                  <Award
                    size={22}
                    className="text-brand-gold sm:h-[25px] sm:w-[25px]"
                  />

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-black sm:mt-3 sm:text-xs sm:tracking-[0.15em]">
                    Executive
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.12em] text-brand-muted sm:text-xs sm:tracking-[0.15em]">
                    Coaching
                  </p>

                </motion.div>

              </div>

            </motion.div>

          </div>
        </div>


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex"
        >

          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
            }}
          >
            <ChevronDown size={18} />
          </motion.div>

        </motion.div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="relative bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <Reveal direction="left">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  The Approach
                </p>

                <div className="mt-5 h-1 w-16 bg-brand-yellow" />

                <h2 className="mt-7 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                  Turning insight into meaningful action.
                </h2>
              </div>

            </Reveal>

            <Reveal direction="right">

              <div>
                <p className="text-lg leading-8 text-brand-muted">
                  Leadership is not only about what we know. It is also about
                  how we think, communicate, influence and respond to the
                  situations around us.
                </p>

                <p className="mt-6 text-lg leading-8 text-brand-muted">
                  R.A. Nadesan's work brings together leadership development,
                  behavioural learning, communication and storytelling to
                  explore how people can create greater clarity and impact in
                  professional environments.
                </p>

                <Link
                  to="/profile"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-brand-navy"
                >
                  Discover the Profile

                  <ArrowRight
                    size={18}
                    className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          EXPERTISE
      ===================================================== */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <Reveal>

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                Areas of Focus
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                Building capability that creates impact.
              </h2>

              <p className="mt-5 text-base leading-7 text-brand-muted">
                Explore the key areas that shape the work across coaching,
                workshops and professional development.
              </p>

            </div>

          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden bg-brand-navy/10 sm:grid-cols-2 lg:grid-cols-4">

            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >
                  <div className="group h-full bg-white p-8 transition-all duration-500 hover:bg-brand-navy">

                    <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white">
                      <Icon size={23} />
                    </div>

                    <p className="mt-7 text-xs font-bold tracking-[0.2em] text-brand-gold group-hover:text-brand-yellow">
                      0{index + 1}
                    </p>

                    <h3 className="mt-3 font-display text-2xl text-brand-navy group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-brand-muted group-hover:text-white/65">
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
          STORYTELLING / LEADERSHIP FEATURE
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-navy py-24 sm:py-32">

        <motion.div
          className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-brand-yellow/20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-yellow">
                  Leadership Communication
                </p>

                <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  When information
                  <span className="block text-brand-yellow">
                    needs meaning.
                  </span>
                </h2>

                <div className="mt-7 h-px w-20 bg-brand-yellow" />

                <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
                  In today's world of disruption, data and constant change,
                  effective leadership communication is about more than
                  delivering information. It is about creating understanding,
                  connection and purposeful action.
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

                  <div className="flex items-start justify-between">

                    <MessageCircle
                      size={38}
                      className="text-brand-yellow"
                    />

                    <span className="text-xs font-bold tracking-[0.2em] text-white/30">
                      01
                    </span>

                  </div>

                  <blockquote className="mt-12 font-display text-3xl leading-tight text-white sm:text-4xl">
                    “Spreadsheets may establish the case.
                    <span className="text-brand-yellow">
                      {" "}Stories create the context.
                    </span>
                  </blockquote>

                  <p className="mt-8 text-sm leading-7 text-white/50">
                    A perspective reflected in R.A. Nadesan's recent writing
                    on business storytelling, leadership communication and
                    influence.
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOCUS NUMBERS
      ===================================================== */}
      <section className="bg-brand-yellow py-16">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">

            {stats.map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 0.08}
              >

                <div className="border-l border-brand-black/20 px-6 first:border-l-0 lg:px-10">

                  <p className="font-display text-4xl text-brand-navy sm:text-5xl">
                    {item.number}
                  </p>

                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-black/60">
                    {item.label}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WORKSHOP PREVIEW
      ===================================================== */}
      <section className="bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <Reveal direction="left">

              <div className="relative overflow-hidden">

                <img
                  src="/workshop.jpg"
                  alt="R.A. Nadesan workshop"
                  className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
                    Workshops
                  </p>

                  <p className="mt-2 font-display text-3xl text-white">
                    Learning through experience.
                  </p>

                </div>

              </div>

            </Reveal>

            <Reveal direction="right">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  Workshops & Learning
                </p>

                <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                  Practical learning for
                  <span className="block">
                    real-world leadership.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
                  From leadership and communication to behavioural development
                  and storytelling, workshops can be shaped around the needs of
                  professionals, teams and organisations.
                </p>

                <Link
                  to="/workshop"
                  className="group mt-8 inline-flex items-center gap-3 bg-brand-navy px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black"
                >
                  View Workshops

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          PORTFOLIO PREVIEW
      ===================================================== */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <Reveal>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  Professional Portfolio
                </p>

                <h2 className="mt-5 font-display text-4xl text-brand-navy sm:text-5xl">
                  Work that connects
                  <span className="text-brand-gold">
                    {" "}people & purpose.
                  </span>
                </h2>

              </div>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-brand-navy"
              >
                View Portfolio

                <ArrowRight
                  size={18}
                  className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>

            </div>

          </Reveal>

          <Reveal
            direction="up"
            delay={0.15}
          >

            <div className="mt-12 overflow-hidden bg-brand-navy">

              <div className="grid lg:grid-cols-2">

                <div className="relative min-h-[350px] overflow-hidden">

                  <img
                    src="/portfolio-1.jpg"
                    alt="Professional workshop and leadership engagement"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-brand-navy/20" />

                </div>

                <div className="flex items-center p-8 sm:p-12 lg:p-16">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
                      Professional Engagements
                    </p>

                    <h3 className="mt-5 font-display text-3xl leading-tight text-white sm:text-4xl">
                      Creating spaces for
                      <span className="text-brand-yellow">
                        {" "}learning and growth.
                      </span>
                    </h3>

                    <p className="mt-6 text-base leading-8 text-white/60">
                      Explore selected professional engagements, workshops,
                      speaking opportunities and learning experiences.
                    </p>

                    <Link
                      to="/portfolio"
                      className="group mt-8 inline-flex items-center gap-3 border-b border-brand-yellow pb-2 text-sm font-bold uppercase tracking-[0.15em] text-brand-yellow"
                    >
                      Explore Portfolio

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-navy py-24 sm:py-32">

        <motion.div
          className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-brand-yellow"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">

          <Reveal>

            <BriefcaseBusiness
              size={35}
              className="mx-auto text-brand-yellow"
            />

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-brand-yellow">
              Let's Connect
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready to create meaningful
              <span className="block text-brand-yellow">
                professional impact?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Explore coaching, workshops and professional development
              opportunities with R.A. Nadesan.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 bg-brand-yellow px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-brand-black transition-all duration-300 hover:bg-white"
            >
              Get in Touch

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </Reveal>

        </div>
      </section>

    </main>
  );
}