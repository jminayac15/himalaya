import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { enlaceWhatsapp } from '../core/contacto';
import { Icon } from '../shared/icon';

/** Botón de pedido siempre a un toque, visible después de pasar el inicio. */
@Component({
  selector: 'app-whatsapp-flotante',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-visible]': 'visible()',
    '(window:scroll)': 'onScroll()',
  },
  template: `
    <a [href]="whatsapp" target="_blank" rel="noopener" aria-label="Pedir hielo por WhatsApp" [attr.tabindex]="visible() ? 0 : -1">
      <app-icon name="whatsapp" />
      <span>Pedir hielo</span>
    </a>
  `,
  styles: `
    :host {
      position: fixed;
      right: clamp(1rem, 3vw, 2rem);
      bottom: clamp(1rem, 3vw, 2rem);
      z-index: 40;
      opacity: 0;
      transform: translateY(1.5rem) scale(0.9);
      pointer-events: none;
      transition:
        opacity 0.4s var(--ease-out),
        transform 0.5s var(--ease-out);
    }
    :host(.is-visible) {
      opacity: 1;
      transform: none;
      pointer-events: auto;
    }
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.85rem 1.25rem 0.85rem 1rem;
      border-radius: 999px;
      background: var(--blue-600);
      color: var(--on-blue);
      font-weight: 700;
      text-decoration: none;
      box-shadow: 0 16px 34px -14px rgb(8 47 82 / 0.75);
      transition: background-color 0.2s ease, transform 0.35s var(--ease-out);
      &:hover {
        background: var(--blue-700);
        transform: translateY(-2px);
      }
    }
    app-icon {
      width: 1.6rem;
      height: 1.6rem;
    }
    @media (max-width: 480px) {
      span {
        display: none;
      }
      a {
        padding: 1rem;
      }
    }
  `,
})
export class WhatsappFlotante {
  protected readonly whatsapp = enlaceWhatsapp();
  protected readonly visible = signal(false);
  protected onScroll(): void {
    this.visible.set(window.scrollY > window.innerHeight * 0.7);
  }
}
