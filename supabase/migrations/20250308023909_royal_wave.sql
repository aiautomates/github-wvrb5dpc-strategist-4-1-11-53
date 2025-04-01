/*
  # Create contact forms tables

  1. New Tables
    - `contact_forms`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text, nullable)
      - `phone` (text, nullable)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `form_type` (text) - Identifies which form the submission came from
      
  2. Security
    - Enable RLS on `contact_forms` table
    - Add policy for inserting data
*/

CREATE TABLE IF NOT EXISTS contact_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  form_type text NOT NULL
);

ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Allow anonymous insertions
CREATE POLICY "Allow anonymous form submissions" 
  ON contact_forms
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Only allow authenticated users to view submissions
CREATE POLICY "Allow authenticated users to view submissions"
  ON contact_forms
  FOR SELECT
  TO authenticated
  USING (true);