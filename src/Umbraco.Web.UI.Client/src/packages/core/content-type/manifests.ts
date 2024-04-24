import { manifests as workspaceManifests } from './workspace/manifests.js';
import { manifests as modalManifests } from './modals/manifests.js';
import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes> = [...workspaceManifests, ...modalManifests];
