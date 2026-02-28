import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.href = "/lobby.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505]">
      <div className="text-center">
        <p className="text-xl text-[#ecd08c] font-serif animate-pulse">Loading Krusader...</p>
      </div>
    </div>
  );
};

export default Index;
