import { TriggerCronJob, TRIGGER_CRON_ACTION_NAME } from './trigger-cron';
import { WC_COM_TOGGLE_ACTION_NAME, ToggleWCComUrl } from './toggle-wccom-url';
import {
	CLEAR_TRANSIENT_ACTION_NAME,
	ClearTransients,
} from './clear-transients';

export default [
	{
		command: 'Trigger WCA Install',
		description: `This will trigger a WooCommerce Admin install, which usually
    happens when a new version (or new install) of WooCommerce
    Admin is installed. Triggering the install manually can
    run tasks such as removing obsolete admin notes.`,
		action: 'triggerWcaInstall',
	},
	{
		command: 'Reset Onboarding Wizard',
		description: 'Resets Onboarding Wizard progress.',
		action: 'resetOnboardingWizard',
	},
	{
		command: 'Reset Jetpack Connection',
		description: 'Resets Jepack Connection options.',
		action: 'resetJetpackConnection',
	},
	{
		command: 'Enable wc-admin Tracking',
		description:
			'Enable Tracking Debug mode. You should change your console level to verbose.',
		action: 'enableTrackingDebug',
	},
	{
		command: 'Update WC installation timestamp',
		description:
			'Updates woocommerce_admin_install_timestamp to a certain date',
		action: 'updateStoreAge',
	},
	{
		command: 'Run wc_admin_daily job',
		description: 'Run wc_admin_daily job',
		action: 'runWcAdminDailyJob',
	},
	{
		command: 'Delete all products',
		description: 'Delete all products',
		action: 'deleteAllProducts',
	},
	{
		command: 'Run a cron job',
		description: <TriggerCronJob />,
		action: TRIGGER_CRON_ACTION_NAME,
	},
	{
		command: 'Toggle woocommerce.com url overwrite',
		description: <ToggleWCComUrl />,
		action: WC_COM_TOGGLE_ACTION_NAME,
		buttonName: 'Toggle',
	},
	{
		command: 'Clear transients',
		description: <ClearTransients />,
		action: CLEAR_TRANSIENT_ACTION_NAME,
		buttonName: 'Clear',
	},
];
