<p align="center">
  <a href="https://open-source-cookbook.netlify.com/" target="_blank" rel="noopener noreferrer">
    <img alt="Open-Source-Cookbook" src="../../../public/assets/newslettercover.jpeg" height="350" />
  </a>
</p>
<h1 align="center">
  Newsletter
</h1>

## 🎉 Folder Contents:

1. newsletter.api.js
1. newsletter.body.js
1. newsletter.coverimage.js
1. newsletter.date.js
1. newsletter.more.js
1. newsletter.parser.js
1. newsletter.preview.js

```shell
newsletter.api.js
```

This file contains the required API for converting/stripping the .md files for each post. It joins, replaces, and iterates through the folder, looking for .md files for later usage.

```shell
newsletter.body.js
```

This file contains the actual file contents or data for each post. By setting the following: dangerouslySetInnerHTML={{ __html: content }}, the file contents are abled to be rendered on page.

```shell
newsletter.coverimage.js
```

This file contains the coverimage for each post. When a user headers to the newsletter page, they'll be able to view the coverimage for each page because of this file. If the post/slug isn't there, then only the image will be rendered.

```shell
newsletter.date.js
```

This file contains the date for each post. All this does is convert the time to a readable string for the post preview on the newsletter page.

```shell
newsletter.more.js
```

This file contains all the posts for the newsletter page. By mapping over the posts, all of the content is rendered on the newsletter page.

```shell
newsletter.parser.js
```

This file contains the parsing logic for all posts. Using different libraries to parse the information from .md to html, this file allows the posts to be rendered and read properly.

```shell
newsletter.preview.js
```

This file contains the preview(s) for all posts. Using JSX to render the preview for all the posts, this file allows all the information to be displayed.
