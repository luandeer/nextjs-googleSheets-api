const { google } = require('googleapis');

export async function GET(request) {
    if (request.method === 'GET') {

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({
            auth,
            version: 'v4',
        });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Hoja2!A2:A', // Rango de la primera columna de la segunda hoja (puedes ajustarlo según tus necesidades)
        });

        const values = response.data.values;
        const urls = values ? values.flat() : [];

        return new Response(JSON.stringify({
            urls,
        }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });



    }

    return new Response(JSON.stringify({
        mensaje: 'Método no permitido',
    }), {
        status: 405,
        headers: {
            'Content-Type': 'application/json',
        },
    });

}


