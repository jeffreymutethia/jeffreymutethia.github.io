# Jeffrey Mutethia · Portfolio

A static portfolio built from the Editorial handoff. The site uses HTML, CSS and JavaScript and runs without a build step.

## Local preview

From this directory, run

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [the local preview](http://127.0.0.1:8000/). To preview from a GitHub Pages-style subpath, run the same command from the parent directory and open [the portfolio subpath](http://127.0.0.1:8000/Jeffrey_Mutethia_Portfolio/).

## Publish with GitHub Pages

GitHub Pages is included with GitHub Free for public repositories. Use the included `github.io` address to keep both hosting and the site address free.

1. Create a public repository on GitHub. Use `jeffreymutethia.github.io` for a site at the account’s root address, or a repository such as `portfolio` for a site at `https://jeffreymutethia.github.io/portfolio/`.
2. Commit the contents of this directory to the root of the repository’s `main` branch. Keep `index.html`, `styles.css`, `site.js`, `assets/` and `Jeffrey_Mutethia_Resume.pdf` together.
3. In **Settings → Pages**, set **Source** to **Deploy from a branch**. Choose `main` and `/(root)`, then click **Save**.
4. Once GitHub finishes publishing, open the address shown in **Settings → Pages** and check that the photos and résumé load.

[GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Photography

Source paths are relative to `Desktop/Edited Photos/`. Each WebP retains the framing of the edited export. The page applies the crops below with CSS, and gallery enlargements show the full edited frame.

| Slot | Edited source | Display crop |
| --- | --- | --- |
| Hero | `Hells Gate Final Set/Layers_of_the_Gorge.jpg` (IMG_0487) | Responsive cover at 40% horizontal, 23% vertical. At phone widths the frame uses a 2:1 ratio with a 175 px minimum height. This keeps the sky opening in view. |
| Seattle | `World Cup Final Set/Seattle \| Lumen Field.jpg` | 4:2.75 cover at 50% horizontal, 38% vertical. Uses a 2:1 frame in the phone gallery. |
| Hell’s Gate | `Hells Gate Final Set/Zebras_Beneath_The_Cliffs.jpg` (IMG_0447) | 4:2.75 cover at 50% horizontal, 90% vertical to retain the zebras near the bottom. |
| Cragside | `Cragside Final Set/Cragside House Through The Trees.jpg` | 4:2.75 cover at 50% horizontal, 30% vertical to retain the roofline and planted foreground. |

The Cragside export matches the house photo in the handoff. Its original camera frame number is unverified.

To update the résumé, replace `Jeffrey_Mutethia_Resume.pdf` in the site root.
