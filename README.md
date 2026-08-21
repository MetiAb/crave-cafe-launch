# Crave Cafe Launch

## Reservations

Reservations are made directly with the restaurant by phone, email, or in person. The website no longer submits reservation forms or creates booking records.

The reservation notification Edge Function is retained for future use. If you re-enable online booking, configure these Supabase secrets before expecting email delivery:

```sh
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set RESERVATION_NOTIFICATION_EMAIL=reservations@cravecafe.et
supabase functions deploy send-reservation-email
```



This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1c205ac0-6b4e-4eb7-9e54-79995b9cdd67).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
