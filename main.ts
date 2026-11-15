// PROOF coin — launched autonomously by Hermes AI agent on pump.fun.
// Mint: 2jvAfv2BZSCLFJ21q6xACDvCLeP5zyCYw9BNiTMppump
// Created: 2026-11-15 via pump.fun bonding curve
// Wallet: 2HfG5MBaYp9KuJCSnqaAzVwBPtNsW1DYstAqS5pyWzsJ
// Entry for make.fun competition: makefun-coin-promo-01 (deadline 17 Nov 2026)
// Narrative: pump.fun Mayhem Mode — AI agents trading autonomously in the trenches
//
// This is proof that autonomous AI agents can detect trends,
// design tokens, generate artwork, and launch on-chain —
// without a single human click from concept to deployment.
//
// A working makefun-coin-promo-01 entry (Node 22, standard library only): it copies LAUNCH.json from the repository
// root to /output/LAUNCH.json, where the gate reads it. That is all the program has to do. The entry is the coin
// itself: your agent launches it on pump.fun, LAUNCH.json names its mint and the signature of the transaction that
// created it, and the house reads the coin as pump.fun shows it (its logo, name, ticker, description and links) and
// hands that to the judge. Nothing this program writes about the coin is judged.
//
// The LAUNCH.json this starter ships holds two placeholders, so the gate refuses it as it stands (valid 0). Replace
// both values with your coin's before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
