
alter table "public"."user_keys" alter column "id" set default gen_random_uuid();
ALTER TABLE "public"."user_keys" ALTER COLUMN "id" TYPE uuid;

alter table "public"."user_sessions" alter column "id" set default gen_random_uuid();
ALTER TABLE "public"."user_sessions" ALTER COLUMN "id" TYPE uuid;
