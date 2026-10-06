import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { enlaceWhatsapp } from '../core/contacto';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-header',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '[class.is-open]': 'open()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'open.set(false)',
  },
  template: `
    <div class="bar wrap">
      <a class="brand" href="#inicio" aria-label="Himalaya Ice, ir al inicio" (click)="open.set(false)">
        <img src="img/logo-wordmark.png" alt="" width="557" height="340" />
      </a>

      <nav id="menu" class="nav" aria-label="Principal">
        @for (link of links; track link.href) {
          <a [href]="link.href" (click)="open.set(false)">{{ link.label }}</a>
        }
      </nav>

      <a class="btn cta" [href]="whatsapp" target="_blank" rel="noopener">
        <app-icon name="whatsapp" />
        <span>Pedir por WhatsApp</span>
      </a>

      <button
        class="toggle"
        type="button"
        aria-controls="menu"
        [attr.aria-expanded]="open()"
        [attr.aria-label]="open() ? 'Cerrar menú' : 'Abrir menú'"
        (click)="open.update((v) => !v)"
      >
        <app-icon [name]="open() ? 'x' : 'menu'" />
      </button>
    </div>
  `,
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly whatsapp = enlaceWhatsapp();
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#presentaciones', label: 'Presentaciones' },
    { href: '#ocasiones', label: 'Ocasiones' },
    { href: '#pedidos', label: 'Cómo pedir' },
  ];

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }
}
