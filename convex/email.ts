"use node";

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";

const TICKET_URL =
  "https://www.ticketweb.ca/event/kick-ff-celebrities-nightclub-tickets/14951263?pl=blueprint~";

const SUBJECT = "Your Free RSVP Code from ÜS";

const TEXT_BODY = `Hello,

Thank Ü for signing up.

Here is your Free RSVP code for KICK-ÖFF:

CODE: RSVP

Use the code here:
${TICKET_URL}

There are only 75 Free RSVP spots, so make sure to claim yours before they're gone.

KICK-ÖFF // 6.18.26 \\\\ CELEBRITIES NIGHTCLUB

See Ü there,
weareuand`;

const HTML_BODY = `<!doctype html>
<html>
  <body style="margin:0;background:#e2231a;font-family:Helvetica,Arial,sans-serif;color:#000;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e2231a;padding:40px 24px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:520px;background:#000;color:#e2231a;padding:32px;">
            <tr><td>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.5;color:#fff;">Hello,</p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.5;color:#fff;">Thank Ü for signing up.</p>
              <p style="margin:0 0 12px;font-size:16px;line-height:1.5;color:#fff;">Here is your Free RSVP code for KICK-ÖFF:</p>
              <p style="margin:0 0 24px;font-size:32px;font-weight:900;letter-spacing:0.1em;color:#e2231a;">CODE: RSVP</p>
              <p style="margin:0 0 24px;">
                <a href="${TICKET_URL}" style="display:inline-block;background:#e2231a;color:#000;font-weight:900;letter-spacing:0.1em;text-decoration:none;padding:16px 32px;">CLAIM YOUR SPOT</a>
              </p>
              <p style="margin:0 0 24px;font-size:14px;line-height:1.5;color:#fff;">There are only <strong>75 Free RSVP spots</strong>, so make sure to claim yours before they're gone.</p>
              <p style="margin:0 0 24px;font-size:14px;font-weight:700;letter-spacing:0.1em;color:#fff;">KICK-ÖFF // 6.18.26 \\ CELEBRITIES NIGHTCLUB</p>
              <p style="margin:0;font-size:16px;line-height:1.5;color:#fff;">See Ü there,<br/>weareuand</p>
            </td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const sendRsvpEmail = internalAction({
  args: { email: v.string() },
  handler: async (_ctx, { email }) => {
    const region = process.env.AWS_REGION;
    const fromEmail = process.env.SES_FROM_EMAIL;
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

    if (!region || !fromEmail || !accessKeyId || !secretAccessKey) {
      throw new Error(
        "Missing SES configuration. Set AWS_REGION, SES_FROM_EMAIL, AWS_ACCESS_KEY_ID, and AWS_SECRET_ACCESS_KEY in the Convex environment.",
      );
    }

    const client = new SESv2Client({
      region,
      credentials: { accessKeyId, secretAccessKey },
    });

    await client.send(
      new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: { ToAddresses: [email] },
        Content: {
          Simple: {
            Subject: { Data: SUBJECT, Charset: "UTF-8" },
            Body: {
              Text: { Data: TEXT_BODY, Charset: "UTF-8" },
              Html: { Data: HTML_BODY, Charset: "UTF-8" },
            },
          },
        },
      }),
    );

    return null;
  },
});
