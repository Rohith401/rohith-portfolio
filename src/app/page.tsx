import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <p className="text-2x1
       font-bold">Rohith</p>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
Hi, I am Rohith - welcome to my portfolio!            
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am learning python and building small projects.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="whitespace-nowrap flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-auto"
            href="https://github.com/Rohith401/guessing-game"
            target="_blank"
            rel="noopener noreferrer"
          >
           See my guessing game
          </a>
            <a
            className="whitespace-nowrap flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-auto"
            href="/quiz.html"
          >
            Play my quiz game
          </a>
           <a
            className="whitespace-nowrap flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-auto"
            href="/2048.html"
          >
            Play my 2048 game
          </a>
        </div>
      <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl font-bold text-black dark:text-zinc-50">My projects</p>
          <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg p-4 flex flex-col gap-2">
            <p className="text-lg font-bold text-black dark:text-zinc-50">Quiz game</p>
            <p className="text-zinc-600 dark:text-zinc-400">A 5-question quiz that runs in the browser and shows your score.</p>
            <a href="/quiz.html" className="text-blue-600 underline">Play it</a>
          </div>
          <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg p-4 flex flex-col gap-2">
            <p className="text-lg font-bold text-black dark:text-zinc-50">2048 game</p>
            <p className="text-zinc-600 dark:text-zinc-400">Slide the tiles and merge numbers to reach 2048.</p>
            <a href="/2048.html" className="text-blue-600 underline">Play it</a>
          </div>
        </div>
      </main>
    </div>
  );
}
