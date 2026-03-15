"use server";

import { type ChallengeResult, challenges } from "@/lib/challenges";

export async function runChallenge(id: string): Promise<ChallengeResult> {
  const challenge = challenges.find((c) => c.id === id);
  if (!challenge) throw new Error(`Challenge não encontrado: ${id}`);

  return challenge.run();
}
