import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { Button } from 'primeng/button';

@Component({
    selector: 'stories-widget',
    templateUrl: './storieswidget.component.html',
    standalone: true,
    imports: [CommonModule, Carousel, Tag]
})
export class Storieswidget implements OnInit {
    products: any[] = [];

    responsiveOptions: any[] | undefined;

    ngOnInit() {
        this.products = [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Juan',
                description: '"Nuestra empresa decidió participar en un proyecto de reforestación como parte de nuestra responsabilidad ambiental. No solo ayudamos a mejorar el medio ambiente, sino que también fortalecimos el sentido de comunidad y compromiso entre nuestros empleados."',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Maria',
                description: '"Nunca imaginé que plantar un árbol podría ser tan significativo. Después de participar en un programa de reforestación, entendí la importancia de cada árbol para el ecosistema. Ahora, cada vez que paso por esa zona, veo cómo crecen los árboles que ayudé a sembrar."',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Luis',
                description: '"Como científica, puedo afirmar que los programas de reforestación no solo benefician la biodiversidad, sino que también ayudan a capturar carbono y mejorar la calidad del aire. La naturaleza es resiliente, y con nuestro esfuerzo, podemos restaurar lo que hemos perdido."',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: '"Hace algunos años, mi comunidad sufría de sequías constantes debido a la deforestación. Con la reforestación de nuestro territorio, hemos notado un cambio positivo en el clima y la fertilidad del suelo. Ahora nuestras cosechas son más abundantes y sostenibles."',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: '"Participar en jornadas de reforestación ha sido una de las experiencias más gratificantes de mi vida. Ver cómo áreas degradadas vuelven a la vida con nuevos árboles me hace sentir que realmente estamos dejando un mejor planeta para las futuras generaciones."',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            }
        ];
        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 5,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}
