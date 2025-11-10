export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 - Small fast stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-small-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
        
        {/* Layer 2 - Medium stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-medium-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: Math.random() * 0.6 + 0.2
            }}
          />
        ))}
        
        {/* Layer 3 - Large slow stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-large-${i}`}
            className="absolute w-1.5 h-1.5 bg-white rounded-full animate-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-center gap-8 pt-8 text-gray-400">
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen px-4 -mt-20">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
            chronark
          </h1>
          <p className="text-gray-400 text-lg">
            I'm building{' '}
            <a 
              href="https://unkey.dev" 
              className="text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              unkey.dev
            </a>{' '}
            to solve API authentication and authorization for developers.
          </p>
        </main>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(-5px, -20px);
          }
          75% {
            transform: translate(-15px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-20px, 10px);
          }
          50% {
            transform: translate(20px, -15px);
          }
          75% {
            transform: translate(10px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-drift {
          animation: drift 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
