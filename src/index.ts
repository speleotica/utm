// @flow

/**
 * Determines the UTM zone containing the given latitude and longitude (in degrees)
 */
export function getUTMZone(longitude: number, latitude: number): number {
  if (longitude < -180 || longitude >= 180) {
    throw new Error(`longitudegitude must be >= -180 and < 180`)
  }
  if (latitude > 84 || latitude < -80) {
    throw new Error(
      'polar regions (south of 80°S and north of 84°N) are not supported'
    )
  }

  if (latitude >= 56 && latitude <= 64 && longitude >= 3 && longitude <= 12)
    return 32 // SW Norway
  if (latitude > 72 && longitude >= 0 && longitude <= 42) {
    // Svalbard
    if (longitude < 9) return 31
    if (longitude < 21) return 33
    if (longitude < 33) return 35
    return 37
  }
  return Math.max(1, Math.min(31 + Math.floor(longitude / 6), 60))
}

/**
 * Throws an error if the given number is an invalid UTM zone.
 * Otherwise returns the number
 */
export function assertValidUTMZone(utmZone: number): number {
  if (utmZone < 1 || utmZone > 60 || !Number.isFinite(utmZone)) {
    throw new Error(`utmZone must be between 1 and 60`)
  }
  return utmZone
}

/**
 * Gets the longitude (in degrees) of the central meridian of the given UTM zone.
 */
export function getCentralMeridian(utmZone: number): number {
  return -183 + assertValidUTMZone(utmZone) * 6
}
