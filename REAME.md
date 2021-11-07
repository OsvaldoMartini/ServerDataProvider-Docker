## Power Shell Curl Loop While
```
while($true) {curl.exe -d '{"id":5, "username": "martini"}' -H @{"content-type"= "application/json"} http://localhost:5000/api/user/login echo "`n"}
```

## Bash Curl Loop While
```
while true; do curl -d '{"id":5, "username": "martini"}' -H '{"content-type"= "application/json"}' http://localhost:5000/api/user/login; echo; done
or
while true; do curl -d '{"id":5, "username": "martini"}' -H @'{"content-type"= "application/json"}' http://localhost:5000/api/user/login; echo; done
```



### Curl cmds with Credential

```
curl.exe -d '{"id":5,"name":"martini"}' -H @{ "content-type" = "application/json"} http://localhost:8080/api/users

while(true); curl.exe  -H @{ "content-type" = "application/json"} http://localhost:8080/app1; do sleep 0.1; done;


while curl -sI -o /dev/null -w "%{http_code}\n" https://example.com; do sleep 0.1; done;
```

```
curl.exe --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "move", "params": ["acc-1", "acc-2", 6, 5, "happy birthday!"] }' -H 'content-type: application/json;' http://localhost:8080/app1

Invoke-RestMethod -Uri http://localhost:8080/api/ -body $thisCanBeAPowerShellObject
Invoke-RestMethod -Uri http://localhost:18332/ -Credential bitcoinipvision -body $thisCanBeAPowerShellObject
```

```
curl --user bitcoinipvision --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "move", "params": ["acc-1", "acc-2", 6, 5, "happy birthday!"] }' -H @{ "content-type" = "application/json"} http://localhost:8080//aap3
```

```
curl.exe -X POST -H "Content-Type: application/json" -d '{"username":"abc","password":"abc"}'  https://localhost:8080/api/users
```

### More

```
while(true);  curl.exe -s -k 'GET' -H 'header info' -b 'stuff' 'http://localhost:8080/app3.com/id='$i; done;
```

## While

```
while curl.exe -sI -o /dev/null -w "%{http_code}\n" https://localhost:8080/app2; do sleep 0.1; done;
```

while [ true ]
do
curl http://sample.com/hello.php &> /dev/null)
if [["$?" -eq 0]]; then
exit 0
fi
done
