CREATE TABLE "public"."user_keys" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "hashed_password" text, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE cascade);COMMENT ON TABLE "public"."user_keys" IS E'The different ways a user can authenticate through the app';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
