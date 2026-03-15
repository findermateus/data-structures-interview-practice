import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ResultBlock({ label, value, color }: { label: string; value: unknown; color: "cyan" | "emerald" }) {
  const borderColor = color === "cyan" ? "border-cyan-500/20" : "border-emerald-500/20";
  const labelColor = color === "cyan" ? "text-cyan-400" : "text-emerald-400";
  const dotColor = color === "cyan" ? "bg-cyan-400" : "bg-emerald-400";

  return (
    <Card className={cn("bg-white/3 border", borderColor)}>
      <CardHeader className="pb-2 pt-3 px-4">
        <CardTitle className={cn("text-[11px] font-semibold flex items-center gap-2", labelColor)}>
          <span className={cn("w-1.5 h-1.5 rounded-full", dotColor)} />
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <pre className="text-xs text-slate-300 bg-black/30 rounded-md p-3 overflow-x-auto whitespace-pre-wrap break-all">
          {JSON.stringify(value, null, 2)}
        </pre>
      </CardContent>
    </Card>
  );
}