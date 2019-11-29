# @speleotica/utm

[![CircleCI](https://circleci.com/gh/speleotica/utm.svg?style=svg)](https://circleci.com/gh/speleotica/utm)
[![Coverage Status](https://codecov.io/gh/speleotica/utm/branch/master/graph/badge.svg)](https://codecov.io/gh/speleotica/utm)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40speleotica%2Futm.svg)](https://badge.fury.io/js/%40speleotica%2Futm)

A few utilities for working with Univeral Transverse Mercator coordinates

### `getUTMZone(longitude: number latitude: number): number`

Returns the UTM zone containing the given `longitude` and `latitude` (in degrees)

### `getCentralMeridian(utmZone: number): number`

Returns the longitude of the central meridian of the given `utmZone` (in degrees)
