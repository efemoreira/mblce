"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 2000); // 2 segundos
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Página não encontrada</h1>
      <p className="text-lg text-gray-700 mb-8">Você será redirecionado para a página inicial em instantes...</p>
      <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></span>
    </div>
  );
}
