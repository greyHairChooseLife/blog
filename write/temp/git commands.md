- git force push 후에 다른 cloned local 환경에서 conflict 생길 때

```
git fetch --all
git reset --hard origin/main
git pull
```

(정확히 어떤 원리로 가능한 것인지는 모르겠다.)
