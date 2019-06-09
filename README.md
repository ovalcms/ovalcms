# ovalcms
API client for OvalCMS

## Install

```
$ npm install ovalcms
```

## Usage

```js
TypeScript
import OvalCMS from 'ovalcms';

public content: any;

// Immediately Invoked Async Arrow Function
(async () => {
    const options = {
        // Get page token. See OvalCMS.com for toke of specific page
        pageToken: 'YOUR_OVALCMS_PAGE_TOKEN',
        // See OvalCMS.com for other authentication options
        authToken: 'YOUR_OVALCMS_AUTH_TOKEN'
    };

    this.content = await OvalCMS(options);
})()
.catch((err) => {
    console.error(err);
});
```

```
Angular(2+) HTML
<p [innerHtml]="content"></p>
```