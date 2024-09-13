import { UMB_MEMBER_ENTITY_TYPE } from '../entity.js';
import type { ManifestTypes, UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes | UmbExtensionManifestKind> = [
	{
		type: 'pickerSearchResultItem',
		kind: 'default',
		alias: 'Umb.PickerSearchResultItem.Member',
		name: 'Member Picker Search Result Item',
		forEntityTypes: [UMB_MEMBER_ENTITY_TYPE],
	},
];
