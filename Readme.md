

```
pip list --not-required | awk '{print $1 "==" $2}' > requirements.txt
```

```
docker exec -it backend cat /var/log/apache2/error.log
```