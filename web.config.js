<configuration>
  <system.webServer>
    <handlers>
      <add name="node" path="server.js" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <rule name="Nextjs">
          <match url=".*" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
