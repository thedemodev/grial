# Grial REST wrapper API
This example show how you can use Grial to easily wrap a REST API using GraphQL and the @grial/connector-rest.

## [Try it](https://grial-example-rest-wrapper.now.sh/ide?operationName=undefined&query=query%20%7B%0A%20%20user(id%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20username%0A%20%20%20%20email%0A%20%20%20%20address%20%7B%0A%20%20%20%20%20%20street%0A%20%20%20%20%20%20suite%0A%20%20%20%20%20%20city%0A%20%20%20%20%20%20zipcode%0A%20%20%20%20%20%20geo%20%7B%0A%20%20%20%20%20%20%20%20lat%0A%20%20%20%20%20%20%20%20lng%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20phone%0A%20%20%20%20website%0A%20%20%20%20company%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20catchPhrase%0A%20%20%20%20%20%20bs%0A%20%20%20%20%7D%0A%20%20%20%20todos%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20completed%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)