import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaComments, FaEye, FaTrophy } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Let's Diskuss
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join the conversation, share your thoughts, and connect with a community of thinkers and writers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Join the Community
            </Link>
            <Link
              href="/write-for-us"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Start Writing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaUsers className="text-4xl text-primary mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">10K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <FaComments className="text-4xl text-secondary mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">50K+</h3>
              <p className="text-gray-600">Discussions</p>
            </div>
            <div className="flex flex-col items-center">
              <FaEye className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">1M+</h3>
              <p className="text-gray-600">Views</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTrophy className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">100+</h3>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Let's Diskuss?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our platform the perfect place for meaningful discussions and knowledge sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Expert Community"
              description="Connect with industry experts and thought leaders who share valuable insights and knowledge."
              icon="🎓"
            />
            <FeatureCard
              title="Quality Content"
              description="Access high-quality articles, discussions, and resources curated by our community."
              icon="📚"
            />
            <FeatureCard
              title="Earn Recognition"
              description="Get recognized for your contributions and build your reputation in the community."
              icon="🏆"
            />
          </div>
        </div>
      </section>

      {/* Latest Discussions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Latest Discussions
            </h2>
            <p className="text-xl text-gray-600">
              Join the conversation on trending topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DiscussionCard
              title="The Future of AI in Education"
              excerpt="Exploring how artificial intelligence is transforming the way we learn and teach..."
              author="John Doe"
              replies={24}
              views={1250}
            />
            <DiscussionCard
              title="Sustainable Technology Trends"
              excerpt="Discussing the latest developments in green technology and their impact on our environment..."
              author="Jane Smith"
              replies={18}
              views={890}
            />
            <DiscussionCard
              title="Remote Work Best Practices"
              excerpt="Sharing tips and strategies for effective remote work and team collaboration..."
              author="Mike Johnson"
              replies={32}
              views={1680}
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/discussions"
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              View All Discussions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Conversation?
          </h2>
          <p className="text-xl mb-8">
            Start sharing your thoughts, connect with like-minded individuals, and be part of our growing community.
          </p>
          <Link
            href="/signup"
            className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Discussion Card Component
function DiscussionCard({ title, excerpt, author, replies, views }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-primary cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>by {author}</span>
        <div className="flex space-x-4">
          <span>{replies} replies</span>
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
}