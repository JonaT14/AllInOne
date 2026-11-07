CREATE TABLE `backups` (
	`id` text PRIMARY KEY NOT NULL,
	`cabinet_id` text NOT NULL,
	`revision` integer NOT NULL,
	`inventory_json` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`cabinet_id`) REFERENCES `cabinets`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `cabinets` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`inventory_json` text DEFAULT '[]' NOT NULL,
	`revision` integer DEFAULT 0 NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `invites` (
	`code` text PRIMARY KEY NOT NULL,
	`cabinet_id` text NOT NULL,
	`email` text NOT NULL,
	`display_name` text NOT NULL,
	`profession` text NOT NULL,
	`role` text NOT NULL,
	`expires_at` text NOT NULL,
	`used_at` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`cabinet_id`) REFERENCES `cabinets`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `members` (
	`cabinet_id` text NOT NULL,
	`user_id` text NOT NULL,
	`email` text NOT NULL,
	`display_name` text NOT NULL,
	`profession` text DEFAULT 'Professionnel de santé' NOT NULL,
	`role` text DEFAULT 'editor' NOT NULL,
	`created_at` text NOT NULL,
	PRIMARY KEY(`cabinet_id`, `user_id`),
	FOREIGN KEY (`cabinet_id`) REFERENCES `cabinets`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user_settings` (
	`cabinet_id` text NOT NULL,
	`user_id` text NOT NULL,
	`settings_json` text DEFAULT '{}' NOT NULL,
	`updated_at` text NOT NULL,
	PRIMARY KEY(`cabinet_id`, `user_id`),
	FOREIGN KEY (`cabinet_id`) REFERENCES `cabinets`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`display_name` text NOT NULL,
	`active_cabinet_id` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
