import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACTO, enlaceWhatsapp } from '../core/contacto';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="inicio" class="hero" aria-labelledby="hero-title">
      <div class="wrap grid">
        <div class="copy">
          <h1 id="hero-title">
            <span class="line"><span>Detrás de cada</span></span>
            <span class="line"><span>celebración hay una</span></span>
            <span class="line"><span>bebida <em>bien fría.</em></span></span>
          </h1>
          <p class="lead">
            En Himalaya Ice llevamos frescura a tus mejores momentos. Desde una reunión familiar hasta los
            grandes eventos, nuestros cubitos de hielo son el complemento perfecto.
          </p>
          <div class="actions">
            <a class="btn btn--lg" [href]="whatsapp" target="_blank" rel="noopener">
              <app-icon name="whatsapp" />
              Pide por WhatsApp
            </a>
            <a class="btn btn--ghost btn--lg" href="#presentaciones">Ver presentaciones</a>
          </div>
          <ul class="facts" aria-label="Datos del servicio">
            <li><app-icon name="map-pin" /> Delivery en {{ zona }}</li>
            <li><app-icon name="package" /> Bolsas de 1.5 kg y 3 kg</li>
          </ul>
        </div>

        <div class="stage" aria-hidden="true">
          <span class="cube c1"></span>
          <span class="cube c2"></span>
          <span class="cube c3"></span>
          <img
            class="bag"
            src="img/bolsa.png"
            alt=""
            width="705"
            height="915"
            fetchpriority="high"
          />
          <span class="cube c4"></span>
        </div>
      </div>

      <svg class="range" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <polygon
          class="far"
          points="0,320 0,190 90,150 170,175 260,95 330,140 410,120 520,40 600,110 680,90 760,150 860,70 940,120 1030,100 1120,30 1200,105 1290,85 1380,140 1440,120 1440,320"
        />
        <g class="snow">
          <polygon points="520,40 479,70 495,64 507,74 522,63 536,72 554,70" />
          <polygon points="1120,30 1079,62 1093,57 1104,67 1119,56 1135,65 1154,62" />
          <polygon points="860,70 829,95 842,91 852,99 864,90 880,97 900,95" />
          <polygon points="260,95 234,118 245,114 254,121 266,113 280,120 296,118" />
        </g>
        <polygon
          class="mid"
          points="0,320 0,230 120,170 200,205 310,150 420,215 540,165 640,210 760,140 870,200 990,160 1100,215 1220,170 1330,210 1440,180 1440,320"
        />
        <polygon class="front" points="0,320 0,270 180,245 360,280 560,240 760,285 980,250 1200,282 1440,255 1440,320" />
      </svg>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly whatsapp = enlaceWhatsapp();
  protected readonly zona = CONTACTO.zona;
}
