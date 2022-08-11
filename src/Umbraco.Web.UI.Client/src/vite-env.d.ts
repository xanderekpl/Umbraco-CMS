/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_UMBRACO_INSTALL_STATUS: 'running' | 'must-upgrade' | 'must-install';
	VITE_UMBRACO_INSTALL_PRECONFIGURED: string;
	VITE_UMBRACO_USE_MSW: 'on' | 'off';
}
