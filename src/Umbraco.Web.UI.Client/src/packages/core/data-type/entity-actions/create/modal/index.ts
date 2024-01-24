import { UmbModalToken } from '@umbraco-cms/backoffice/modal';

export interface UmbDataTypeCreateOptionsModalData {
	parentUnique: string | null;
}

export const UMB_DATA_TYPE_CREATE_OPTIONS_MODAL = new UmbModalToken<UmbDataTypeCreateOptionsModalData>(
	'Umb.Modal.DataTypeCreateOptions',
	{
		modal: {
			type: 'sidebar',
			size: 'small',
		},
	},
);
