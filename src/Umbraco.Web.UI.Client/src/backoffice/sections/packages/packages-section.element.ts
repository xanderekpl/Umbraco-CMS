import '../../../backoffice/editors/shared/editor-entity/editor-entity.element';

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IRoute } from 'router-slot';

import { UmbContextConsumerMixin } from '../../../core/context';
import { UmbExtensionRegistry } from '../../../core/extension';

@customElement('umb-packages-section')
export class UmbPackagesSection extends UmbContextConsumerMixin(LitElement) {
	@state()
	private _routes: Array<IRoute> = [
		{
			path: '',
			component: () => import('./packages-overview.element'),
		},
		{
			path: '**',
			redirectTo: '',
		},
	];

	private umbExtensionRegistry?: UmbExtensionRegistry;

	constructor() {
		super();

		this.consumeContext('umbExtensionRegistry', (umbExtensionRegistry: UmbExtensionRegistry) => {
			this.umbExtensionRegistry = umbExtensionRegistry;
			this._registerViews();
		});
	}

	private _registerViews() {
		this.umbExtensionRegistry?.register({
			alias: 'Umb.Editor.Packages.Overview',
			name: 'Packages',
			type: 'editorView',
			elementName: 'umb-packages-overview',
			loader: () => import('./packages-overview.element'),
			meta: {
				icon: 'document',
				pathname: 'repo',
				editors: ['Umb.Editor.Packages'],
				weight: 10,
			},
		});

		this.umbExtensionRegistry?.register({
			alias: 'Umb.Editor.Packages.Installed',
			name: 'Installed',
			type: 'editorView',
			elementName: 'umb-packages-installed',
			loader: () => import('./packages-installed.element'),
			meta: {
				icon: 'document',
				pathname: 'installed',
				editors: ['Umb.Editor.Packages'],
				weight: 0,
			},
		});
	}

	render() {
		return html`
			<uui-icon-registry-essential>
				<umb-section-layout>
					<umb-section-main>
						<umb-editor-entity alias="Umb.Editor.Packages">
							<h1 slot="name">Packages</h1>
						</umb-editor-entity>
					</umb-section-main>
				</umb-section-layout>
			</uui-icon-registry-essential>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-packages-section': UmbPackagesSection;
	}
}
