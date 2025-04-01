import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';
import { Helmet } from 'react-helmet-async';
import { marked } from 'marked';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Helmet>
        <title>{post.title} - AI Automation Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${post.coverImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {post.author.name}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center gap-1"
              >
                <Tag className="w-4 h-4" />
                {tag}
              </span>
            ))}
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold text-lg">{post.author.name}</p>
                <p className="text-gray-600">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}