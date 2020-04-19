<p align="center">
  <a href="https://open-source-cookbook.netlify.com/" target="_blank" rel="noopener noreferrer">
    <img alt="Open-Source-Cookbook" src="../../../public/assets/collagetwo.jpg" />
  </a>
</p>
<h1 align="center">
  Header
</h1>

## 🎉 Folder Contents:

1. header.main.js
1. header.nav.js

```diff
- header.main.js
```

This file contains the header component for this app.

```diff
- header.nav.js
```

This file contains the nav component for this app.

## 🐼 File Breakdown:

```diff
- header.main.js
```

```jsx
import React from "react"
import Navigation from "./header.nav"

const Header = () => (
  <header>
    <Navigation />
  </header>
)

export default Header
```

This file is importing react to use JSX and Navigation from the same folder, which contains the navigation.

```diff
- header.nav.js
```

```jsx
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = () => {
  const router = useRouter()
  return (
    <nav aria-label="Primary">
      <ul>
        <li>
          <Link href="/">
            <a
              className={router.pathname == "/" ? "active" : ""}
              title="Home Page"
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/anime">
            <a
              className={router.pathname == "/anime" ? "active" : ""}
              title="Anime Page"
            >
              Anime
            </a>
          </Link>
        </li>
        <li>
          <Link href="/anime/search">
            <a
              className={router.pathname == "/anime/search" ? "active" : ""}
              title="Anime Search Page"
            >
              Anime Search
            </a>
          </Link>
        </li>
        <li>
          <Link href="/anime/genres">
            <a
              className={router.pathname == "/anime/genres" ? "active" : ""}
              title="Anime Genres Page"
            >
              Anime Genres
            </a>
          </Link>
        </li>
        <li>
          <Link href="/newsletter">
            <a
              className={router.pathname == "/newsletter" ? "active" : ""}
              title="Newsletter Page"
            >
              Newsletter
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={router.pathname == "/contact" ? "active" : ""}
              title="Contact Page"
            >
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={router.pathname == "/about" ? "active" : ""}
              title="About Page"
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
```

This file contains all of the navigation for the app. Using the useRouter and Link elements provided by next, I'm able to create a Navigation component.

With useRouter, I'm able to check to see if a path is active or inactive and change the className accordingly. With the Link element, I'm able to navigate to and from a given page.
