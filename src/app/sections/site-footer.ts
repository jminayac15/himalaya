import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACTO, enlaceWhatsapp } from '../core/contacto';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="wrap footer">
      <img class="logo" src="img/logo-himalaya-ice.png" alt="Himalaya Ice" width="557" height="560" loading="lazy" />

      <div class="col">
        <p class="slogan">Hielo puro, siempre fresco.</p>
        <p>Cubitos de hielo en bolsas de 1.5 kg y 3 kg. Pedidos y delivery en {{ contacto.zona }}.</p>
      </div>

      <div class="col">
        <h2>Pedidos</h2>
        <a class="tel" [href]="whatsapp" target="_blank" rel="noopener">
          <app-icon name="whatsapp" /> {{ contacto.telefono }}
        </a>
      </div>

      <div class="col">
        <h2>Síguenos</h2>
        <ul class="redes">
          @for (r of contacto.redes; track r.red) {
            <li>
              @if (r.url) {
                <a [href]="r.url" target="_blank" rel="noopener" [attr.aria-label]="r.nombre + ' de Himalaya Ice'">
                  <app-icon [name]="r.red" />
                </a>
              } @else {
                <span [attr.aria-label]="r.nombre" role="img"><app-icon [name]="r.red" /></span>
              }
            </li>
          }
        </ul>
        <p>{{ contacto.usuarioRedes }} · {{ contacto.hashtag }}</p>
      </div>

      <p class="legal">© {{ year }} Himalaya Ice. Todos los derechos reservados.</p>
    </footer>
  `,
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly contacto = CONTACTO;
  protected readonly whatsapp = enlaceWhatsapp();
  protected readonly year = new Date().getFullYear();
}
