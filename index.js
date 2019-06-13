'use strict';
import KY from 'ky-universal'

class OvalCMS {
  constructor() {
  }

  async getContent(contentOptions) {
    let clientWeb = KY.extend({
      prefixUrl: 'https://www.ovalcms.com'
      , headers: {
        Authorization: `Bearer ${contentOptions.authToken}`
      }
    });

    return await clientWeb.get('api/content/' + contentOptions.pageToken).json();
  }
}

export default (options) => {
  // Create new OvalCMS instance
  const ovalcms = new OvalCMS()
  let f = ovalcms.getContent(options);
  return f;
}
