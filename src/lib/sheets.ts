import { google } from 'googleapis';

export async function appendToSheet(data: any[]) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEETS_ID,
            range: 'Sheet1!A:H',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [data],
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error appending to sheet:', error);
        throw error;
    }
}
