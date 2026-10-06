import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Galeria } from './sections/galeria';
import { Hero } from './sections/hero';
import { Nosotros } from './sections/nosotros';
import { Ocasiones } from './sections/ocasiones';
import { Pedidos } from './sections/pedidos';
import { Presentaciones } from './sections/presentaciones';
import { SiteFooter } from './sections/site-footer';
import { SiteHeader } from './sections/site-header';
import { WhatsappFlotante } from './sections/whatsapp-flotante';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Nosotros, Presentaciones, Ocasiones, Galeria, Pedidos, SiteFooter, WhatsappFlotante],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {}
