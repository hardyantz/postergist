export default function Footer() {
    return (
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
    )
}