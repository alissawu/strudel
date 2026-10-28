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

let breakdown = stack(pad, bdMelody)

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
[a4@3 a4@3 a4@2 ~@8]
[a4@3 a4@3 a4@2 ~@8]
[e5@3 e5@3 e5@2 ~@8]
[d5@3 d5@3 d5@2 ~@8]
[a4@3 a4@3 a4@2 c5@3 b4@3 g4@2]
[a4@3 a4@3 a4@2 c5@3 d5@3 c5@2]
[e5@3 e5@3 e5@2 e5@3 f5@3 e5@2]
[d5@3 d5@3 d5@2 e5@3 d5@3 b4@2]
>`).s("supersaw").detune(0.25).unison(5)
  .release(0.05).gain(0.35)
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
// snare/clap
let snare1 = s(`<
[tr909_cp, tr808_cr ~ ~ ~]
[~]
[~]
[~]
>`).gain(0.7).sustain(1).release(0.3)
let chorus = stack(kick1, snareRoll, crash, bass1, pad, riser)


// GAP: riser + silence on the last beat
let gap = s("[white*16]@3 ~")
  .lpf(saw.range(500, 10000)).gain(saw.range(0.1, 0.5))

// DROP -- missing depth?
let dropCrash = s("<tr808_cr ~ ~ ~>").gain(0.6) // crash on the first beat
let hardKick = note("a1*4").s("sine")
  .penv(36).pdecay(0.06)      // pitch drops fast = punch
  .decay(0.35).sustain(0)
  .shape(0.7).gain(0.9)       // distortion = grit
let dropKick = stack(s("tr909_bd*4").gain(0.4), hardKick)
let dropHats = s("tr909_hh*16").gain(0.2)
let dropClap = s("~ tr909_cp ~ tr909_cp").gain(0.5)
// drop bass
let sub = note("<[~ a1]*4 [~ f1]*4 [~ c2]*4 [~ e1]*4>")
  .s("sine").decay(0.2).sustain(0).gain(0.4)
let dropBass = note("<[~ a1, a2]*4 [~ f1, f2]*4 [~ c2, c3]*4 [~ e1, e2]*4>")
  .s("sawtooth").lpf(900).decay(0.15).sustain(0).gain(0.5)
let stabs = note(`<
[~ [a3,c4,e4]]*4 [~ [f3,a3,c4]]*4
[~ [g3,c4,e4]]*4 [~ [e3,g3,b3]]*4
>`).s("supersaw").detune(0.2).unison(5)
  .decay(0.12).sustain(0).lpf(3500).gain(0.35)

let dropTop = bdMelody
  .s("supersaw").detune(0.3).unison(7)
  .lpf(6000).release(0.2).gain(0.45).room(0.5)
  .superimpose(x => x.add(note(12)).gain(0.15))
let dropLead = note(`<
[a4@3 a4@3 a4@2 c5@3 b4@3 g4@2]
[a4@3 a4@3 a4@2 c5@3 d5@3 c5@2]
[e5@3 e5@3 e5@2 e5@3 f5@3 e5@2]
[d5@3 d5@3 d5@2 e5@3 d5@3 b4@2]
>`).s("supersaw").detune(0.25).unison(5)
  .lpf(3000).release(0.05).gain(0.25)

let dropBase = stack(dropKick, dropHats, dropClap, dropBass, sub, pad, dropCrash, stabs)

let dropA = stack(dropBase, dropLead.gain(0.4).lpf(5000))
let dropB = stack(dropBase, dropTop)

arrange(
  [16, breakdown],
  [8, prechorus],
  [8, chorus],
  [1, gap],
  [8, dropA],
  [8, dropB]
)
