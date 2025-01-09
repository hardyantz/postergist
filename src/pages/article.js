export default function Article() {
    return (
        <main>
            <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                <div className="mx-auto w-full max-w-3xl">
                    <a className="font-semibold tracking-tight text-slate-400" href="/">
                        ← Back to articles
                    </a>
                </div>
            </div>
            <article>
                <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12 pb-0">
                    <div className="mx-auto w-full max-w-3xl">
                        <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                            Beach resort vacation
                        </h1>
                        <p className="font-serif italic tracking-tighter text-slate-500">
                            Mar 22, 2022
                        </p>
                    </div>
                </div>
                <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
                            <p className="mb-7 last:mb-0">
                                Massa sapien faucibus et molestie ac feugiat sed lectus. Dignissim
                                cras tincidunt lobortis feugiat vivamus at augue. Pharetra pharetra
                                massa massa ultricies. Ut morbi tincidunt augue interdum. Volutpat
                                odio facilisis mauris sit amet massa vitae. In dictum non
                                consectetur a erat nam. Pulvinar pellentesque habitant morbi
                                tristique senectus et.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                    <div className="mx-auto w-full max-w-3xl">
                        <figure className="grid grid-cols-1 gap-4">
                            <div className="bg-gray-100">
                                <img
                                    loading="lazy"
                                    width={2800}
                                    height={3500}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full"
                                    sizes="100vw"
                                    srcSet="https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=640 640w, https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=750 750w, https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=828 828w, https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=1080 1080w, https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=1200 1200w, https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=1920 1920w, https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=2048 2048w, https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=3840 3840w"
                                    src="https://images.prismic.io/nextjs-starter-prismic-blog/bc4d45ad-35d5-4f4f-a5ec-b7a822193841_patrick-hinz-mtZ_nK35Kmo-unsplash.jpg?auto=compress%2Cformat&fit=max&w=3840"
                                    style={{ color: "transparent" }}
                                />
                            </div>
                        </figure>
                    </div>
                </section>
                <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
                            <p className="mb-7 last:mb-0">
                                This is Rich Text, which includes both{" "}
                                <a
                                    target="_blank"
                                    className="underline decoration-1 underline-offset-2"
                                    rel="noreferrer"
                                    href="https://prismic.io"
                                >
                                    external links
                                </a>{" "}
                                and links to{" "}
                                <a
                                    className="underline decoration-1 underline-offset-2"
                                    href="/about"
                                >
                                    internal documents
                                </a>
                                . Links should be handled intelligently or everything might break.
                                Don't forget about media, too! Do your best to render images using
                                an HTML Serializer.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                    <div className="mx-auto w-full max-w-6xl">
                        <figure className="grid grid-cols-1 gap-4">
                            <div className="bg-gray-100">
                                <img
                                    loading="lazy"
                                    width={5472}
                                    height={3648}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full"
                                    sizes="100vw"
                                    srcSet="https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=640 640w, https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=750 750w, https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=828 828w, https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=1080 1080w, https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=1200 1200w, https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=1920 1920w, https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=2048 2048w, https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=3840 3840w"
                                    src="https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?auto=compress%2Cformat&fit=max&w=3840"
                                    style={{ color: "transparent" }}
                                />
                            </div>
                        </figure>
                    </div>
                </section>
                <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                    <div className="mx-auto w-full max-w-4xl">
                        <div className="font-serif text-3xl italic leading-relaxed">
                            “Hiking is awesome!” — Abraham Lincoln
                        </div>
                    </div>
                </section>
                <section className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
                            <p className="mb-7 last:mb-0">
                                As you know hiking can be a very fulfilling orem ipsum dolor sit
                                amet, animal saperet et ius, eu mei nominavi democritum. Tempor
                                prompta mnesarchum eam te. Vivendum recteque ad quo, et vim quot
                                scaevola hendrerit, sint option euripidis vel te. Impedit veritus
                                qui eu, vel modo accusam at. Te dicit accusamus mea, alia omnium no
                                est.
                            </p>
                            <p className="mb-7 last:mb-0">
                                Mea cu possit invidunt complectitur, sea omnis vivendum ne. Eros
                                dictas assentior ne qui. At has aperiam reformidans. Rebum choro
                                imperdiet ex mei. Ea vide elit percipit mel, id eam invidunt
                                vituperatoribus. Munere temporibus consequuntur no sit.
                            </p>
                            <p className="mb-7 last:mb-0">
                                Justo utroque dissentias at est, possim dolorem assueverit eam ut.
                                Te erat illud aperiri est. Cu duo sanctus scriptorem, nam te habeo
                                fuisset quaestio. Eam et error simul. Ferri utamur instructior vim
                                in, ei per mazim congue, nusquam vituperatoribus eos an. Ne mea
                                salutatus vulputate. Tota tractatos argumentum vis te.
                            </p>
                            <p className="mb-7 last:mb-0">
                                Et iusto nostrud vel, cu vis regione virtute. Malis errem ex quo, an
                                est percipitur dissentias. Te facer primis alterum vel. Tale
                                senserit sadipscing qui et. Prima fabellas facilisis at has.
                            </p>
                            <p className="mb-7 last:mb-0">
                                Vel erat splendide expetendis et, at probo dictas nominavi pro. Ius
                                facilis electram maluisset et. Minim dignissim ne eam, docendi
                                indoctum conclusionemque mea ne. Ea menandri quaestio corrumpit his.
                                Vim nisl lucilius interesset in, cu porro accusamus accommodare his.
                            </p>
                            <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl mb-7 mt-12 first:mt-0 last:mb-0">
                                Heading 1
                            </h2>
                            <h3 className="font-sans font-semibold tracking-tighter text-slate-800 text-2xl mb-7 last:mb-0">
                                Heading 2
                            </h3>
                            <h4 className="font-sans font-semibold tracking-tighter text-slate-800 text-xl mb-7 last:mb-0">
                                Heading 3
                            </h4>
                            <ul className="mb-7 pl-4 last:mb-0 md:pl-6">
                                <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">
                                    As you know hiking can be a very fulfilling orem ipsum dolor sit
                                    amet.
                                </li>
                                <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">
                                    Animal saperet et ius, eu mei nominavi democritum.{" "}
                                </li>
                            </ul>
                            <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
                                <code>Some preformatted content</code>
                            </pre>
                            <ol className="mb-7 pl-4 last:mb-0 md:pl-6">
                                <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">
                                    As you know hiking can be a very fulfilling orem ipsum dolor sit
                                    amet.
                                </li>
                                <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">
                                    animal saperet et ius, eu mei nominavi democritum.{" "}
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
            </article>
            <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
                <div className="mx-auto w-full max-w-3xl">
                    <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
                        <hr className="h-px w-1/2 border-0 bg-slate-200 md:max-w-sm" />
                        <div className="w-full">
                            <h1 className="font-sans font-semibold tracking-tighter text-slate-800 text-2xl mb-10">
                                Latest articles
                            </h1>
                            <ul className="grid grid-cols-1 gap-12">
                                <li>
                                    <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                                        <a href="/articles/hiking-through-the-woods">
                                            Hiking through the woods
                                        </a>
                                    </h1>
                                    <p className="font-serif italic tracking-tighter text-slate-500">
                                        Apr 12, 2022
                                    </p>
                                </li>
                                <li>
                                    <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                                        <a href="/articles/beach-resort-vacation">
                                            Beach resort vacation
                                        </a>
                                    </h1>
                                    <p className="font-serif italic tracking-tighter text-slate-500">
                                        Mar 22, 2022
                                    </p>
                                </li>
                                <li>
                                    <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                                        <a href="/articles/perilous-yoga">Perilous yoga</a>
                                    </h1>
                                    <p className="font-serif italic tracking-tighter text-slate-500">
                                        Jan 6, 2022
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}