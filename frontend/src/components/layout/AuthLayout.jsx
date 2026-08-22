export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-10 relative overflow-hidden">
      
      <div className="absolute -right-16 -top-24 w-[600px] h-[472px] bg-secondary/20 rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute -left-32 -bottom-24 w-[720px] h-[566px] bg-primary/20 rounded-full blur-[60px] pointer-events-none" />

      <div className="bg-card w-full max-w-[1200px] h-[700px] rounded-xl shadow-[0px_8px_32px_-12px_rgba(96,56,8,0.1)] flex overflow-hidden relative z-10">
        
        <div className="flex-1 relative hidden md:block">
          <img
            src="/farm-hero.jpg"
            alt="Farm field"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-16 left-16 right-16 text-white">
            <h2 className="text-4xl font-bold leading-tight mb-3">
              Cultivating<br />Tomorrow.
            </h2>
            <p className="text-lg text-white/90 max-w-md">
              Empowering farmers with data-driven insights for healthier crops and sustainable yields.
            </p>
          </div>
        </div>

        
        <div className="flex-1 flex flex-col justify-center px-10 py-16 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}