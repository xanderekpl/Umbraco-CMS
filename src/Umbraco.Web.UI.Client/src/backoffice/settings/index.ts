import { UmbThemeContext } from '../themes/theme.context';
import { manifests as settingsSectionManifests } from './section.manifests';
import { manifests as settingsMenuManifests } from './menu.manifests';
import { manifests as dashboardManifests } from './dashboards/manifests';
import { manifests as dataTypeManifests } from './data-types/manifests';
import { manifests as extensionManifests } from './extensions/manifests';
import { manifests as cultureManifests } from './cultures/manifests';
import { manifests as languageManifests } from './languages/manifests';
import { manifests as logviewerManifests } from './logviewer/manifests';
import {
	UmbAppLanguageContext,
	UMB_APP_LANGUAGE_CONTEXT_TOKEN,
} from './languages/app-language-select/app-language.context';
import { UmbEntrypointOnInit } from '@umbraco-cms/extensions-api';
import { ManifestTypes } from '@umbraco-cms/extensions-registry';
import { UmbContextProviderController } from '@umbraco-cms/context-api';

export const manifests: Array<ManifestTypes> = [
	...settingsSectionManifests,
	...settingsMenuManifests,
	...dashboardManifests,
	...dataTypeManifests,
	...extensionManifests,
	...cultureManifests,
	...languageManifests,
	...logviewerManifests,
];

export const onInit: UmbEntrypointOnInit = (host, extensionRegistry) => {
	extensionRegistry.registerMany(manifests);
	new UmbContextProviderController(host, UMB_APP_LANGUAGE_CONTEXT_TOKEN, new UmbAppLanguageContext(host));
	new UmbThemeContext(host);
};
