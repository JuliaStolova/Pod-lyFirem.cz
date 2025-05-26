import db from '$lib/server/db';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals }) => {
    // Correct way to get session with Auth.js v5
    const session = await locals.auth();
    
    if (!session?.user) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();

    try {
        const stmt = db.prepare(`
            INSERT INTO firms (
                name, ownership, economicRating, specialization, 
                type, year, debt, activity, price, 
                priceDisplay, taxes, ebtida, sales, 
                revenue, lost, description, location, vatId, userId
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const result = stmt.run(
            data.name,
            data.ownership,
            data.economicRating,
            data.specialization,
            data.type,
            data.year,
            data.debt,
            data.activity,
            data.price,
            data.priceDisplay,
            data.taxes,
            data.ebtida,
            data.sales,
            data.revenue,
            data.lost,
            data.description,
            data.location,
            session.user.id // Use the authenticated user's ID
        );

        return json({ id: result.lastInsertRowid }, { status: 201 });
    } catch (error) {
        console.error('Database error:', error);
        return json({ error: 'Database operation failed' }, { status: 500 });
    }
};