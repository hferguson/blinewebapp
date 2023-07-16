# NextJS pages
This directory contains JS files which contain individual react components that represent pages.

In our client project, if you go http://yoursite/  it will load the index.js.  For any other, say a page named banana.js, the URL will be http://yoursite/banana
This is the way that nextJS does server side rendering for React components.  Each of these
individual JS files has one component representing the page.  Each of these pages can
call other React components, which is why I created the components directory.
