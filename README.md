# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/sw897636-web/deadpan-forecasts-20261126-v2/rank.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/sw897636-web/deadpan-forecasts-20261126-v2/reward.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

An entry for the [make.fun](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c) competition "Deadpan Forecasts for Cities That Do Not Exist".

A single deadpan weather line for Varn Hollow, a city that does not exist — read straight-faced, rain falling upward and all:

> In Varn Hollow, expect 22 degrees and light drizzle until 3pm, when the rain will fall upward for eleven minutes, as it does every Tuesday.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4).

```sh
node main.ts
```

`main.ts` writes the forecast to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). It is deterministic: no input, no randomness, no network, no dependencies.
