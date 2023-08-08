

```
pip list --not-required | awk '{print $1 "==" $2}' > requirements.txt

```