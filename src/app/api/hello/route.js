const { google } = require('googleapis');

export async function POST(request){
    if (request.method === 'POST'){
        
        const data= await request.json();
        console.log(data)
        
        /**
         * const data = {
            fecha: '2023-06-11',
            nombre: 'gabriela',
            celular: '123456789',
            mensaje: 'novia de telmo',
          };
         */
        
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

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Hoja1!A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[data.fecha, data.nombre, data.celular, data.mensaje]],
            },
        });
        console.log(response.data)
    }
    return new Response(JSON.stringify({
        mensaje: 'Se registro exitosamente.'
    }))
}