# Character Counter App

A responsive React + TypeScript application that allows users to type text and see real-time statistics including character count, word count, and estimated reading time. It also provides visual feedback on word goals using a progress bar and warning indicators.

---

## Live Demo on Netlify

Experience the live version of this Character Counter app deployed on Netlify:  
[golden-semolina-32da96.netlify.app](golden-semolina-32da96.netlify.app)

---

## Component Overview

### `CharacterCounter`
- Main feature component that manages its own internal state.
- Calculates character count, word count, and reading time.
- Displays visual feedback like progress bar and warning messages.
- Props: `minWords`, `maxWords`, `targetReadingTime`.

### `TextInput`
- Controlled textarea input.
- Accepts optional `initialValue` and `placeholder`.
- Uses a callback (`onChange`) to send text input updates to parent.

### `StatsDisplay`
- Stateless UI component to display live statistics.
- Props: `stats` (includes characters, words, reading time), `showReadingTime`.

---

## Reflection Questions

### 1. How did you handle state updates when the text changed?
We used `useState` in both `App.tsx` and `CharacterCounter.tsx` to store and update the text. The `TextInput` component uses a callback (`onChange`) to send the updated value to the parent component, which triggers recalculation of statistics.

### 2. What considerations did you make when calculating reading time?
Reading time is estimated using the average adult reading speed of 200 words per minute. The formula used was:  
`readingTime = wordCount / 200`, rounded to 2 decimal places for clarity.

### 3. How did you ensure the UI remained responsive during rapid text input?
- All calculations are synchronous and light-weight.
- React’s efficient rendering ensures smooth UI updates.
- State updates are batched, and re-renders are scoped to the affected components.

### 4. What challenges did you face when implementing the statistics calculations?
- Handling edge cases such as multiple spaces and newlines while counting words.
- Making sure reading time doesn’t show `NaN` or unnecessary decimals.
- Avoiding division by zero or misleading feedback when no words are typed.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
