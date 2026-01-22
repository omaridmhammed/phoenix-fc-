# How to Edit Content

This website uses a data-driven approach. Content is stored in TypeScript files in `src/data` or translation files in `messages`.

## 1. Updating Matches
File: `src/data/matches.ts`

To add a new match, add an object to the `upcomingMatches` array:
```typescript
{
  id: 'm-new',
  opponent: 'New Opponent',
  date: '2026-03-15', // YYYY-MM-DD
  time: '20:00',
  venue: 'Phoenix Stadium',
  competition: 'Premier League',
  isHome: true
}
```

## 2. Updating Players
File: `src/data/players.ts`

Add a new player to the `players` array. Ensure the `image` path points to a file in `public/images/players`.

## 3. Updating News
File: `src/data/news.ts`

Add a new article. The `slug` must be unique and URL-friendly (e.g., `my-new-article`).

## 4. Translating Text
Files: `messages/en.json` (English) and `messages/fr.json` (French)

To change static text (headings, buttons), find the corresponding key and update the value.
Example:
```json
"Home": {
  "heroTitle": "New Title Here"
}
```

## 5. Adding Images
Place images in the `public` folder.
- Player images: `public/images/players/`
- News images: `public/images/news/`

Refer to them in the data files relative to public (e.g., `/images/players/photo.jpg`).
