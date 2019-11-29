/* eslint-env mocha */

import { describe, it } from 'mocha'
import { expect } from 'chai'
import { getUTMZone, getCentralMeridian } from './'

describe('getUTMZone', () => {
  it('throws for out of range latitudes', () => {
    expect(() => getUTMZone(-180, 0)).not.to.throw()
    expect(() => getUTMZone(-180.000001, 0)).to.throw()
    expect(() => getUTMZone(180, 0)).to.throw()
    expect(() => getUTMZone(179.999999, 0)).not.to.throw()
  })
  it('throws for arctic', () => {
    expect(() => getUTMZone(0, 85)).to.throw()
  })
  it('throws for antarctic', () => {
    expect(() => getUTMZone(0, -85)).to.throw()
  })
  it('returns 32 for Oslo', () => {
    expect(getUTMZone(10.6450349, 59.8939529)).to.equal(32)
  })
  it('returns 35 for east Svalbard', () => {
    expect(getUTMZone(26.774966, 80.048526)).to.equal(35)
  })
  it('returns 16 for Bowling Green, KY', () => {
    expect(getUTMZone(-86.480551, 36.966996)).to.equal(16)
  })
  it('returns 14 for Brownsville, TX', () => {
    expect(getUTMZone(-97.506811, 25.891598)).to.equal(14)
  })
})
describe('getCentralMeridian', () => {
  it('works for valid utmZone', () => {
    expect(getCentralMeridian(1)).to.equal(-177)
    expect(getCentralMeridian(2)).to.equal(-171)
    expect(getCentralMeridian(60)).to.equal(177)
  })
  it('throws for invalid utmZone', () => {
    expect(() => getCentralMeridian(0)).to.throw(
      Error,
      'utmZone must be between 1 and 60'
    )
    expect(() => getCentralMeridian(61)).to.throw(
      Error,
      'utmZone must be between 1 and 60'
    )
    expect(() => getCentralMeridian(NaN)).to.throw(
      Error,
      'utmZone must be between 1 and 60'
    )
  })
})
