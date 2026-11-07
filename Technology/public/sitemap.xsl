<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap — Quinn Daisies Technology &amp; IT Solutions (quinndaisies.org)</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; background: #faf6f0; color: #2b1600; }
          .hero { background: #2b1600; color: #ffffff; padding: 36px 6%; border-bottom: 4px solid #f9a144; }
          .badge { display: inline-block; background: rgba(249,161,68,0.18); color: #f9a144; border: 1px solid rgba(249,161,68,0.45); border-radius: 999px; padding: 4px 12px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 10px; }
          h1 { margin: 0 0 8px 0; font-size: 26px; font-weight: 600; }
          .hero p { margin: 0; color: rgba(255,255,255,0.82); font-size: 14px; line-height: 1.6; max-width: 820px; }
          .hero a { color: #f9a144; text-decoration: underline; }
          .wrap { padding: 28px 6% 56px; }
          .stats { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 22px; }
          .stat { background: #ffffff; border: 1px solid #e6ddd3; border-radius: 12px; padding: 12px 18px; font-size: 13px; }
          .stat strong { color: #2b1600; font-size: 18px; display: block; }
          .card { background: #ffffff; border: 1px solid #e6ddd3; border-radius: 16px; overflow-x: auto; box-shadow: 0 8px 24px rgba(43,22,0,0.05); }
          table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
          th { background: #fff7ef; color: #2b1600; text-align: left; padding: 14px 16px; border-bottom: 1px solid #e6ddd3; font-weight: 600; text-transform: uppercase; font-size: 11.5px; letter-spacing: 0.05em; }
          td { padding: 12px 16px; border-bottom: 1px solid #f2ebe3; vertical-align: middle; }
          tr:hover td { background: #fffbf6; }
          td a { color: #2b1600; text-decoration: none; font-weight: 500; word-break: break-all; }
          td a:hover { color: #c86d10; text-decoration: underline; }
          .pill { display: inline-block; padding: 3px 10px; border-radius: 999px; background: #fff3e3; color: #2b1600; font-weight: 600; font-size: 12px; border: 1px solid rgba(249,161,68,0.4); }
        </style>
      </head>
      <body>
        <div class="hero">
          <span class="badge">SEO &amp; GEO Discovery Index</span>
          <h1>Quinn Daisies Technology &amp; IT Solutions — Official XML Sitemap</h1>
          <p>
            Machine-readable Search Engine Optimization (SEO) &amp; Generative Engine Optimization (GEO) index for
            <a href="https://quinndaisies.org">https://quinndaisies.org</a>. Also discover LLM indexes at
            <a href="/llms.txt">/llms.txt</a> and <a href="/llms-full.txt">/llms-full.txt</a>, and sister Logistics portal at
            <a href="https://quinndaisies.com">https://quinndaisies.com</a>.
          </p>
        </div>
        <div class="wrap">
          <div class="stats">
            <div class="stat">
              <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></strong>
              Canonical Indexed URLs
            </div>
            <div class="stat">
              <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url/image:image)" /></strong>
              Indexed Media Assets
            </div>
            <div class="stat">
              <strong>en-US • en-NG • en-GB • en-CA</strong>
              Multi-Region Hreflang Alternates
            </div>
          </div>
          <div class="card">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Canonical URL</th>
                  <th>Priority</th>
                  <th>Change Freq</th>
                  <th>Images</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td><xsl:value-of select="position()" /></td>
                    <td>
                      <xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc" /></xsl:variable>
                      <a href="{$itemURL}"><xsl:value-of select="sitemap:loc" /></a>
                    </td>
                    <td><span class="pill"><xsl:value-of select="sitemap:priority" /></span></td>
                    <td><xsl:value-of select="sitemap:changefreq" /></td>
                    <td><xsl:value-of select="count(image:image)" /></td>
                    <td><xsl:value-of select="sitemap:lastmod" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

