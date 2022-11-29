# choreo-code-push-trigger

This action will trigger the code push api to trigger the auto deploy

## Example

```yaml
steps:
  - name: Trigger Code Push
    uses: choreo-templates/choreo-code-push-trigger@v1.0.0
    with:
      baseURL: ${{ BASE_URL }}
      componentId: ${{ COMPONENT_ID }}
      versionId: ${{ VERSION_ID }}
      secret: ${{ SECRET }}
      payload: ${{ PAYLOAD }}
```
