import { manifest as checkboxList } from '../../../property-editors/checkbox-list/manifests.js';
import { manifest as colorEditor } from '../../../property-editors/color-swatches-editor/manifests.js';
import { manifest as colorPicker } from '../../../property-editors/color-picker/manifests.js';
import { manifest as datePicker } from '../../../property-editors/date-picker/manifests.js';
import { manifest as dropdown } from '../../../property-editors/dropdown/manifests.js';
import { manifest as eyeDropper } from '../../../property-editors/eye-dropper/manifests.js';
import { manifest as iconPicker } from '../../../property-editors/icon-picker/manifests.js';
import { manifest as label } from '../../../property-editors/label/manifests.js';
import { manifest as multipleTextString } from '../../../property-editors/multiple-text-string/manifests.js';
import { manifest as multiUrlPicker } from '../../../property-editors/multi-url-picker/manifests.js';
import { manifest as numberRange } from './number-range/manifests.js';
import { manifest as orderDirection } from './order-direction/manifests.js';
import { manifest as overlaySize } from './overlay-size/manifests.js';
import { manifest as radioButtonList } from './radio-button-list/manifests.js';
import { manifest as select } from './select/manifests.js';
import { manifest as slider } from './slider/manifests.js';
import { manifest as textArea } from './textarea/manifests.js';
import { manifest as toggle } from './toggle/manifests.js';
import { manifest as uploadField } from './upload-field/manifests.js';
import { manifest as valueType } from './value-type/manifests.js';
import { manifests as collectionView } from '../../../property-editors/collection-view/manifests.js';
import { manifests as numbers } from '../../../property-editors/number/manifests.js';
import { manifests as textBoxes } from './text-box/manifests.js';
import { manifests as treePicker } from './tree-picker/manifests.js';
import type { ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestPropertyEditorUi> = [
	checkboxList,
	colorEditor,
	colorPicker,
	datePicker,
	dropdown,
	eyeDropper,
	iconPicker,
	label,
	multipleTextString,
	multiUrlPicker,
	numberRange,
	orderDirection,
	overlaySize,
	radioButtonList,
	select,
	slider,
	textArea,
	toggle,
	uploadField,
	valueType,
	...collectionView,
	...numbers,
	...textBoxes,
	...treePicker,
];
