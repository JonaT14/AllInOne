-- Activez pg_cron et pg_net dans le tableau de bord Supabase au préalable.
-- Dans Vault, créez project_url = https://VOTRE-PROJET.supabase.co
-- et urgencescan_cron_secret = la même valeur aléatoire que CRON_SECRET (secrets Edge Function).
-- Ne mettez ni la clé publique ni la service_role dans le HTML.
select cron.schedule('urgencescan-expiry-hourly','5,25,45 * * * *',$job$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name='project_url') || '/functions/v1/expiry-alerts',
    headers := jsonb_build_object('Content-Type','application/json','x-cron-secret',(select decrypted_secret from vault.decrypted_secrets where name='urgencescan_cron_secret')),
    body := '{}'::jsonb, timeout_milliseconds := 10000
  );
$job$);
