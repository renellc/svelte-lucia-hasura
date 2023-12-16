
ALTER TABLE "public"."user_sessions" ALTER COLUMN "id" TYPE text;
ALTER TABLE "public"."user_sessions" ALTER COLUMN "id" drop default;

ALTER TABLE "public"."user_keys" ALTER COLUMN "id" TYPE text;
ALTER TABLE "public"."user_keys" ALTER COLUMN "id" drop default;
