import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { css, html, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import type { UmbWorkspaceViewElement } from '@umbraco-cms/backoffice/extension-registry';
import type { UmbPropertyEditorConfig } from '@umbraco-cms/backoffice/property-editor';
import { UMB_DATA_TYPE_WORKSPACE_CONTEXT } from '@umbraco-cms/backoffice/data-type';

@customElement('umb-block-grid-type-workspace-view-areas')
export class UmbBlockGridTypeWorkspaceViewAreasElement extends UmbLitElement implements UmbWorkspaceViewElement {
	//
	@state()
	_areaConfigConfigurationObject?: UmbPropertyEditorConfig;

	constructor() {
		super();

		this.consumeContext(UMB_DATA_TYPE_WORKSPACE_CONTEXT, async (context) => {
			this.observe(
				await context.propertyValueByAlias<undefined | string>('gridColumns'),
				(value) => {
					const dataTypeGridColumns = value ? parseInt(value, 10) : undefined;
					this._areaConfigConfigurationObject = [{ alias: 'defaultAreaGridColumns', value: dataTypeGridColumns }];
				},
				'observeGridColumns',
			);
		}).passContextAliasMatches();
	}

	render() {
		return html`
			<uui-box headline="Areas">
				<umb-property
					label=${this.localize.term('blockEditor_areasLayoutColumns')}
					alias="areaGridColumns"
					property-editor-ui-alias="Umb.PropertyEditorUi.Integer"></umb-property>
				<umb-property
					label=${this.localize.term('blockEditor_areasConfigurations')}
					alias="areas"
					property-editor-ui-alias="Umb.PropertyEditorUi.BlockGridAreasConfig"
					.config=${this._areaConfigConfigurationObject}
					>></umb-property
				>
			</uui-box>
		`;
	}

	static styles = [
		UmbTextStyles,
		css`
			:host {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
				gap: var(--uui-size-layout-1);
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1); // To enforce some distance to the bottom of the scroll-container.
			}
		`,
	];
}

export default UmbBlockGridTypeWorkspaceViewAreasElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-block-grid-type-workspace-view-areas': UmbBlockGridTypeWorkspaceViewAreasElement;
	}
}
