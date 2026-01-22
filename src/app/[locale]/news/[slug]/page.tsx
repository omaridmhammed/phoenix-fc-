import { news } from '@/data/news';
import { notFound } from 'next/navigation';
import { Link } from '@/navigation';
import { format } from 'date-fns';

export function generateStaticParams() {
    return news.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = news.find((n) => n.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-24 pb-16 min-h-screen bg-white text-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <Link href="/news" className="text-gray-500 hover:text-black uppercase text-sm font-bold mb-8 inline-block">
                    &larr; Back to News
                </Link>

                <header className="mb-8">
                    <div className="flex items-center gap-4 text-sm font-bold uppercase text-gray-500 mb-4">
                        <span className="text-phoenix-green">{post.category}</span>
                        <span>•</span>
                        <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 font-serif leading-relaxed">
                        {post.summary}
                    </p>
                </header>

                <div className="aspect-video bg-gray-200 mb-12 rounded-sm overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase">Article Image Placeholder</div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-800">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <blockquote>
                        "This is a sample quote from the article that highlights a key point."
                    </blockquote>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
        </article>
    );
}
