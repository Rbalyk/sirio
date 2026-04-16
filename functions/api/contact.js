const TO_EMAIL = 'rbalik341@gmail.com';
const FROM_EMAIL = 'Landing <noreply@sirio.agency>';

export async function onRequestPost(context) {
    const { request, env } = context;

    let body;
    try {
        body = await request.json();
    } catch {
        return json({ error: 'Invalid JSON' }, 400);
    }

    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();

    if (!email || !email.includes('@')) {
        return json({ error: 'Invalid email' }, 400);
    }
 
    if (!phone || !/\d{7,}/.test(phone)) {
        return json({ error: 'Invalid phone' }, 400);
    }

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: 'New lead from sirio.agency',
            html: `
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      `,
        }),
    });

    if (!res.ok) {
        const text = await res.text();
        return json({ error: 'Failed to send email', details: text }, 500);
    }

    return json({ ok: true, message: 'Sent successfully' }, 200);
}

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}