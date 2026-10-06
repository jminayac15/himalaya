import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { enlaceWhatsapp } from '../core/contacto';
import { Icon } from '../shared/icon';

interface Presentacion {
  id: '1-5' | '3';
  peso: string;
  numero: string;
  para: string;
  texto: string;
  usos: string[];
}

const PRESENTACIONES: Presentacion[] = [
  {
    id: '1-5',
    peso: '1.5 kg',
    numero: '1.5',
    para: 'Para la casa y las reuniones',
    texto: 'La bolsa práctica para el almuerzo familiar, el partido del domingo o para tener siempre hielo a la mano.',
    usos: ['Reuniones en casa', 'Bebidas del día a día', 'Fácil de guardar'],
  },
  {
    id: '3',
    peso: '3 kg',
    numero: '3',
    para: 'Para fiestas, eventos y negocios',
    texto: 'Más hielo en una sola bolsa, para cuando hay muchos vasos que llenar y el cooler no puede quedarse vacío.',
    usos: ['Cumpleaños y fiestas', 'Eventos grandes', 'Bodegas y restaurantes'],
  },
];

@Component({
  selector: 'app-presentaciones',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="presentaciones" class="wrap section" aria-labelledby="presentaciones-title">
      <div class="stage" [class.is-big]="actual().id === '3'" aria-hidden="true">
        @for (p of [actual()]; track p.id) {
          <p class="numeral">{{ p.numero }}<span>kg</span></p>
        }
        <img class="bag" src="img/bolsa.png" alt="" width="705" height="915" loading="lazy" />
      </div>

      <div class="panel">
        <h2 id="presentaciones-title">Elige tu presentación</h2>
        <p class="sub">Dos tamaños, el mismo frío.</p>

        <fieldset class="selector">
          <legend class="visually-hidden">Tamaño de bolsa</legend>
          @for (p of presentaciones; track p.id) {
            <label [class.is-active]="actual().id === p.id">
              <input
                type="radio"
                name="presentacion"
                [value]="p.id"
                [checked]="actual().id === p.id"
                (change)="seleccion.set(p.id)"
              />
              {{ p.peso }}
            </label>
          }
        </fieldset>

        <div aria-live="polite">
          @for (p of [actual()]; track p.id) {
            <div class="detalle">
              <h3>{{ p.para }}</h3>
              <p>{{ p.texto }}</p>
              <ul>
                @for (uso of p.usos; track uso) {
                  <li>{{ uso }}</li>
                }
              </ul>
            </div>
          }
        </div>

        <a class="btn btn--lg" [href]="enlace()" target="_blank" rel="noopener">
          <app-icon name="whatsapp" />
          Pedir bolsas de {{ actual().peso }}
        </a>
        <p class="nota">
          ¿Necesitas varias bolsas para un evento o tu negocio? Escríbenos y coordinamos tu pedido.
        </p>
      </div>
    </section>
  `,
  styleUrl: './presentaciones.scss',
})
export class Presentaciones {
  protected readonly presentaciones = PRESENTACIONES;
  protected readonly seleccion = signal<Presentacion['id']>('1-5');
  protected readonly actual = computed(() => PRESENTACIONES.find((p) => p.id === this.seleccion())!);
  protected readonly enlace = computed(() =>
    enlaceWhatsapp(`Hola Himalaya Ice, quiero pedir bolsas de hielo de ${this.actual().peso}.`),
  );
}
