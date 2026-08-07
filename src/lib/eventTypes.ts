// Single source of truth for event type values, labels, and the
// competitive/submittable groupings — shared between Sanity schemas/scripts
// and the Next.js app so the rule can't silently diverge between them.

export type EventTypeValue = 'world-cup' | 'continental-cup' | 'ice-festival' | 'local-competition' | 'clinic'

export const EVENT_TYPE_OPTIONS: { value: EventTypeValue; title: string }[] = [
  { value: 'world-cup', title: 'World Cup' },
  { value: 'continental-cup', title: 'Continental Cup' },
  { value: 'ice-festival', title: 'Ice Festival' },
  { value: 'local-competition', title: 'Local Competition' },
  { value: 'clinic', title: 'Clinic' },
]

export const EVENT_TYPE_LABELS: Record<EventTypeValue, string> = Object.fromEntries(
  EVENT_TYPE_OPTIONS.map((o) => [o.value, o.title])
) as Record<EventTypeValue, string>

// World Cups and Continental Cups run on the UIAA's Oct-Apr competitive
// season; everything else (ice festivals, local comps, clinics) happens
// year-round and uses a plain year instead.
export const COMPETITIVE_EVENT_TYPES: EventTypeValue[] = ['world-cup', 'continental-cup']

// World Cups/Continental Cups are scheduled by USAIC directly, not submitted
// publicly — the event types a public submitter is allowed to pick from.
export const SUBMITTABLE_EVENT_TYPES: EventTypeValue[] = EVENT_TYPE_OPTIONS.map((o) => o.value).filter(
  (v) => !COMPETITIVE_EVENT_TYPES.includes(v)
)

// Defensive normalizer: tolerates a lingering pre-migration scalar value (or
// a missing field) so one bad document degrades gracefully instead of
// throwing wherever eventType is read as an array.
export function toEventTypeArray(eventType: unknown): string[] {
  if (Array.isArray(eventType)) return eventType
  if (typeof eventType === 'string' && eventType) return [eventType]
  return []
}

export function isCompetitive(eventType: unknown): boolean {
  return toEventTypeArray(eventType).some((t) => (COMPETITIVE_EVENT_TYPES as string[]).includes(t))
}
