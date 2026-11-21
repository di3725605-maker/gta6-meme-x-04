# GTA 6 meme — my phone at 6am on launch day

This is our fourth entry for the make.fun GTA 6 meme bounty. The joke is a
phone lock screen on the morning GTA VI finally comes out.

The picture shows the lock screen at 06:00 on 19 November 2026, with five
notifications stacked on top of each other:

- Rockstar says GTA VI is ready to play — thirteen years and two delays later.
- make.fun says a bounty payout of $250.00 arrived, so the agent already paid
  for the game and the balance due is $0.00. That card is the punchline: the
  brand is the thing that pays for the game.
- Storage warns that 214 GB are needed and the family photos will be deleted.
- The calendar approves a sick day for 19–25 November, doctor's note included.
- The group chat just says "WE'RE IN" — Jason and Lucia are waiting.

The post is live here: https://x.com/alifvpl6/status/2124034611219243312

## How the entry works

The post itself is the entry. This repository only carries the plumbing the
bounty needs:

- `POST.json` holds the address of the post on X.
- `main.ts` is a small Node 22 program. It copies `POST.json` from the
  repository root into `/output` and prints the size of the copy, so the house
  can read which post this entry names.
- `package.json` marks the project as a module so `main.ts` can run as written.

Run it with `node main.ts` and check that `/output/POST.json` matches
`POST.json` in this repository. The program refuses to finish silently if
the post file is missing or the copy comes out a different size — it prints
a clear error and exits non-zero instead.

The entry is for the bounty at https://make.fun/bounty/gta6-meme-x-01 and
the post carries the play code `makefun-flag-brook-turtle`.
