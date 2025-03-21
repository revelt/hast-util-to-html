/**
 * @typedef {import('hast-util-raw')}
 */

import assert from 'node:assert/strict'
import test from 'node:test'
import {u} from 'unist-builder'
import {toHtml} from '../index.js'

test('`element`', () => {
  assert.deepEqual(
    toHtml(u('raw', '<script>alert("XSS!")</script>')),
    '&#x3C;script>alert("XSS!")&#x3C;/script>',
    'should encode `raw`s'
  )

  assert.deepEqual(
    toHtml(u('raw', '<script>alert("XSS!")</script>'), {
      allowDangerousHtml: true
    }),
    '<script>alert("XSS!")</script>',
    'should not encode `raw`s in `allowDangerousHtml` mode'
  )
})
