module.exports = ({ title, content, relativeToRoot }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0, user-scalable=no"/>
    
    <title>${title}</title>

    <link rel="stylesheet" href="${relativeToRoot}/css/mobi.min.css" />
  </head>
  <body>
    <div class="flex-center">
      <div class="container">
        ${content}
      </div>
    </div>
  </body>
</html>
`;
