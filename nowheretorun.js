let baseline = 
  note(`<
    {e3 e2 e2 e3 e2 e3 e2 e3}
    {c2 c3 c2 c3 c2 c3 c2 c3}
    {g1 g2 g1 g2 g1 g2 g1 g2}
    {a1 a2 a1 a2 a1 a2 a1 a2}
  >`)
  .sound("gm_synth_bass_1")
  .lpf(800)

stack(
  baseline
)