import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white">
      <Head>
        <title>0Chat - Connect Seamlessly</title>
        <meta
          name="description"
          content="The most secure and user-friendly chat application."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto py-6 flex justify-between items-center px-4 lg:px-8">
       
      </header>

      <main className="container mx-auto text-center px-4 lg:px-8">
        <section className="hero mt-20">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Welcome to <span className="text-yellow-300">0Chat</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl">
            Connect with your friends and teams with ease, speed, and security.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="px-8 py-3 text-lg bg-yellow-300 text-blue-900 rounded-full shadow-md hover:bg-yellow-400 transition"
            >
              Join Now
            </a>
            <a
              href="#features"
              className="ml-4 px-8 py-3 text-lg bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition"
            >
              Learn More
            </a>
          </div>
        </section>

        <section id="features" className="mt-32">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose 0Chat?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white text-blue-900 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Secure Messaging</h3>
              <p className="mt-4">
                End-to-end encryption ensures your chats stay private.
              </p>
            </div>
            <div className="p-6 bg-white text-blue-900 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Lightning Fast</h3>
              <p className="mt-4">
                Experience real-time messaging with no delays.
              </p>
            </div>
            <div className="p-6 bg-white text-blue-900 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Customizable Themes</h3>
              <p className="mt-4">
                Personalize your chat experience with beautiful themes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-32 py-6 bg-blue-900 text-center">
        <p>© {new Date().getFullYear()} 0Chat. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export const metadata = {
  title: "0Chat",
  description: "0Chat helps you connect with people of your choice",
};
