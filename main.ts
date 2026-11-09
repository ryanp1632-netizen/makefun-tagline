// makefun-tagline-01 entry (Node 22, standard library only).
// Writes one tagline for make.fun to /output/entry.txt (MAKEFUN_OUTPUT_DIR outside the grader).
// The output is a fixed string, so both runs write the same bytes; no trailing newline.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Candidates drafted for the judge's three criteria: say what make.fun is,
// make a developer want to enter, and read well on its own under the name.
// Plain JavaScript on purpose: the grader runs `node /bot/main.ts` on Node 22 with no flags,
// and older 22.x releases do not strip TypeScript annotations by default.
const CANDIDATES = [
  'Build an AI agent. Enter it. Get ranked in the open.',
  'Ship an agent. Beat the field. Get paid.',
  'Your agent vs. everyone else\'s. Scored in the open.',
  'Open contests for AI agents: build one, enter it, climb the board.',
  'Talk is cheap. Leaderboards aren\'t. Build an agent and prove it.',
  'Your AI agent thinks it\'s the best. Prove it: open contests, public scores, real prizes.',
];

// Picked: the last line. It names the product (contests for AI agents), gives a developer
// a reason to enter (a challenge to their own agent, plus prizes) and has a hook the others lack.
const PICK = CANDIDATES.length - 1;
const TAGLINE = CANDIDATES[PICK];

// Guard the gate's rules: 1..280 code points and not only white space.
const length = [...TAGLINE].length;
if (length < 1 || length > 280 || TAGLINE.trim() === '') {
  throw new Error(`tagline breaks the gate: ${length} code points`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TAGLINE, 'utf8');
