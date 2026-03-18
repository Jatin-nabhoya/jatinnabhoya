import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-30">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-mono">
              I&#39;m Jatin Nabhoya. {' '}
              <span className="text-[#C778DD]">Data Scientist</span> & {' '}
              <span className="text-[#C778DD]">Machine Learning Engineer.</span>
            </h1>
            <p className="text-[#ABB2BF]">
              I build impactful data solutions and scalable machine learning models.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#contact"
                className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] hover:text-white transition-colors"
              >
                Contact me!!
              </a>
              <a
                href="https://github.com/Jatin-Nabhoya"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#ABB2BF] px-4 py-2 hover:border-[#C778DD] hover:text-white transition-colors"
              >
                My Github <span className="ml-2">{'->'}</span>
              </a>
            </div>
          </div>

          {/* Right Content with Image */}
          <div className="lg:w-1/2 relative">
            {/* Decorative Squares */}
            <div className="absolute -right-4 top-4">
              <div className="relative w-16 h-16">
                <div className="absolute border border-[#C778DD] w-full h-full"></div>
                <div className="absolute border border-[#C778DD] w-full h-full rotate-45"></div>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/myphoto.jpeg"
                alt="Jatin Nabhoya"
                className="w-full"
              />

              {/* Dots Pattern */}
              <div className="absolute -right-8 bottom-8 w-24 h-24 dots-pattern"></div>

              {/* Currently Working Badge */}
              <div className="absolute -bottom-6 left-6 right-6 bg-[#282C33] p-2 border border-[#ABB2BF]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C778DD] rounded-full"></div>
                  <span className="text-[#C778DD]">Building something meaningful — stay tuned.</span>
                  {/* <span className="text-[#ABB2BF]">Portfolio</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 relative max-w-2xl">
          {/* Quote Box */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -left-12 -top-8 w-24 h-24">
              <div className="relative w-full h-full">
                <div className="absolute border border-[#C778DD]/20 w-full h-full"></div>
                <div className="absolute border border-[#C778DD]/20 w-full h-full rotate-45"></div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 dots-pattern opacity-20"></div>

            {/* Quote Content */}
            <div className="border border-[#C778DD]/20 p-8 bg-[#282C33]">
              <div className="relative">
                <span className="absolute -top-6 -left-4 text-4xl text-[#C778DD]">&ldquo;</span>
                <p className="text-xl font-mono">
                  Artificial intelligence is the new electricity.
                </p>
                <div className="flex justify-end mt-4">
                  <p className="text-[#ABB2BF]">- Andrew Ng</p>
                </div>
                <span className="absolute -bottom-6 -right-4 text-4xl text-[#C778DD] rotate-180">&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 
