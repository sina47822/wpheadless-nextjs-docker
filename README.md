# wpheadless Nextjs Docker
sudo chown -R 1000:1000 ./frontend
sudo chown -R 1000:1000 ./frontend/package-lock.json

sudo chown -R 1000:1000 ./wordpress
sudo chown -R 1000:1000 ./src
sudo chmod -R 755 src2 wordpress2 \
sudo chown -R 1000:1000 src2 wordpress2

sudo chown -R 1000:1000 ./mysql.cnf

git pull origin master --allow-unrelated-histories
git config --global pull.rebase true
git config --global push.autoSetupRemote true

docker compose exec wordpress bash -c "chmod -R 755 /var/www/html && chown -R www-data:www-data /var/www/html"

docker compose exec nginx bash -c "chmod -R 755 /var/www/html && chown -R www-data:www-data /var/www/html"
# git config
```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[user]
        name = sina
        email = sinaa.afshar@gmail.com
[remote "origin"]
        url = git@github.com:sina47822/wpheadless-nextjs-docker.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[pull]
        setupstream = true
[branch "master"]
        remote = origin
        merge = refs/heads/master
```
