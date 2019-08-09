npm i -g @adonisjs/cli
npm install -s url-parse

heroku buildpacks:set heroku/nodejs

# NOTE in package.json
# "engines": {
#     "node": ">= 6.9.4",
#     "npm": ">= 4.4.0"
# }

# heroku run --app meetalk-test  ENV_SILENT=true node ace key:generate
heroku config:set --app meetalk-test APP_KEY=
heroku run --app meetalk-test  ENV_SILENT=true node ace seed --force
