import Layout from '../app/components/layout'

export default function About() {
  return (
    <main>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
            <p className="mb-7 last:mb-0">
              Hi, I’m Margaret. Welcome to my safe place where I write about
              everything I find inspiring and you might find too.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-6xl">
          <figure className="grid grid-cols-1 gap-4">
            <div className="bg-gray-100">
              <img
                alt="A women surrounded by cherry blossoms."
                loading="lazy"
                width={16000}
                height={9000}
                decoding="async"
                data-nimg={1}
                className="w-full"
                style={{ color: "transparent" }}
                sizes="100vw"
                srcSet="https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=640&fit=max 640w, https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=750&fit=max 750w, https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=828&fit=max 828w, https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=1080&fit=max 1080w, https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=1200&fit=max 1200w, https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=1920&fit=max 1920w, https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=2048&fit=max 2048w, https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=3840&fit=max 3840w"
                src="https://images.prismic.io/nextjs-starter-prismic-blog/4bc2abf8-bc19-4f5e-a211-2a144e7da31e_eugene-zhyvchik-qCi68LrS3Js-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1600%2C3413%2C1920&w=3840&fit=max"
              />
            </div>
            <figcaption className="text-center font-serif italic tracking-tight text-slate-500">
              <p className="mb-7 last:mb-0">Yes, that's me!</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="font-serif text-3xl italic leading-relaxed">
            “{/* */}You go girl!{/* */}”{/* */} — {/* */}George Washington
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
            <p className="mb-7 last:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <a
                target="_blank"
                className="underline decoration-1 underline-offset-2"
                rel="noreferrer"
                href="https://prismic.io"
              >
                Sollicitudin
              </a>{" "}
              eu tincidunt porta condimentum mauris interdum facilisis. Maecenas
              augue netus faucibus lorem. Nulla sed non, elementum mi netus libero.
              Tempor quam sed nunc fames bibendum id facilisis ipsum commodo. Neque,
              augue feugiat eu condimentum ut lorem. Faucibus mi tellus, iaculis
              facilisis sagittis. Viverra hendrerit magna pellentesque at convallis
              purus amet, pellentesque et. Potenti tempor volutpat massa tortor
              mauris tincidunt tellus diam pharetra. Viverra praesent lacinia dictum
              tortor erat risus nulla gravida sed. Platea varius venenatis habitasse
              est maecenas sapien eu, volutpat. Cursus diam auctor neque ut. Tempor,
              in tortor odio in mollis sollicitudin.
            </p>
          </div>
        </div>
      </section>
    </main>

  )
}