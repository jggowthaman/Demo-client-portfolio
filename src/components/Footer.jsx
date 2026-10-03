import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Workshop", path: "/workshop" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const expertise = [
    "Leadership Development",
    "Executive Coaching",
    "Leadership Communication",
    "Business Storytelling",
    "Behavioural Development",
  ];

  return (
    <footer className="bg-brand-midnight text-white">

      {/* =====================================================
          TOP CTA
      ===================================================== */}
      <section className="border-b border-white/10 bg-brand-navy">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow sm:text-xs">
                Let's Connect
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Start a conversation
                <span className="text-brand-yellow"> that matters.</span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="group inline-flex min-h-[52px] w-fit items-center gap-3 bg-brand-yellow px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-black transition-all duration-300 hover:bg-white sm:text-sm"
            >
              Get in Touch

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">

          {/* BRAND */}
          <div>

            <Link
              to="/"
              className="inline-block"
            >
              <p className="font-display text-3xl font-medium tracking-wide text-white sm:text-4xl">
                R.A. <span className="text-brand-yellow">Nadesan</span>
              </p>
            </Link>

            <div className="mt-4 h-px w-16 bg-brand-yellow" />

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Executive coaching, leadership development and professional
              learning focused on communication, behaviour and meaningful
              transformation.
            </p>

            <div className="mt-7 flex items-center gap-3">

              <span className="h-px w-8 bg-brand-yellow" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-yellow">
                Think. Communicate. Lead.
              </span>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
              Quick Links
            </p>

            <ul className="mt-6 space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-brand-yellow"
                  >
                    <span className="h-px w-0 bg-brand-yellow transition-all duration-300 group-hover:w-4" />

                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* EXPERTISE */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
              Areas of Focus
            </p>

            <ul className="mt-6 space-y-3">

              {expertise.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-6 text-white/55"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>


        {/* =====================================================
            CONTACT STRIP
        ===================================================== */}
        <div className="mt-14 grid border-y border-white/10 sm:grid-cols-3">

          {/* EMAIL */}
          <div className="flex items-center gap-4 border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:pr-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-yellow text-brand-black">
              <Mail size={18} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
                Email
              </p>

              <p className="mt-1 text-sm text-white/60">
                Get in touch
              </p>
            </div>

          </div>


          {/* PHONE */}
          <div className="flex items-center gap-4 border-b border-white/10 py-6 sm:border-b-0 sm:px-6 sm:border-r">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-yellow text-brand-black">
              <Phone size={18} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
                Phone
              </p>

              <p className="mt-1 text-sm text-white/60">
                Let's talk
              </p>
            </div>

          </div>


          {/* LOCATION */}
          <div className="flex items-center gap-4 py-6 sm:pl-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-yellow text-brand-black">
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
                Location
              </p>

              <p className="mt-1 text-sm text-white/60">
                Chennai, India
              </p>
            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ===================================================== */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-6 text-white/35">
            © {new Date().getFullYear()} R.A. Nadesan. All rights reserved.
          </p>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              Leadership • Communication • Transformation
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}