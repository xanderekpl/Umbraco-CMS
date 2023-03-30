import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { UmbEntityTreeStore } from '@umbraco-cms/backoffice/store';
import type { UmbControllerHostInterface } from '@umbraco-cms/backoffice/controller';

export const UMB_PARTIAL_VIEW_TREE_STORE_CONTEXT_TOKEN = new UmbContextToken<UmbPartialViewsTreeStore>(
	'UmbPartialViewsTreeStore'
);

/**
 * Tree Store for partial views
 *
 * @export
 * @class UmbPartialViewsTreeStore
 * @extends {UmbEntityTreeStore}
 */
export class UmbPartialViewsTreeStore extends UmbEntityTreeStore {
	/**
	 * Creates an instance of UmbPartialViewsTreeStore.
	 * @param {UmbControllerHostInterface} host
	 * @memberof UmbPartialViewsTreeStore
	 */
	constructor(host: UmbControllerHostInterface) {
		super(host, UMB_PARTIAL_VIEW_TREE_STORE_CONTEXT_TOKEN.toString());
	}
}
