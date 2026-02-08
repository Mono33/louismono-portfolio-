"use client";

export function HeroBackground() {
  return (
    <>
      {/* Gradient background - Night (left) to Day (right) transition */}
      <div className="absolute inset-0">
        {/* Base night color */}
        <div className="absolute inset-0 bg-[#050a15]" />
        
        {/* Day side warm glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(45, 35, 20, 0.6) 70%, rgba(60, 45, 25, 0.8) 100%)'
          }}
        />
        
        {/* Sun radial glow */}
        <div 
          className="absolute top-0 right-0 w-[60%] h-full"
          style={{
            background: 'radial-gradient(ellipse at 90% 20%, rgba(255, 180, 80, 0.15) 0%, rgba(255, 150, 50, 0.08) 30%, transparent 60%)'
          }}
        />
        
        {/* Moon radial glow */}
        <div 
          className="absolute top-0 left-0 w-[50%] h-full"
          style={{
            background: 'radial-gradient(ellipse at 10% 20%, rgba(180, 200, 255, 0.1) 0%, rgba(150, 180, 230, 0.05) 30%, transparent 50%)'
          }}
        />
      </div>
      
      {/* Stars on the night side (left half only) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute top-[15%] left-[12%] w-1 h-1 bg-white rounded-full opacity-50" />
        <div className="absolute top-[8%] left-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[25%] left-[8%] w-1 h-1 bg-white rounded-full opacity-40" />
        <div className="absolute top-[20%] left-[25%] w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[5%] left-[30%] w-1 h-1 bg-white rounded-full opacity-60" />
        <div className="absolute top-[30%] left-[15%] w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[12%] left-[35%] w-1 h-1 bg-white rounded-full opacity-30" />
        <div className="absolute top-[18%] left-[3%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[35%] left-[22%] w-0.5 h-0.5 bg-white rounded-full opacity-40" />
        <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[7%] left-[40%] w-0.5 h-0.5 bg-white rounded-full opacity-25" />
      </div>

      {/* Moon - Left side */}
      <div className="absolute left-[8%] sm:left-[10%] top-[12%] sm:top-[18%]">
        <div 
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#f0f0f8] via-[#d8d8e8] to-[#c0c0d0]"
          style={{
            boxShadow: '0 0 80px rgba(200, 220, 255, 0.4), 0 0 160px rgba(180, 200, 255, 0.2), 0 0 240px rgba(160, 180, 240, 0.1)',
            animation: 'moon-glow 4s ease-in-out infinite'
          }}
        >
          {/* Moon craters */}
          <div className="absolute top-[20%] left-[25%] w-4 h-4 rounded-full bg-[#b8b8c8] opacity-40" />
          <div className="absolute top-[50%] left-[55%] w-3 h-3 rounded-full bg-[#c0c0d0] opacity-30" />
          <div className="absolute top-[60%] left-[25%] w-3.5 h-3.5 rounded-full bg-[#b0b0c0] opacity-35" />
          <div className="absolute top-[35%] left-[65%] w-2 h-2 rounded-full bg-[#c8c8d8] opacity-25" />
        </div>
      </div>

      {/* Sun - Right side */}
      <div className="absolute right-[8%] sm:right-[10%] top-[12%] sm:top-[18%]">
        <div 
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#fffae0] via-[#ffd700] to-[#ff9500]"
          style={{
            boxShadow: '0 0 80px rgba(255, 200, 100, 0.5), 0 0 160px rgba(255, 180, 50, 0.3), 0 0 240px rgba(255, 150, 30, 0.15)',
            animation: 'sun-glow 3s ease-in-out infinite'
          }}
        >
          {/* Sun rays */}
          <div className="absolute -inset-3 rounded-full border-2 border-[#ffd700]/30" />
          <div className="absolute -inset-6 rounded-full border-2 border-[#ffd700]/20" />
          <div className="absolute -inset-10 rounded-full border border-[#ffd700]/10" />
        </div>
      </div>

      {/* Horizon line - ocean meets sky */}
      <div className="absolute bottom-28 left-0 right-0 h-px bg-gradient-to-r from-[#2a4a6a]/50 via-[#3a5a7a]/30 to-[#5a4a3a]/50" />

      {/* Ocean base color */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-36"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 40, 60, 0.4) 30%, rgba(8, 30, 50, 0.7) 100%)'
        }}
      />
      
      {/* Sun reflection on water (golden path on right side) */}
      <div 
        className="absolute bottom-0 right-[5%] w-[30%] h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 180, 80, 0.08) 40%, rgba(255, 150, 50, 0.15) 100%)',
          filter: 'blur(8px)'
        }}
      />
      
      {/* Moon reflection on water (silver path on left side) */}
      <div 
        className="absolute bottom-0 left-[5%] w-[25%] h-28"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(180, 200, 255, 0.05) 40%, rgba(160, 180, 240, 0.1) 100%)',
          filter: 'blur(8px)'
        }}
      />

      {/* Ocean Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-36 overflow-hidden">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>

      {/* Subtle center vignette to focus on content */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(5, 10, 20, 0.3) 100%)'
        }}
      />
    </>
  );
}
