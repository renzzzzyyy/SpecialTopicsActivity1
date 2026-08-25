# AI Review Record

This record documents the AI-assisted student-status formatter exercise. The
original prompt and recommendation are included below for the laboratory
submission.

## AI Review Form

- **AI Tool:** GitHub Copilot
- **Prompt Used:** Suggest a TypeScript implementation for converting a
  student's active/inactive status into a readable label. Explain the
  implementation and include possible edge cases. Do not use the `any` type.
- **AI Recommendation:** Define `StudentStatus` as the union `"active" | "inactive"`
  and return `"Active Student"` for `"active"`; otherwise return
  `"Inactive Student"`. The recommendation also noted that unexpected
  external values should be checked before calling a strictly typed function.
- **What I Understood:** A literal union gives compile-time protection for
  normal application code, while runtime data can still contain another
  string and needs validation or a safe fallback.
- **Recommendation Accepted:** The `StudentStatus` union and the exact labels
  required by the Issue.
- **Recommendation Modified:** The final function accepts `unknown`, checks
  both supported values explicitly, and returns `"Unknown Student Status"`
  for unexpected input.
- **Recommendation Rejected:** An unchecked string parameter and any solution
  using `any` were rejected.
- **Reason:** External API data is not guaranteed to satisfy a TypeScript
  interface at runtime, so the final implementation must fail safely.

## Verification Record

- **Claim or Code Verified:** Literal union types restrict known status values,
  while `unknown` requires narrowing before use.
- **Source:** TypeScript Handbook, Everyday Types:
  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- **Result:** The documentation confirms that union types model allowed literal
  values and that `unknown` must be narrowed before operations are performed.

## Suggested Issue and Pull Request Evidence

- **Issue:** Add student-status formatter
- **Feature branch:** `feature/student-status`
- **Pull Request URL:** Create after pushing at:
  `https://github.com/renzzzzyyy/SpecialTopicsActivity1/compare`
- **Review comment and response:** To be completed by a classmate or instructor.
- **Repository URL:** https://github.com/renzzzzyyy/SpecialTopicsActivity1

## Accepted, Modified, or Rejected Suggestion

The suggestion to use a `StudentStatus` union was accepted because it prevents
unsupported statuses in normal TypeScript calls. The implementation was
modified to accept `unknown` at the runtime boundary and return a safe fallback
for unexpected values. This modification was tested with `active`, `inactive`,
and `pending`.

## Pull Request Description Template

```markdown
## Summary

Adds a readable student-status formatter with safe handling for unexpected values.

## What Changed

- Added active and inactive student labels.
- Added an unknown-status fallback.
- Demonstrated the formatter in the TypeScript program.

## Testing Performed

- `npm run test`
- `npm run lint`
- `npm run format:check`
- `npm run build`
- `npm start`

## AI Usage

The AI recommendation was reviewed, modified to handle `unknown` input safely,
and verified using the TypeScript Handbook.

## Known Limitations

The project currently demonstrates output in the console rather than a web UI.

Closes #1
```

## Code Review Evidence

Reviewer: To be completed by a classmate or instructor.

Meaningful review comment: The reviewer should examine the runtime fallback,
the union type, naming, tests, and unnecessary complexity.

Response to review: Record the requested change, the follow-up test, and the
commit that addressed it.

## Reflection

1. What was the most important difference between your previous programming
   workflow and this Git/GitHub workflow?
2. Why was the feature branch useful?
3. Did the AI provide a suggestion that required modification? Explain.
4. How did TypeScript help detect or prevent a possible problem?
5. Why was runtime validation still necessary?
6. What information should never be placed in the repository?
7. Which step in Ask -> Understand -> Review -> Modify -> Test -> Verify ->
   Commit was most important to you? Explain.
8. How could this workflow improve a group software-development project?

Answer each question in three to five sentences in the laboratory report.
