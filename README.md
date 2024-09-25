# QR Code Generator
this is a simple QR Code Generator, that takes anything from the location 
hash, url-decodes it and renders it as a QR code. E.g. 
`https://qr.bennet.cc/#test%20123` will display the QR code for `test 123`

It is meant for a setup TOTP script when the terminal fails  to display the
QR code properly. Therefore, the code will automatically reset after 5 minutes,
in case the user forget to close the tab. But it may be used to generate any 
amount of other QR codes as well.

As Cloudflare pages hosted instance is available at https://qr.bennet.cc