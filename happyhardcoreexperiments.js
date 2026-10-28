// happy hardcore experimentation ~170 bpm, A minor
setcps(170/60/4)

// BREAKDOWN
let bdMelody = note(`<
[c5@2 b4 c5]
[f5@3 e5]
[e5@2 d5 e5]
[b4@3 ~]
[c5@2 b4 c5]
[f5 e5 f5 a5]
[g5@2 e5 c5]
[b4@2 d5 e5]

[c5@2 b4 c5]
[f5@3 e5]
[e5@2 d5 e5]
[g5@3 ~]
[c6@2 b5 a5]
[a5 g5 f5 e5]
[e5 e5 g5 g5]
[d5@3 d5@3 d5@2 e5@3 d5@3 b4@2]
>`).s("supersaw").detune(0.15).unison(3)
  .attack(0.05).release(0.4).lpf(3000)
  .gain(0.3).room(0.6)
let pad = note("<[a3,c4,e4] [f3,a3,c4] [g3,c4,e4] [e3,g3,b3]>")
  .s("gm_synth_strings_1").attack(0.3).release(0.5)
  .gain(0.3).room(0.5)
// breakdown drums
let bdDrums1 = stack(
  s("tr909_bd ~ ~ ~").gain(0.5),
  s("~ tr909_oh ~ tr909_oh").gain(0.15)
)
let bdDrums2 = stack(
  s("tr909_bd ~ tr909_bd ~").gain(0.6),
  s("~ tr909_oh ~ tr909_oh").gain(0.2),
  s("~ tr909_cp ~ tr909_cp").gain(0.25)
)
let bdDrums = arrange([8, bdDrums1], [8, bdDrums2])
let bdCrash = s("<tr808_cr ~!15>").gain(0.4)

let breakdown = stack(pad, bdMelody, bdDrums, bdCrash)


// PRECHORUS
// four on the floor kick
let kick = s("tr909_bd*4").gain(0.9)
// offbeat open hats
let hats = s("~ tr909_oh ~ tr909_oh").gain(0.3)
// snare/clap on 2 and 4
let snare = s("~ tr909_cp ~ tr909_cp").gain(0.4)
// offbeat pumping bass, the "oom-PAH"
let bass = note("<[~ a2]*4 [~ f2]*4 [~ c3]*4 [~ e2]*4>")
  .s("gm_synth_bass_2").gain(0.8)
// first half of the drop riff, filter opens over 4 bars
let tease = note(`<
[c5 ~ c5 b4 ~ ~ ~ ~]
[a4 ~ a4 g4 ~ ~ ~ ~]
[g4 ~ g4 e4 ~ ~ ~ ~]
[g4 ~ g4 a4 ~ ~ ~ ~]
[c5 ~ c5 b4 ~ c5 b4 ~]
[a4 ~ a4 g4 ~ a4 g4 ~]
[g4 ~ g4 e4 ~ e4 g4 ~]
[g4 ~ g4 a4 ~ b4@3]
>`).s("supersaw").detune(0.25).unison(5)
  .release(0.1).gain(0.35)
  .lpf(saw.range(800, 5000).slow(8))

let prechorus = stack(
  kick,
  hats,
  snare,
  bass,
  pad,
  tease
)
// CHORUS
let bass1 = note("<[~ a2]*4 [~ f2]*4 [~ c3]*4 [~ e2]*4>")
  .s("gm_synth_bass_2").gain(0.7)
let snareRoll = s(`<
[~ [tr909_sd,tr909_cp] ~ [tr909_sd,tr909_cp]]
[~ [tr909_sd,tr909_cp] ~ [tr909_sd,tr909_cp]]
[~ [tr909_sd,tr909_cp] ~ [tr909_sd,tr909_cp]]
[~ [tr909_sd,tr909_cp] ~ [tr909_sd,tr909_cp]]
[[tr909_sd,tr909_cp]*4] [[tr909_sd,tr909_cp]*4]
[[tr909_sd,tr909_cp]*8] [[tr909_sd,tr909_cp]*16]
>`).speed(saw.range(0.8, 1.3).slow(8))
  .lpf(4000).room(0.5)
  .gain(saw.range(0.3, 0.7).slow(8))
// crash on the first beat only
let crash = s("<tr808_cr ~ ~ ~ ~ ~ ~ ~>").gain(0.5)
// rising synth, climbs an octave over 8 bars
let riser = note("a3*16")
  .add(note(saw.range(0, 12).slow(8)))
  .s("supersaw").detune(0.3).unison(5)
  .lpf(saw.range(1000, 6000).slow(8))
  .decay(0.05).sustain(0).gain(0.3)
// kick
let kick1 = s(`<
[[tr909_bd ~] ~ ~ [~ tr909_bd]]
[[tr909_bd ~] ~ ~ ~]
[[tr909_bd ~] ~ ~ ~]
[[tr909_bd ~] ~ [tr909_bd ~] ~]
[tr909_bd tr909_bd tr909_bd tr909_bd]
[tr909_bd tr909_bd tr909_bd tr909_bd]
[[tr909_bd tr909_bd] [tr909_bd tr909_bd] [tr909_bd tr909_bd] [tr909_bd tr909_bd]]
[[tr909_bd tr909_bd] [tr909_bd tr909_bd] [tr909_bd tr909_bd tr909_bd tr909_bd] [tr909_bd tr909_bd tr909_bd tr909_bd]]
>`).gain(1.2)
let chorus = stack(kick1, snareRoll, crash, bass1, pad, riser).hpf(saw.range(20, 500).slow(8))


// GAP: riser + silence on the last beat
let gap = s("[white*16]@3 ~")
  .lpf(saw.range(500, 10000)).gain(saw.range(0.1, 0.5))

// DROP 
let impact = note("<a1 ~!15>").s("sine")
  .penv(24).pdecay(0.3).decay(2).sustain(0)
  .shape(0.3).gain(0.8)
let hook = note(`<
[c6@2 b5 c6@3 b5@2]
[a5@2 g5 a5@3 g5@2]
[g5@2 e5 e5@3 g5@2]
[g5@2 a5@2 b5@4]

[c6@2 b5 c6@3 b5@2]
[a5@2 g5 a5@3 c6@2]
[e6@2 d6 c6@3 g5@2]
[g5@2 a5@2 b5@4]
>`).s("supersaw").detune(0.3).unison(7)
  .lpf(6000).release(0.3).gain(0.4).room(0.4)
  .superimpose(x => x.add(note(12)).gain(0.1))
let harmony = note(`<
[a5@2 g5 a5@3 g5@2]
[f5@2 e5 f5@3 e5@2]
[e5@2 c5 c5@3 e5@2]
[e5@2 e5@2 g5@4]

[a5@2 g5 a5@3 g5@2]
[f5@2 e5 f5@3 a5@2]
[c6@2 b5 g5@3 e5@2]
[e5@2 e5@2 g5@4]
>`).s("supersaw").detune(0.3).unison(5)
  .lpf(5000).release(0.3).gain(0.15).room(0.4)

let dropCrash = s("<tr808_cr ~ ~ ~>").gain(0.6) // crash on the first beat
let hardKick = note("a1*4").s("sine")
  .penv(36).pdecay(0.06)      // pitch drops fast = punch
  .decay(0.35).sustain(0)
  .shape(0.7).gain(0.9)       // distortion = grit
let dropKick = stack(s("tr909_bd*4").gain(0.4), hardKick)
let dropHats = s("tr909_hh*16").gain(0.2)
let dropClap = s("~ tr909_cp ~ tr909_cp").gain(0.5)
let dropLead = note(`<
[a4@3 a4@3 a4@2 c5@3 b4@3 g4@2]
[a4@3 a4@3 a4@2 c5@3 d5@3 c5@2]
[e5@3 e5@3 e5@2 e5@3 f5@3 e5@2]
[d5@3 d5@3 d5@2 e5@3 d5@3 b4@2]
>`).s("supersaw").detune(0.25).unison(5)
  .lpf(3000).release(0.05).gain(0.25)
// drop bass
let dropBass = note("<[~ a1]*4 [~ f1]*4 [~ c2]*4 [~ e1]*4>")
  .s("sawtooth").gain(0.7)
  .superimpose(x => x.add(note(12)).s("square").gain(0.35))
  .lpf(1500).decay(0.2).sustain(0.2)
  .shape(0.4)
let sub = note("<[~ a1]*4 [~ f1]*4 [~ c2]*4 [~ e1]*4>")
  .s("sine").decay(0.2).sustain(0).gain(0.5)
let pumpChords = note(`<
[a3,c4,e4]*8 [f3,a3,c4]*8
[g3,c4,e4]*8 [e3,g3,b3]*8
>`).s("supersaw").detune(0.25).unison(7)
  .lpf(3000).gain(0.35).room(0.3)
  .velocity("[0.15 1]*4")

let drop = stack(
  dropKick, dropHats, dropClap, dropCrash, impact, pumpChords,
  stack(dropBass, sub, hook, harmony).velocity("[0.5 1]*4")
)

// INTRO
let intro1 = stack(
  kick,
  hats,
  bass.lpf(600)
)

let introRiff = dropLead
  .lpf(saw.range(600, 2500).slow(8))
  .gain(0.25)

let intro2 = stack(
  kick,
  hats,
  snare,
  bass,
  pad.gain(0.2),
  introRiff
)
// VERSE: breakdown melody over the beat
let verse = stack(kick, hats, snare, bass, pad, bdMelody)


arrange(
  [8, intro1],
  [8, intro2],
  [16, verse],
  [8, prechorus],
  [8, chorus],
  [1, gap],
  [16, drop]
  // later: breakdown (no drums) → build 2 → drop 2 → outro
)._punchcard()