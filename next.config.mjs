import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@i18n'] = path.resolve(__dirname, 'app/i18n');
    // Agrega otros alias si es necesario
    return config;
  },
};

export default nextConfig;


