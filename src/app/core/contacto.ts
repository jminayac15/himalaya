/** Datos de contacto de Himalaya Ice. Un solo lugar para cambiarlos. */
export const CONTACTO = {
  telefono: '969 742 105',
  whatsapp: '51969742105',
  usuarioRedes: '@HimalayaIce',
  hashtag: '#BienvenidosaHimalaya',
  zona: 'Lima',
  /** Completar con los enlaces reales de cada perfil; los que queden en null se muestran sin enlace. */
  redes: [
    { red: 'instagram', nombre: 'Instagram', url: null },
    { red: 'facebook', nombre: 'Facebook', url: null },
    { red: 'tiktok', nombre: 'TikTok', url: null },
  ] as const satisfies ReadonlyArray<{ red: string; nombre: string; url: string | null }>,
} as const;

export const MENSAJE_GENERAL = 'Hola Himalaya Ice, quiero hacer un pedido de hielo.';

/** Enlace de WhatsApp con mensaje prellenado. */
export function enlaceWhatsapp(mensaje: string = MENSAJE_GENERAL): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
