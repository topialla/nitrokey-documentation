echo "$(date) [apply_new_content.sh] Content change triggered." >> /var/www/sphinx/logs_sphinx/webhook.log

cd /var/www/sphinx/sphinx/nitrokey-documentation

# pull new content
git pull

# build english version
echo "$(date) [apply_new_content.sh] Repo pulled. Building englisch Versions..." >> /var/www/sphinx/logs_sphinx/webhook.log

sphinx-build -a -D language='en' -b html . /var/www/sphinx/www/static/ 
echo "$(date) [apply_new_content.sh] DONE. Building /locales/ and pushing upstream..." >> /var/www/sphinx/logs_sphinx/webhook.log

# generate language files and push
sphinx-build -b gettext . ./locales/
sphinx-intl update -p ./locales/ -l de
git add --all
git commit -m "Language Files generated by Sphinx"
git push

echo "$(date) [apply_new_content.sh] DONE" >> /var/www/sphinx/logs_sphinx/webhook.log
