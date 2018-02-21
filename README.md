# Report Server

Only applicable for POS Does projects. Code is here for learning purposes only.

## Description

The reporting framework that will allow receipts and administrative reports to be dropped in and generated using a node js server.

## Overview

Tested with:
- node v: 6.10.0, 6.11.3
- npm V: 3.10.10

## Installing

**For Linux systems**

- sudo apt-get update
- sudo apt-get upgrade
- curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
- sudo apt-get install -y nodejs

- Test installation with `node -v` and `npm -v`

- Copy files to a directory,
- cd to the same directory as `package.json`
- Run `npm install`

## Executing

- Default port is `3000`
- Port can be configured by adding `PORT=12345` to the run command.
- To run the server execute the command `node ./bin/www`
- Absolute path to the `./bin/www` file might be required if server is started from a script.

- Reports route is `http://server:port/reports` as a post
- Parameters to get a report
  - Field: `name` the name of the report
  - Field: `recipe` html or pdf
  - Field: `payload` the data for the report

## Reports

- All reports should be added to the `reports/templates` directory in their own folder.
- Reports must use the extension `.jsreport`
- Currently all styling must be done in the same file as the template.
