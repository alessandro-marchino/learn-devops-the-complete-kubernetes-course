# COMMANDS

```sh
kubectl deploy -f .
kubectl set image deployment/helloworld-deployment helloworld=registry.infrastructure.local/marchino/myapp:2
kubectl rollout status deployment/helloworld-deployment
```