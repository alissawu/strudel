setcpm(36/4)

// notes
// gm_tuba:0 (muffled tuba)
// gm_fx_atmosphere(13):2 (i think?) - kinda angelic
// gm_french_horn(5):1 and 5 (the last one. or is it 5?) (distant)
//tr808 1, 6


// intro
let drums = s("tr808_bd:1, tr808_bd:6")
  .struct(`<
  { 1 [~@7 1] 1 1}
  >`).gain("<0.3 0.2 0.2 0.2>*4").sustain(0.5).lpf(100)
let bkgd = n(`<
  {f#4 g4 f#4 e4}
  {[b3, f#4] [g3, g4] [d4, f#4] [a3, e4]}
>`).scale("C2:chromatic").sound("gm_pad_warm:6").room(2).lpf(500)
  .hpf(300).attack(0.5).release(1.5).sustain(1).decay(0.75).gain(0.05)
  .lpenv(-3).pan(cosine.slow(2))
let front = n(`<
{~}
  {~ [f#3 f#3, b3 b3, d4 d4, f#4 f#4, f#5 f#5] ~ [g2 g2, g3 g3, d4 d4, g4 g4, g5 g5] ~ [f#3 f#3, a3 a3, d4 d4, f#4 f#4, f#5 f#5] [e3, a3, e4]@2}
  {[f#2 f#2] [f#3 f#3, b3 b3, d4 d4, f#4 f#4, f#5 f#5] [g2 g2] [g2 g2, g3 g3, d4 d4, g4 g4, g5 g5] [f#2 f#2] [f#3 f#3, a3 a3, d4 d4, f#4 f#4, f#5 f#5] [e3, a3, e4]@2}
>`).scale("C2:chromatic").sound("gm_fx_atmosphere").room(2).lpf(500)
  .hpf(300).attack(0.15).release(1).sustain(1).decay(0.75).gain("<0 0.05 0.03>")
  .lpenv(-3).pan(sine.slow(2))
let bass = n(`<
{b1 g1 d2 c#2}!2
{[[b1 b1] b1] [[g1 g1] g1] [[d2 d2] d2] [[a2 a2] a2, [c#2 c#2] c#2]}!2
>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<1000 800 600 400>*2")
  .room(1)
  .gain(0.05).pan(sine.slow(2))
// its a bit more hoarse than this i think
let brass = n(`<{a3 a3 a3 c#4}>`).sound("gm_french_horn").scale("C2:chromatic")
  .sustain(0.7)
  .release(0.1).lpf("<1000 800 600 400>*2")
  .room(1)
  .gain(0.04).pan(sine.slow(2))
//{~} {~@6 [~@2 e4 e4] [f#4 e4 f#4 a4]}
let vocal = n(`<
{~} 
{~@6 [~@2 e4 e4] [f#4 e4 f#4 a4]}
{[f#4 e4] ~ ~ [f#4 e4 f#4 a4] [f#4 e4] ~ ~@2}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.4).attack(0.1).lpf(1500).sustain(0.85)
  .gain("<0.3 0.2>*2").room(1).decay(0.5)
let backvocal = n(`<
{~} 
{~}
{~ [f#4 e4] [f#4 e4] ~ ~ [f#4 e4] [f#4 e4@2 d4]@2}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.4).attack(0.1).lpf(600).sustain(0.85)
  .gain("<0.25 0.1 0.25 0.1>*4").room(1.5).decay(0.7)

// verse 1
//{[~ d4] [d4@0.4 b3@0.6] d4@2 [~ d4] [d4@0.4 b3@0.6] d4@1.5 e4@0.2 ~@0.3 [~ d4] [d4@0.4 b3@0.6] [d4 e4] d4@0.5 d4 [c#4 b3] a3@1.95 b3@0.05}
//{[~ d4] [d4@0.4 b3@0.6] d4@2 [~ d4] [d4@0.4 b3@0.6] d4@2 ~ [d4 b3] [d4 e4] d4@0.5 d4@1.5 c#4@1.5 d4@0.5 d4@0.5 d4@0.5}
let verse1 = n(`<
{[~ d4] [d4@0.4 b3@0.6] d4@2 [~ d4] [d4@0.4 b3@0.6] d4@1.5 e4@0.2 ~@0.3 [~ d4] [d4@0.4 b3@0.6] [d4 e4] d4@0.5 d4 [c#4 b3] a3@1.95 b3@0.05}
{[~ d4] [d4@0.4 b3@0.6] d4@2 [~ d4] [d4@0.4 b3@0.6] d4@2 ~ [d4 b3] [d4 e4] d4@0.5 d4@1.5 c#4@1.5 d4@0.5 d4@0.5 d4@0.5}
{d4 a3@0.5 a3@1.5 a3@0.5 e4@1.5 [f#4 f#4] [g4 f#4] [e4 d4] d4 a3@0.5 a3@1.5 f#4 e4@1.5 [a4 g4] [f#4 e4] d4@0.5}
{d4 a3@0.5 a3@1.5 a3@0.5 e4@1.5 [f#4 f#4] [g4 f#4] [e4 d4] d4@1.5 [d4 g4] [f#4 e4] d4@0.5 e4 [e4 e4] [f#4 e4] [f#4 a4]}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.3).attack(0.1).lpf(1500).sustain(0.85)
  .gain("0.15").room(1)
let bass1 = n(`<
{[b1, b3] [g1, g3] [d2, f#2] [a1, c#2, c#3]}!2
>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("600")
  .room(1).gain(0.1)
  .gain(0.05).pan(sine.slow(2))
let drums1 = s("tr808_bd:1, [~ tr808_bd:6]*2")
  .struct(`<
  { [1 1] [[~ 1] 1]}
  >`).gain("<0.4 0.2 0.3 0.2>*4").sustain(0.5).lpf(100).fast(4)
let piano1 = n(`<
{b3 [g3, d4, g2] [~@0.05 [a3, d4, f#3]@0.95] [[a3 c#4]@3 b3]}!2
>`).scale("C2:chromatic").sound("gm_piano").attack(0.1).release(0.3).gain(0.1).room(1.8).lpf(2000)
let topbrass = n(`<
{~}!2
{b4 [b4@3 a4] [b4 d5] [b4 a4] b4 [b4@3 a4] [b4 d5] [e5 d5] e5 [e5@3 d5] [e5 f#5] [e5 d5] c#5 [c#5@3 b4] [c#5 d5] [c#5 a4]}
{b4 [b4@3 a4] [b4 d5] [b4 a4] b4 [b4@3 a4] [b4 d5] [e5 d5] e5 [e5@3 d5] [e5 f#5] [e5 d5] c#5 [c#5@3 b4] c#5 ~}
>`).scale("C2:chromatic").sound("gm_contrabass").lpf(1500).gain(0.07)
//chorus -- "shotgun, fighting til the"
//line 2: "faith babe just to"
let chorus = n(`<
{f#4 e4 [f#4 e4] [f#4 a4] f#4 e4 [f#4 e4] [f#4 e4] [d4 d4] d4 d4 d4@0.5 e4@1.5 e4@0.5 [f#4 e4] [f#4 a4]}
{f#4 e4 [f#4 e4] [f#4 a4] f#4 [g4 f#4] [e4 d4] d4 d4@0.5 b4@1.5 a4@0.5 [a4 e4] [f#4 e4]
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.3).attack(0.1).lpf(1500).sustain(0.85)
  .gain("0.15").room(1)



arrange(
  [3, stack(drums._punchcard(), 
            bkgd._punchcard(), 
            front._punchcard(), 
            bass._punchcard(), 
            brass._punchcard(), 
            vocal._punchcard(), 
            backvocal._punchcard())],
  [4, stack(verse1._punchcard(), 
            bass1._punchcard(), 
            drums1._punchcard(), 
            piano1._punchcard(), 
            topbrass._punchcard())]
).theme("sonicPink")
