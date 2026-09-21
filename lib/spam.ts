const MIN_SUBMIT_SECONDS = 3;
const HONEYPOT_FIELD = "hp_check";
const TIMESTAMP_FIELD = "ts";

export function isHoneypotFilled(formData: FormData) {
  const value = formData.get(HONEYPOT_FIELD);
  return typeof value === "string" && value.trim().length > 0;
}

export function isSubmittedTooFast(formData: FormData) {
  const raw = formData.get(TIMESTAMP_FIELD);
  const startedAt = typeof raw === "string" ? Number(raw) : NaN;
  if (!Number.isFinite(startedAt)) return true;
  return Date.now() - startedAt < MIN_SUBMIT_SECONDS * 1000;
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

type RateLimitOptions = {
  max: number;
  windowMs: number;
};

// In-memory best-effort limiter: resets on cold start and isn't shared across
// server instances, but still absorbs bursts from a single source on a warm one.
const submissionsByKey = new Map<string, number[]>();

export function isRateLimited(key: string, { max, windowMs }: RateLimitOptions) {
  const now = Date.now();
  const recent = (submissionsByKey.get(key) ?? []).filter(
    (timestamp) => now - timestamp < windowMs,
  );
  recent.push(now);
  submissionsByKey.set(key, recent);
  return recent.length > max;
}
