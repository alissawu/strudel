samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')

// cycles per minute
setcpm(20)

// postgain pattern = "pump" that we can reuse
// let pump = "<0.4 0.7 0.4 1>*2"

let intro_arp = 
  note(`<
    {b4 [b4]@2 [a4 b4] [a4 b4] [a4 b4] [a4 b4] [a4 d5] [a4 d5]}
    {b4 [b4]@2 [a4 b4] [a4 b4] [a4 b4] [a4 g4] [f#4 d4] [f#4 d4]}
    {~ [b4]@2 [d5 b4] [d5 b4] [d5 b4] [d5 b4] [d5 b4] [a4 d5]}
    {[a4 d5] [b4]@2 [d5 c5] [a4 b4] [a4 g4] [f#4 d4] [f#4 d4] [f#4 d4]}
  >`)
  .sound("gm_distortion_guitar")
  .attack(0.005)
  .decay(1)
  .sustain(0.2)
  .release(0.3)
  .gain(1.9)
  .lpf(1000)
  .drive(0.7)       
  .room(0.1)
  .postgain("<0.6 1.1 0.6 1>*2")
  .fm(2.34)
  .detune(10)
  .crush(7)


let synth_vocal = 
  note(`<
  {~ g3 f#3 d3 ~ g3 f#3 d3}
  >`)
  .decay(1)
  .postgain("<0.6 1.1 0.6 1>*2")
  .release(0.3)
  
let bass = 
  note(`<
  {d2 d2 c2 c2 c2 c2 c2 c2}
  {g2 g2 d2 d2 d2 d2 d2 d2}
  {e2 e2 c2 c2 c2 c2 c2 c2}
  {g2 g2 d2 d2 d2 d2 d2 d2}
  >`)
  


_$:
stack(
  intro_arp
)

$: stack(
  synth_vocal,
  bass
)

