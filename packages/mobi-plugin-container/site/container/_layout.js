module.exports = ({ title, content, relativeToRoot }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0, user-scalable=no"/>
    
    <title>${title}</title>

    <link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/mobi-plugin-prism/dist/mobi-plugin-prism.min.css" />
    <link rel="stylesheet" href="${relativeToRoot}/css/mobi-plugin-container.min.css" />
  </head>
  <body>
    ${content}
  </body>
</html>
`;
