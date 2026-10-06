import { ChangeDetectionStrategy, Component } from '@angular/core';
import { enlaceWhatsapp } from '../core/contacto';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-ocasiones',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="ocasiones" class="wrap section" aria-labelledby="ocasiones-title">
      <div class="aside">
        <h2 id="ocasiones-title">Frío que acompaña tus momentos</h2>
        <p>Desde una reunión familiar hasta los grandes eventos, hay una bolsa de Himalaya Ice para cada ocasión.</p>
        <img
          src="img/afiche-montana.jpg"
          alt="Bolsa de cubitos Himalaya Ice entre cubitos de hielo con montañas nevadas de fondo"
          width="800"
          height="1200"
          loading="lazy"
        />
      </div>

      <ol class="lista">
        @for (o of ocasiones; track o.titulo) {
          <li>
            <span class="icono"><app-icon [name]="o.icono" /></span>
            <div>
              <h3>{{ o.titulo }}</h3>
              <p>{{ o.texto }}</p>
              <a class="link" [href]="o.enlace" target="_blank" rel="noopener">
                {{ o.accion }} <app-icon name="arrow-right" />
              </a>
            </div>
          </li>
        }
      </ol>
    </section>
  `,
  styleUrl: './ocasiones.scss',
})
export class Ocasiones {
  protected readonly ocasiones = [
    {
      icono: 'house',
      titulo: 'Hogares y reuniones',
      texto:
        'El cumpleaños de la familia, el partido con los amigos o la parrilla del domingo. Que la bebida nunca se quede tibia.',
      accion: 'Pedir para mi reunión',
      enlace: enlaceWhatsapp('Hola Himalaya Ice, quiero pedir hielo para una reunión en casa.'),
    },
    {
      icono: 'party-popper',
      titulo: 'Eventos grandes',
      texto:
        'Matrimonios, quinceañeros, fiestas y eventos de empresa. Cuéntanos cuántos invitados esperas y coordinamos las bolsas que necesitas.',
      accion: 'Cotizar para mi evento',
      enlace: enlaceWhatsapp('Hola Himalaya Ice, quiero cotizar hielo para un evento.'),
    },
    {
      icono: 'store',
      titulo: 'Negocios',
      texto:
        'Bodegas, restaurantes, bares y cevicherías que necesitan hielo para atender todos los días. Escríbenos y coordinamos tus pedidos.',
      accion: 'Pedir para mi negocio',
      enlace: enlaceWhatsapp('Hola Himalaya Ice, tengo un negocio y quiero pedir hielo.'),
    },
  ];
}
