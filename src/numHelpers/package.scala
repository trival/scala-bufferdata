package numHelpers

extension (d: Double)
  inline def fit0111 = d * 2.0 - 1.0
  inline def fit1101 = d * 0.5 + 0.5

extension (d: Float)
  inline def fit0111 = d * 2.0 - 1.0
  inline def fit1101 = d * 0.5 + 0.5
