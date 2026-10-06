import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACTO, enlaceWhatsapp } from '../core/contacto';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-pedidos',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="pedidos" class="section" aria-labelledby="pedidos-title">
      <div class="wrap grid">
        <div class="cta">
          <h2 id="pedidos-title">¡Haz tu pedido!</h2>
          <p>Escríbenos por WhatsApp y te llevamos tu hielo bien frío en {{ zona }}.</p>
          <a class="numero" [href]="whatsapp" target="_blank" rel="noopener">
            <app-icon name="whatsapp" />
            <span>{{ telefono }}</span>
          </a>
          <a class="btn btn--light btn--lg" [href]="whatsapp" target="_blank" rel="noopener">
            Escribir por WhatsApp
          </a>
        </div>

        <ol class="pasos" aria-label="Cómo pedir">
          @for (paso of pasos; track paso.titulo; let i = $index) {
            <li>
              <span class="n" aria-hidden="true">{{ i + 1 }}</span>
              <div>
                <h3>{{ paso.titulo }}</h3>
                <p>{{ paso.texto }}</p>
              </div>
            </li>
          }
        </ol>
      </div>

      <div class="wrap gracias">
        <img src="img/mascota.png" alt="" width="760" height="445" loading="lazy" />
        <p>Gracias por confiar en nosotros.</p>
      </div>
    </section>
  `,
  styleUrl: './pedidos.scss',
})
export class Pedidos {
  protected readonly whatsapp = enlaceWhatsapp();
  protected readonly telefono = CONTACTO.telefono;
  protected readonly zona = CONTACTO.zona;
  protected readonly pasos = [
    { titulo: 'Escríbenos por WhatsApp', texto: `Al ${CONTACTO.telefono}, o con cualquier botón de esta página.` },
    { titulo: 'Cuéntanos tu pedido', texto: 'La presentación (1.5 kg o 3 kg), cuántas bolsas necesitas y tu dirección.' },
    { titulo: 'Recibe tu hielo', texto: 'Coordinamos la entrega contigo para que llegue bien frío a tu celebración o negocio.' },
  ];
}
