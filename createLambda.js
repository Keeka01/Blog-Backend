import {DynamoDBDocument, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({});

const docClient = DynamoDBDocument.from(client);

const tableName = "crudFunc";

export const handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };

    let requestJSON = JSON.parse(event.body);
        await docClient.put({
            TableName: tableName,
                Item: {
                    id: requestJSON.id,
                    name: requestJSON.name,
                    surname: requestJSON.surname,
                }
                })
        body = "Added/Updated Product ${requestJSON.id}";

        return {
            statusCode,
            body,
            headers
        };
};