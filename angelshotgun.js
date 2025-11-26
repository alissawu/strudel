setcpm(36/4)


// check out later
// gm_synth_brass_2
// gm_french_horn - some sound brassy but some are like angel background
// gm_english_horn

// vary maybe a little
let bkgd = n(`<
  {f#4 g4 f#4 e4}
  {[b3, f#4] [g3, g4] [d4, f#4] [a3, e4]}
>`).scale("C2:chromatic").sound("gm_pad_warm:6").room(2).lpf(500)
  .hpf(300).attack(0.5).release(1.5).sustain(1).decay(0.75).gain(0.05)
  .lpenv(-3).pan(cosine.slow(2))
// vary this
let front = n(`<
  {~ [f#4 f#4] ~ [g4 g4] ~ [f#4 f#4] e4@2}!2
>`).scale("C2:chromatic").sound("gm_fx_echoes:7").room(2).lpf(500)
  .hpf(300).attack(0.5).release(1).sustain(1).decay(0.75).gain(0.2)
  .lpenv(-3).pan(sine.slow(2))
let bass = n(`<
{b1 g1 d2 c#2}>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<1000 800 600 400>*2")
  .room(1)
  .gain(0.05).resonance(0.6).pan(sine.slow(2))
let brass = n(`<
{a3 a3 a3 c#4}>`)
  .scale("C2:chromatic")
  .sound("gm_english_horn").sustain(0.5)
  .release(0.1)
  .lpf("<1000 800 600 400>*2")
  .room(1)
  .gain(0.05).pan(sine.slow(2))
$: stack(
  bkgd, bass, front, brass
)