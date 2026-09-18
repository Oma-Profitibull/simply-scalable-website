/*
# Create newsletter subscribers table

1. New Tables
   - `newsletter_subscribers`
     - `id` (uuid, primary key) — unique identifier for each subscriber
     - `first_name` (text) — the subscriber's first name from the signup form
     - `email` (text, unique, not null) — the subscriber's email address; unique to prevent duplicates
     - `created_at` (timestamptz) — when the person subscribed

2. Security
   - Enable RLS on `newsletter_subscribers`.
   - Add an INSERT policy for anon + authenticated so anyone visiting the public blog can subscribe.
   - Intentionally NO select/update/delete policies: the collected email list must not be readable
     through the public anon key, so the app can add subscribers but never read the list back.

3. Important Notes
   1. This is a public, no-login signup form, so writes run as the anon role.
   2. The unique constraint on email means a repeat signup will be rejected by the database; the
      frontend treats that as "already subscribed" rather than an error.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL DEFAULT '',
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter_subscribers" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);
