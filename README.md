# aws-lambda-koa-barebone
It is a koa application which can be deployed on lambda and can be exposed using the API gateway.

To use it, you can use a SAM template to deploy a proxy endpoint for this application in lambda.

The package uses [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) to export the handler from the codebase.
