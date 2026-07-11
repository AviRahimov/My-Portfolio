# Avraham Rahimov — Portfolio

Personal portfolio website for Avraham Rahimov, Data Scientist specializing in machine learning, deep learning, NLP, and computer vision.

**Live site:** https://avraham-rahimov-portfolio.vercel.app/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 4](https://astro.build) (static site generation) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Contact form | [Formspree](https://formspree.io) |
| Projects feed | GitHub GraphQL API (pinned repos) |
| Deployment | [Vercel](https://vercel.com) |

## Local Setup

```bash
# Install dependencies
npm install

# Create a .env file and add your GitHub token
echo "GITHUB_PAT=your_token_here" > .env

# Start dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### GitHub Personal Access Token

The Projects section fetches your pinned repositories from GitHub at build time. The token only needs the `public_repo` scope (read-only public data is sufficient).

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Grant **read-only** access to public repositories
3. Copy the token into your `.env` file as `GITHUB_PAT`
4. Add the same variable in Vercel → Project Settings → Environment Variables

---

## Updating Content

### Skills

Edit [src/data/skills.json](src/data/skills.json). Skills are grouped by category:

```json
{
  "Languages": ["Python", "Java", "C/C++"],
  "ML & AI": ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
  "Libraries": ["Pandas", "NumPy", "Scikit-learn"]
}
```

Add a new category by adding a new key. Add skills within an existing category by appending to its array. The filter tabs on the homepage update automatically.

If you add a new skill that needs an emoji icon, also add a condition in the skills grid in [src/pages/index.astro](src/pages/index.astro) (look for the `skill.name.includes(...)` block).

### Experience & Education

These are hardcoded directly in:
- [src/pages/index.astro](src/pages/index.astro) — Experience timeline section
- [src/pages/resume.astro](src/pages/resume.astro) — Education and Professional Experience sections

Edit the HTML in those files to update roles, organizations, or descriptions.

### Resume PDF

Replace `public/Avi Resume - CV.pdf` with your updated PDF. Keep the same filename, or update the `href` in [src/pages/resume.astro](src/pages/resume.astro) (line referencing `/Avi Resume - CV.pdf`).

---

## Checking Contact Form Submissions

This site uses [Formspree](https://formspree.io) (form ID: `mjgnbwrk`).

To view submissions: log in at formspree.io → **Forms** → select **mjgnbwrk** → **Submissions** tab.

---

## License

MIT © 2025 Avraham Rahimov
