import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACTO } from '../core/contacto';

@Component({
  selector: 'app-galeria',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap section" aria-labelledby="galeria-title">
      <header>
        <h2 id="galeria-title">Así llega Himalaya Ice</h2>
        <p>Síguenos como <strong>{{ usuario }}</strong> y comparte tus momentos con {{ hashtag }}.</p>
      </header>
      <div class="grid">
        @for (f of fotos; track f.src) {
          <figure [class]="f.clase">
            <img [src]="f.src" [alt]="f.alt" [width]="f.w" [height]="f.h" loading="lazy" />
          </figure>
        }
      </div>
    </section>
  `,
  styleUrl: './galeria.scss',
})
export class Galeria {
  protected readonly usuario = CONTACTO.usuarioRedes;
  protected readonly hashtag = CONTACTO.hashtag;
  protected readonly fotos = [
    {
      src: 'img/afiche-presentaciones.jpg',
      alt: 'Afiche de Himalaya Ice con las presentaciones de 1.5 kg y 3 kg y la mascota',
      w: 720,
      h: 720,
      clase: 'ancho',
    },
    {
      src: 'img/afiche-beneficios.jpg',
      alt: 'Bolsa Himalaya Ice con los beneficios: máxima pureza, larga duración, cubitos de hielo y calidad garantizada',
      w: 800,
      h: 1190,
      clase: 'alto',
    },
  ];
}
