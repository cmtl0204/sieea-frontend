import { Component, inject, OnInit } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';

@Component({
    selector: 'topbar-widget',
    templateUrl: './topbarwidget.component.html',
    standalone: true,
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, MegaMenu]
})
export class TopbarWidget implements OnInit {
    items: MegaMenuItem[] | undefined;
    protected router = inject(Router);

    constructor() {
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Conócenos',
                icon: 'pi pi-face-smile',
                items: [
                    [
                        {
                            label: 'Sobre Nosotros',
                            items: [
                                {
                                    separator:true
                                },
                                { label: 'Nuestra Misión' },
                                { label: 'Cómo Funcionamos' },
                                { label: 'Equipo y Valores' }
                            ]
                        }
                    ],
                    [
                        {
                            label: 'Transparencia y Reportes',
                            items: [
                                {
                                    separator:true
                                },
                                { label: 'Impacto del Programa' },
                                { label: 'Reportes Anuales' },
                                { label: 'Historias de Éxito' }
                            ]
                        }
                    ],
                    [
                        {
                            label: 'Tienda Sostenible ',
                            items: [
                                {
                                    separator:true
                                },
                                { label: 'Kits de plantación' },
                                { label: 'Accesorios ecológicos' },
                                { label: 'Merchandising Oficial' }
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Dona y Obtén tu Carbon Credit Card',
                icon: 'pi pi-gift',
                items: [
                    [
                        {
                            label: 'Descripción del proceso',
                            items: [
                                {
                                    separator: true
                                },
                                { label: 'Conoce el proceso' }
                            ]
                        }
                    ],
                    [
                        {
                            label: 'Calculadora interactiva',
                            items: [
                                {
                                    separator: true
                                },
                                { label: 'Calcular' }]
                        }
                    ],
                    [
                        {
                            label: 'Detalles de la Carbon Credit Card',
                            items: [
                                {
                                    separator:true
                                },
                                {
                                    label: 'Beneficios de los créditos acumulados'
                                },
                                { label: 'Ejemplo de recompensas disponibles' },
                                { label: 'Dona y obtén tu Carbon Credit Card' }
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Certificados y Monitoreo',
                icon: 'pi pi-verified',
                items: [
                    [
                        {
                            label: 'Certificados Personalizados',
                            items: [
                                {
                                    separator: true
                                },
                                { label: 'Ejemplo de un certificado ' }
                            ]
                        }
                    ],
                    [
                        {
                            label: 'Área de Monitoreo Personal',
                            items: [
                                {
                                    separator: true
                                },
                                { label: 'Consultar su historial de donaciones' },
                                { label: 'Ver mapas interactivos de los árboles plantados' },
                                { label: 'Descargar sus certificados en formato digital' }]
                        }
                    ],
                    [
                        {
                            label: 'Recompensas y Beneficios',
                            items: [
                                {
                                    separator: true
                                },
                                { label: 'Catálogo de Recompensas' },
                                { label: 'Gamificación' },
                                { label: 'Cómo Canjear Créditos' }
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'FAQ',
                icon: 'pi pi-info-circle',
                items: [
                    [
                        {
                            label: 'Contacto y Preguntas Frecuentes',
                            items: [
                                {
                                    separator: true
                                },
                                {
                                    label: 'Formulario de contacto para consultas o alianzas'
                                },
                                {
                                    label: 'Preguntas frecuentes sobre donaciones, certificados y uso de créditos de carbono'
                                },
                                {
                                    separator: true
                                },
                                { label: 'Facebook', icon: 'pi pi-facebook' },
                                { label: 'Instagram', icon: 'pi pi-instagram' }
                            ]
                        }
                    ]
                ]
            }
        ];
    }
}
