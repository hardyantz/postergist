export default function Header() {
    return (
        <header className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 justify-items-center gap-20">
              <nav>
                <ul className="flex flex-wrap justify-center gap-10">
                  <li className="font-semibold tracking-tight text-slate-800">
                    <a href="/article">Articles</a>
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
    )
}