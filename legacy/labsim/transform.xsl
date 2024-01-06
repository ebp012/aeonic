<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/versions">
  <html>
	 	 <body>
		  <h2>LabSim Official Changelog</h2>
		  <xsl:for-each select="versiom">
				<h3><xsl:value-of select="/versions/version@name"/></h3>
				<ul style="list-style-type: none;">
					<xsl:for-each select="item">
						<li><xsl:value-of select="/versions/version/item/value"/></li>
					</xsl:for-each>
				</ul>
		  </xsl:for-each>
	  </body>
  </html>
</xsl:template>

</xsl:stylesheet>