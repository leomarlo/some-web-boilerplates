
Add to the environment file *.env* the following entries:
```
POSTGRES_USER=<<enter user>>
POSTGRES_PASSWORD=<<enter password (only utf-8)>>
POSTGRES_DB=<<enter db name>>
PGADMIN_DEFAULT_EMAIL=<<enter random email>>
PGADMIN_DEFAULT_PASSWORD=<<enter random password>>
```


```
pip list --not-required | awk '{print $1 "==" $2}' > requirements.txt
```

```
docker exec -it backend cat /var/log/apache2/error.log
```