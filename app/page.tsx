"use client";

import { useState } from "react";
import {
  categories,
  type Category,
  type Challenge,
  type ChallengeResult,
  getChallengesByCategory,
} from "@/lib/challenges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Clock, ExternalLink, Hash, LayoutList, Loader2, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { ResultBlock } from "@/components/result-block";
import { runChallenge } from "@/lib/actions/run-challenge";

const difficultyColor: Record<string, string> = {
  Easy: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Medium: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Hard: "text-rose-400 border-rose-400/30 bg-rose-400/10",
};

export default function Home() {
  const [selected, setSelected] = useState<Challenge | null>(null);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<ChallengeResult | null>(null);

  async function handleRun() {
    if (!selected) return;
    setRunning(true);
    setResult(null);
    try {
      const res = await runChallenge(selected.id);
      setResult(res);
    } finally {
      setRunning(false);
    }
  }

  function handleSelect(c: Challenge) {
    setSelected(c);
    setResult(null);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 font-mono">
      <div className="flex h-[calc(100vh-57px)]">
        <aside className="w-120 border-r border-white/5 flex flex-col">
          <div className="px-4 py-5 border-b border-white/5">
            <p className="text-xs font-semibold text-slate-200 tracking-wide">Desafios</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Selecione um para executar</p>
          </div>
          <Tabs defaultValue="Arrays" className="flex flex-col h-full w-full">
            <TabsList className="grid grid-cols-3 bg-white/5 rounded-lgh-auto w-full">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="text-[10px] py-1.5 rounded-md transition-colors
                  text-slate-400
                  hover:text-slate-200 hover:bg-white/8
                  data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300
                  data-[state=inactive]:hover:text-slate-200"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="flex-1 m-0 mt-0">
                <ScrollArea className="h-[calc(100vh-115px)]">
                  <div className="p-2 space-y-1">
                    {getChallengesByCategory(cat as Category).map((challenge) => (
                      <button
                        key={challenge.id}
                        onClick={() => handleSelect(challenge)}
                        className={cn(
                          "w-full text-left px-3 py-2.5 rounded-lg transition-all group flex items-start gap-2",
                          selected?.id === challenge.id
                            ? "bg-cyan-500/15 border border-cyan-500/30"
                            : "hover:bg-white/5 border border-transparent"
                        )}
                      >
                        <span className="text-[10px] text-slate-600 mt-0.5 w-7 shrink-0 text-right">
                          #{challenge.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className={cn(
                              "text-xs font-medium truncate",
                              selected?.id === challenge.id ? "text-cyan-300" : "text-slate-300 group-hover:text-white"
                            )}
                          >
                            {challenge.title}
                          </p>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[9px] px-1.5 py-0 mt-1 font-normal",
                              difficultyColor[challenge.difficulty]
                            )}
                          >
                            {challenge.difficulty}
                          </Badge>
                        </div>
                        <ChevronRight
                          size={12}
                          className={cn(
                            "mt-1 shrink-0 transition-opacity",
                            selected?.id === challenge.id
                              ? "text-cyan-400 opacity-100"
                              : "opacity-0 group-hover:opacity-40"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden">
          {selected ? (
            <>
              <div className="border-b border-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Hash size={14} className="text-slate-600" />
                      <span className="text-xs text-slate-500">{selected.number}</span>
                      <Badge
                        variant="outline"
                        className={cn("text-[10px] px-2 py-0", difficultyColor[selected.difficulty])}
                      >
                        {selected.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-[10px] px-2 py-0 text-slate-400 border-slate-700">
                        {selected.category}
                      </Badge>
                    </div>
                    <h1 className="text-xl font-bold text-white mb-1">{selected.title}</h1>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{selected.description}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 gap-1.5"
                      onClick={() => window.open(selected.url, "_blank")}
                    >
                      <ExternalLink size={12} />
                      LeetCode
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleRun}
                      disabled={running}
                      className="text-xs bg-cyan-500 hover:bg-cyan-400 text-black font-semibold gap-1.5 min-w-[90px]"
                    >
                      {running ? (
                        <>
                          <Loader2 size={12} className="animate-spin" /> Executando
                        </>
                      ) : (
                        <>
                          <Play size={12} /> Executar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <ScrollArea className="flex-1 p-6 overflow-y-auto">
                {!result && !running && (
                  <div className="flex flex-col items-center justify-center h-64 gap-3 text-slate-600">
                    <Play size={36} className="opacity-20" />
                    <p className="text-sm">
                      Clique em <strong className="text-slate-500">Executar</strong> para rodar o desafio
                    </p>
                  </div>
                )}

                {result && (
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs text-emerald-400">
                      <Clock size={12} />
                      <span>{result.timeMs < 1 ? result.timeMs.toFixed(4) : result.timeMs.toFixed(2)} ms</span>
                    </div>

                    <ResultBlock label="Payload" value={result.payload} color="cyan" />

                    <ResultBlock label="Resultado" value={result.result} color="emerald" />
                  </div>
                )}
              </ScrollArea>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-slate-600">
              <LayoutList size={48} className="opacity-10" />
              <p className="text-sm">Selecione um desafio na barra lateral</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
