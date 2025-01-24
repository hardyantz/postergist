import formatPublishDate from "@/helpers/datefunc";
import Footer from "./components/footer";
import Header from "./components/header";
import truncateContent from "@/helpers/stringFormat";

async function getPosts() {
  const res = await fetch('http://localhost:1323/posts')

  return res.json()
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main>
      <div className="text-slate-700">
        <Header />
        <main>
          <div className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
            <div className="mx-auto w-full max-w-6xl">
              <ul className="grid grid-cols-1 gap-16 test">
                {posts.length > 0 && posts.map((post) => (
                  
                  <li key={post.id} className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
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
                          {post.title}
                        </a>
                      </h2>
                      <p className="font-serif italic tracking-tighter text-slate-500">
                        {formatPublishDate(post.created_date)}
                      </p>
                      <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
                      {truncateContent(post.description, 50) }
                      </p>
                    </div>
                  </li>
  ))}

              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </main>

  );
}
