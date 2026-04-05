import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// The email address that receives a notification every time someone joins
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL

export async function POST(request) {
  try {
    const { email, businessName } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Send confirmation to the person who signed up
    await resend.emails.send({
      from: 'PressQuote <waitlist@pressquote.com>',
      to: email,
      subject: "You're on the PressQuote waitlist",
      html: `
        <div style="font-family: Inter, system-ui, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #111;">
          <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">You're on the list.</h1>
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 24px;">
            Thanks${businessName ? `, ${businessName}` : ''} — we'll reach out as soon as PressQuote is ready for early access.
          </p>
          <p style="font-size: 14px; color: #888; line-height: 1.6;">
            In the meantime, if you have questions or want to tell us about how your shop handles quoting today, just reply to this email.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
          <p style="font-size: 12px; color: #bbb;">PressQuote — profitable print quoting, powered by your real numbers.</p>
        </div>
      `,
    })

    // Notify yourself when someone joins
    if (NOTIFY_EMAIL) {
      await resend.emails.send({
        from: 'PressQuote <waitlist@pressquote.com>',
        to: NOTIFY_EMAIL,
        subject: `New waitlist signup: ${businessName || email}`,
        html: `
          <div style="font-family: Inter, system-ui, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #111;">
            <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px;">New waitlist signup</h2>
            <p style="font-size: 15px; color: #333;"><strong>Email:</strong> ${email}</p>
            ${businessName ? `<p style="font-size: 15px; color: #333;"><strong>Business:</strong> ${businessName}</p>` : ''}
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
