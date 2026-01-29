import { describe, expect, it } from 'vitest'
import { Color, CornerPosition, EdgePosition, Face, makeValueGuard, makeKeyGuard } from './cube'

describe('Cube', () => {
  describe('Color constants', () => {
    it('should have exactly six color values', () => {
      const colorValues = Object.values(Color)

      expect(colorValues).toHaveLength(6)
    })

    it('should have unique color values', () => {
      const values = Object.values(Color)
      const uniqueValues = new Set(values)

      expect(uniqueValues.size).toBe(values.length)
    })

    it('should accept only valid colors', () => {
      const isColor = makeValueGuard(Color)

      expect(isColor(Color.White)).toBe(true)
      expect(isColor('Wt')).toBe(true)

      expect(isColor('P')).toBe(false)
      expect(isColor('WHITE')).toBe(false)
      expect(isColor(123)).toBe(false)
      expect(isColor(null)).toBe(false)
    })
  })  

  describe('Face constants', () => {
    it('should have six face values', () => {
      const faceValues = Object.values(Face)

      expect(faceValues).toHaveLength(6)
    })

    it('should have unique face values', () => {
      const values = Object.values(Face)
      const uniqueValues = new Set(values)

      expect(uniqueValues.size).toBe(values.length)
    })

    it('should accept only valid faces', () => {
      const isFace = makeValueGuard(Face)

      expect(isFace(Face.Up)).toBe(true)
      expect(isFace('U')).toBe(true)

      expect(isFace('X')).toBe(false)
      expect(isFace('UP')).toBe(false)
      expect(isFace(123)).toBe(false)
      expect(isFace(null)).toBe(false)
    })
  })

  describe('Corner positions', () => {
    it('should define exactly eight corner positions', () => {
      const cornerPositions = Object.keys(CornerPosition)

      expect(cornerPositions).toHaveLength(8)
    })

    it('should have unique corner positions', () => {
      const values = Object.keys(CornerPosition)
      const uniqueValues = new Set(values)

      expect(uniqueValues.size).toBe(values.length)
    })

    it('should accept only valid corner positions', () => {
      const isCornerPosition = makeKeyGuard(CornerPosition)

      expect(isCornerPosition('UFR')).toBe(true)
      expect(isCornerPosition('DLF')).toBe(true)
      expect(isCornerPosition('XYZ')).toBe(false)
      expect(isCornerPosition('UFB')).toBe(false)
      expect(isCornerPosition(123)).toBe(false)
      expect(isCornerPosition(null)).toBe(false)
    })
  })

  describe('Edge positions', () => {
    it('should define exactly twelve edge positions', () => {
      const edgePositions = Object.keys(EdgePosition)

      expect(edgePositions).toHaveLength(12)
    })

    it('should have unique edge positions', () => {
      const values = Object.keys(EdgePosition)
      const uniqueValues = new Set(values)

      expect(uniqueValues.size).toBe(values.length)
    })

    it('should accept only valid edge positions', () => {
      const isEdgePosition = makeKeyGuard(EdgePosition)

      expect(isEdgePosition('UF')).toBe(true)
      expect(isEdgePosition('BL')).toBe(true)
      expect(isEdgePosition('XY')).toBe(false)
      expect(isEdgePosition('UZ')).toBe(false)
      expect(isEdgePosition(123)).toBe(false)
      expect(isEdgePosition(null)).toBe(false)
    })
  })
})