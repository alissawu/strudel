// happy hardcore experimentation ~170 bpm, A minor
setcps(170/60/4)


// PRECHORUS
// four on the floor kick
let kick = s("tr909_bd*4").gain(0.9)
// offbeat open hats
let hats = s("~ tr909_oh ~ tr909_oh").gain(0.3)
// snare/clap on 2 and 4
let snare = s("~ tr909_cp ~ tr909_cp").gain(0.4)
// offbeat pumping bass, the "oom-PAH"
let bass = note("<[~ a2]*4 [~ f2]*4 [~ c2]*4 [~ g2]*4>")
  .s("gm_synth_bass_2").gain(0.8).scale("C4:chromatic")
let melody = n(`<
{[a5 e5] [a5 c6] [a5 e5] [a5 c6]}
{[f5 c5] [f5 a5] [f5 c5] [f5 a5]}
{[c6 g5] [c6 e6] [c6 g5] [c6 e6]}
{[g5 d5] [g5 b5] [g5 d5] [g5 b5]}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.3).attack(0.1).lpf(1500).sustain(0.85)
  .gain(0.3).room(1)
// supersaw lead
let lead = note("<[a5 e5 a5 c6]*2 [f5 c5 f5 a5]*2 [c6 g5 c6 e6]*2 [g5 d5 g5 b5]*2>")
  .s("supersaw").detune(0.15).unison(3)
  .lpf(4000).release(0.1).gain(0.35).room(0.4)
let harmony = n(`<
{a4 c5}
{f4 a4}
{c5 e5}
{g4 b4}
>`).sound("gm_synth_brass_2").scale("C4:chromatic").gain(0.4)

let prechorus = stack(
  kick,
  hats,
  snare,
  bass,
  melody,
  lead,
  harmony
)
// CHORUS
// melody
let melody1 = n(`<
{a5 c6@0.5 a5 [e5 a5] c6@0.5}
{f5 a5@0.5 f5 [c5 f5] a5@0.5}
{c6 e6@0.5 c6 [g5 c6] e6@0.5}
{g5 b5@0.5 g5 [d5 g5] b5@0.5}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.3).attack(0.1).lpf(1500).sustain(0.85)
  .gain(0.3).room(1)
// lead
let lead1 = note(`<
{a5 c6@0.5 a5 [e5 a5] c6@0.5}
{f5 a5@0.5 f5 [c5 f5] a5@0.5}
{c6 e6@0.5 c6 [g5 c6] e6@0.5}
{g5 b5@0.5 g5 [d5 g5] b5@0.5}
>`)
  .s("supersaw").detune(0.15).unison(3)
  .lpf(4000).release(0.1).gain(0.35).room(0.4)
// bass
let bass1 = note("<[~ a2]*4 [~ f2]*4 [~ c3]*4 [~ g2]*4>").s("gm_synth_bass_2").gain(0.5)
// harmony
let harmony1 = n(`<
{a3, c4, e4}
{f3, f4}
{c4, g3}
{d4, g3, b3}
>`).sound("gm_synth_brass_2").scale("C4:chromatic").gain(0.3)
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
let chorus = stack(
  melody1,
  lead1,
  kick1,
  snare1,
  bass1,
  harmony1
)


// GAP: riser + silence on the last beat
let gap = s("[white*16]@3 ~")
  .lpf(saw.range(500, 10000)).gain(saw.range(0.1, 0.5))

// DROP
let dropKick = s("tr909_bd*4").shape(0.5).gain(1)
let dropHats = s("tr909_hh*16").gain(0.2)
let dropClap = s("~ tr909_cp ~ tr909_cp").gain(0.5)

let dropBass = note("<[~ a1]*4 [~ f1]*4 [~ c2]*4 [~ e1]*4>")
  .s("sawtooth").lpf(900).decay(0.15).sustain(0).gain(0.6)

let stabs = note(`<
[~ [a3,c4,e4]]*4 [~ [f3,a3,c4]]*4
[~ [g3,c4,e4]]*4 [~ [e3,g3,b3]]*4
>`).s("supersaw").detune(0.2).unison(5)
  .decay(0.1).sustain(0).lpf(2500).gain(0.35)

let dropLead = note(`<
[a4@3 a4@3 a4@2 c5@3 b4@3 g4@2]
[a4@3 a4@3 a4@2 c5@3 d5@3 c5@2]
[e5@3 e5@3 e5@2 e5@3 f5@3 e5@2]
[d5@3 d5@3 d5@2 e5@3 d5@3 b4@2]
>`).s("supersaw").detune(0.25).unison(5)
  .lpf(5000).release(0.05).gain(0.4).room(0.3)
  .superimpose(x => x.add(note(12)).gain(0.2))

let drop = stack(dropKick, dropHats, dropClap, dropBass, stabs, dropLead)

arrange( 
  [4, prechorus],
  [8, chorus],
  [1, gap],
  [16, drop]
)

