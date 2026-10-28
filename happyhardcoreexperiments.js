// happy hardcore transcription ~170 bpm, F minor
setcps(170/60/4)


// PRECHORUS
// four on the floor kick
let kick = s("tr909_bd*4").gain(0.9)
// offbeat open hats
let hats = s("~ tr909_oh ~ tr909_oh").gain(0.3)
// snare/clap on 2 and 4
let snare = s("~ tr909_cp ~ tr909_cp").gain(0.4)
// offbeat pumping bass, the "oom-PAH"
let bass = note("<[~ c2]*4 [~ g2]*4>")
  .s("gm_synth_bass_2").gain(0.8).scale("C4:chromatic")
let melody = n(`<
{[c6 g5] [c6 e6] [c6 g5] [c6 e6]}
{[g5 d5] [g5 b5] [g5 d5] [g5 b5]}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.3).attack(0.1).lpf(1500).sustain(0.85)
  .gain(0.3).room(1)
// supersaw lead
let lead = note("<[c6 g5 c6 e6]*2 [g5 d5 g5 b5]*2>")
  .s("supersaw").detune(0.15).unison(3)
  .lpf(4000).release(0.1).gain(0.35).room(0.4)
let harmony = n(`<
{c5 e5}
{g4 b4}
>`).sound("gm_synth_brass_2").scale("C4:chromatic").gain(0.4)

// CHORUS
// melody
$: n(`<
{a5 c6@0.5 a5 [e5 a5] c6@0.5}
{f5 a5@0.5 f5 [c5 f5] a5@0.5}
{c6 e6@0.5 c6 [g5 c6] e6@0.5}
{g5 b5@0.5 g5 [d5 g5] b5@0.5}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.3).attack(0.1).lpf(1500).sustain(0.85)
  .gain(0.3).room(1)
// lead
$: note(`<
{a5 c6@0.5 a5 [e5 a5] c6@0.5}
{f5 a5@0.5 f5 [c5 f5] a5@0.5}
{c6 e6@0.5 c6 [g5 c6] e6@0.5}
{g5 b5@0.5 g5 [d5 g5] b5@0.5}
>`)
  .s("supersaw").detune(0.15).unison(3)
  .lpf(4000).release(0.1).gain(0.35).room(0.4)
// kick
$: s(`<
[[tr909_bd ~] ~ ~ [~ tr909_bd]]
[[tr909_bd ~] ~ ~ ~]
[[tr909_bd ~] ~ ~ ~]
[[tr909_bd ~] ~ [tr909_bd ~] ~]
>`).gain(1.2)
// snare/clap
$: s(`<
[tr909_cp, tr808_cr ~ ~ ~]
[~]
[~]
[~]
>`).gain(0.5).release(0.3)
// bass
$: note("<[~ a2]*4 [~ f2]*4 [~ c3]*4 [~ g2]*4>").s("gm_synth_bass_2").gain(0.5)
// harmony
$: n(`<
{a3, c4, e4}
{f3, f4}
{c4, g4}
{d4, g4, b4}
>`).sound("gm_synth_brass_2").scale("C4:chromatic").gain(0.3)



