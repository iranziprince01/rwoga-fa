const SMALL_WORDS = new Set([
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'from',
  'in',
  'nor',
  'of',
  'on',
  'or',
  'per',
  'the',
  'to',
  'vs',
  'via',
  'with',
])

function capitalizeToken(token: string): string {
  if (!token) return token
  if (/^[A-Z0-9]{2,}$/.test(token)) return token
  const lower = token.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

function titleCaseWord(word: string, forceCap: boolean): string {
  if (word.includes('-')) {
    return word
      .split('-')
      .map((part) => titleCaseWord(part, true))
      .join('-')
  }

  const lower = word.toLowerCase()
  if (!forceCap && SMALL_WORDS.has(lower)) return lower
  return capitalizeToken(word)
}

/**
 * Title Case for display headings.
 * Short connectors stay lowercase unless first/last in a phrase.
 */
export function toTitleCase(input: string): string {
  // Preserve sentence fragments separated by periods
  return input
    .split(/(?<=\.)\s+/)
    .map((segment) => {
      const parts = segment.split(/(\s+|[:&/,])/)
      const words = parts.filter((p) => p.trim() && !/^[\s:&\/,]+$/.test(p))
      const last = words.length - 1
      let i = 0

      return parts
        .map((part) => {
          if (!part.trim() || /^[\s:&\/,]+$/.test(part)) return part
          const force = i === 0 || i === last
          i += 1
          return titleCaseWord(part, force)
        })
        .join('')
    })
    .join(' ')
}
