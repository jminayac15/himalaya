import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-nosotros',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="band" aria-hidden="true">
      @for (copy of [0, 1]; track copy) {
        <ul class="track">
          @for (frase of frases; track frase) {
            <li><app-icon name="snowflake" />{{ frase }}</li>
          }
        </ul>
      }
    </div>
    <p class="visually-hidden">{{ frases.join('. ') }}.</p>

    <section id="nosotros" class="about" aria-labelledby="nosotros-title">
      <div class="wrap intro">
        <img
          class="mascota"
          src="img/mascota.png"
          alt="La mascota de Himalaya Ice, una gotita azul sonriente entre cubitos de hielo"
          width="760"
          height="445"
          loading="lazy"
        />
        <div class="text">
          <h2 id="nosotros-title">Hielo siempre fresco, para que tú solo te preocupes de celebrar.</h2>
          <p>
            Somos Himalaya Ice: cubitos de hielo listos para tus bebidas, en bolsas bien cerradas. Te los
            llevamos para la reunión del fin de semana, para el evento que llevas semanas organizando o para
            el día a día de tu negocio.
          </p>
          <p class="firma">Himalaya Ice, calidad y frescura en cada cubito.</p>
        </div>
      </div>

      <ul class="wrap atributos" aria-label="Lo que nos distingue">
        @for (a of atributos; track a.titulo) {
          <li>
            <app-icon [name]="a.icono" />
            <h3>{{ a.titulo }}</h3>
            <p>{{ a.texto }}</p>
          </li>
        }
      </ul>
    </section>
  `,
  styleUrl: './nosotros.scss',
})
export class Nosotros {
  protected readonly frases = [
    'Hielo siempre fresco',
    'Calidad y frescura en cada cubito',
    'Frío que acompaña tus momentos',
    '#BienvenidosaHimalaya',
  ];

  protected readonly atributos = [
    { icono: 'snowflake', titulo: 'Máxima pureza', texto: 'Hielo limpio, listo para servir directo en tus bebidas.' },
    { icono: 'droplet', titulo: 'Larga duración', texto: 'Cubitos que acompañan el ritmo de toda la reunión.' },
    { icono: 'glass-water', titulo: 'En cubitos', texto: 'El tamaño práctico para vasos, jarras y coolers.' },
    { icono: 'shield-check', titulo: 'Calidad garantizada', texto: 'Cuidamos cada bolsa para que llegue bien a tus manos.' },
  ];
}
