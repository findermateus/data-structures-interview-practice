import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResultBlock({ label, value }: { label: string; value: unknown }) {
  return (
    <Card>
      <CardHeader className="pb-2 pt-3 px-4">
        <CardTitle className="text-[11px] font-semibold flex items-center gap-2 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <pre className="text-xs text-muted-foreground bg-muted rounded-md p-3 overflow-x-auto whitespace-pre-wrap break-all">
          {JSON.stringify(value, null, 2)}
        </pre>
      </CardContent>
    </Card>
  );
}
