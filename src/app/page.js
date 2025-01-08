
export default function Home() {
  return (
    <main>
      <div className="text-slate-700">
        <header className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 justify-items-center gap-20">
              <nav>
                <ul className="flex flex-wrap justify-center gap-10">
                  <li className="font-semibold tracking-tight text-slate-800">
                    <a href="/">Articles</a>
                  </li>
                  <li className="font-semibold tracking-tight text-slate-800">
                    <a href="/about">About</a>
                  </li>
                  <li className="font-semibold tracking-tight text-slate-800">
                    <a href="">Contact Me</a>
                  </li>
                </ul>
              </nav>
              <div className="px-4">
                <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
                  <a tabIndex={-1} href="/">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
                      <img
                        alt="A photo of Margaret Smith (fictional)."
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="100vw"
                        src="https://images.prismic.io/nextjs-starter-prismic-blog/af1ae0b2-2b21-4a71-be78-cee3930b674b_mathilde-langevin-PaCzyxEcqiw-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1000%2C4000%2C4000&w=3840&fit=max"
                      />
                    </div>
                  </a>
                  <div className="grid grid-cols-1 gap-2 text-center">
                    <h1 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl">
                      <a href="/">Margaret Smith</a>
                    </h1>
                    <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                      Writer at The Daily Times spending all of my free time writing
                      stories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
            <div className="mx-auto w-full max-w-6xl">
              <ul className="grid grid-cols-1 gap-16">
                <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
                  <a tabIndex={-1} href="/articles/hiking-through-the-woods">
                    <div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
                      <img
                        alt="list 1"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover"
                        sizes="100vw"
                        src="https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=3840&fit=max"
                      />
                    </div>
                  </a>
                  <div className="grid grid-cols-1 gap-3 md:col-span-2">
                    <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl">
                      <a href="/articles/hiking-through-the-woods">
                        Hiking through the woods
                      </a>
                    </h2>
                    <p className="font-serif italic tracking-tighter text-slate-500">
                      Apr 12, 2022
                    </p>
                    <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
                      This is Rich Text, which includes both external links and
                      links to internal documents. Links should be handled
                      intelligently or everything might break. Don't forget about
                      media, too! Do your best to render images using an HTML
                      Serializer. As you know hiking can be a very fulfilling orem
                      ipsum dolor…
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
                  <a tabIndex={-1} href="/articles/beach-resort-vacation">
                    <div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
                      <img
                        alt="link 2"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover"
                        sizes="100vw"
                        srcSet="https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=640&fit=max 640w, https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=750&fit=max 750w, https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=828&fit=max 828w, https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=1080&fit=max 1080w, https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=1200&fit=max 1200w, https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=1920&fit=max 1920w, https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=2048&fit=max 2048w, https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=3840&fit=max 3840w"
                        src="https://images.prismic.io/nextjs-starter-prismic-blog/599891e1-cfd4-4c9d-8c21-a498c1dcac16_alex-holt-Qu-VEc0hLS4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1560%2C4160%2C3120&w=3840&fit=max"
                      />
                    </div>
                  </a>
                  <div className="grid grid-cols-1 gap-3 md:col-span-2">
                    <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl">
                      <a href="/articles/beach-resort-vacation">
                        Beach resort vacation
                      </a>
                    </h2>
                    <p className="font-serif italic tracking-tighter text-slate-500">
                      Mar 22, 2022
                    </p>
                    <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
                      Massa sapien faucibus et molestie ac feugiat sed lectus.
                      Dignissim cras tincidunt lobortis feugiat vivamus at augue.
                      Pharetra pharetra massa massa ultricies. Ut morbi tincidunt
                      augue interdum. Volutpat odio facilisis mauris sit amet massa
                      vitae. In dictum non consectetur a erat nam. Pulvinar…
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
                  <a tabIndex={-1} href="/articles/perilous-yoga">
                    <div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
                      <img
                        alt="link 3"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover"
                        sizes="100vw"
                        srcSet="https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=640&fit=max 640w, https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=750&fit=max 750w, https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=828&fit=max 828w, https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=1080&fit=max 1080w, https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=1200&fit=max 1200w, https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=1920&fit=max 1920w, https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=2048&fit=max 2048w, https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=3840&fit=max 3840w"
                        src="https://images.prismic.io/nextjs-starter-prismic-blog/80cb000f-544e-45e1-b67f-fe35c6d42725_jess-harper-sunday-MBwPzT_vbqo-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1250%2C3333%2C2500&w=3840&fit=max"
                      />
                    </div>
                  </a>
                  <div className="grid grid-cols-1 gap-3 md:col-span-2">
                    <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl">
                      <a href="/articles/perilous-yoga">Perilous yoga</a>
                    </h2>
                    <p className="font-serif italic tracking-tighter text-slate-500">
                      Jan 6, 2022
                    </p>
                    <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse…
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 justify-items-center gap-24">
              <hr className="h-px w-1/2 border-0 bg-slate-200 md:max-w-sm" />
              <div className="px-4">
                <form
                  className="grid w-full max-w-xl grid-cols-1 gap-6"
                  action="/api/sign-up"
                  method="post"
                >
                  <div className="text-center font-serif tracking-tight text-slate-500">
                    <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl mb-4 last:mb-0">
                      Follow my journey
                    </h2>
                    <p className="mb-4 italic last:mb-0">
                      Get notified about updates and be the first to get early
                      access to the new, safer, and smarter way to archive your
                      files.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="relative">
                      <label>
                        <span className="sr-only">Email address</span>
                        <input
                          type="email"
                          placeholder="jane.doe@example.com"
                          required=""
                          className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
                          name="email"
                        />
                      </label>
                      <button
                        type="submit"
                        className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400"
                      >
                        <span className="sr-only">Submit</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                    <p className="text-center text-xs tracking-tight text-slate-500">
                      By subscribing to our newsletter you accept to receive
                      recurring emails about our product and company
                    </p>
                  </div>
                </form>
              </div>
              <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
                Proudly published using
                {/* */}
                <a className="text-slate-700" href="https://prismic.io">
                  Prismic
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>

  );
}
