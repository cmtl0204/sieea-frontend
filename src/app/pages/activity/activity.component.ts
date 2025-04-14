import { Component, inject, OnInit, signal } from '@angular/core';
import { Step, StepItem, StepPanel, Stepper } from 'primeng/stepper';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { ref } from 'firebase/storage';
import { Storage, listAll, deleteObject, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Button } from 'primeng/button';
import { from, Observable, of, switchMap, timestamp } from 'rxjs';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { catchError } from 'rxjs/operators';
import { Divider } from 'primeng/divider';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '@modules/auth/auth.service';
import { Fluid } from 'primeng/fluid';
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { DataView } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { Skeleton } from 'primeng/skeleton';
import { Tag } from 'primeng/tag';
import { environment } from '@env/environment';
import { Tooltip } from 'primeng/tooltip';

interface ProductInterface {
    id: string;
    code: string;
    name: string;
    description: string;
    category: string;
    completed: boolean;
}

@Component({
    selector: 'app-activity',
    imports: [FormsModule, Button, DataView, NgClass, Tag],
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.scss',
    standalone: true
})
export class ActivityComponent implements OnInit {
    layout: 'grid' | 'list' = 'grid';

    products: ProductInterface[] = [];

    options: string[] = ['list', 'grid'];

    constructor() {}

    ngOnInit() {
        this.products = [
            {
                id: '1',
                code: 'f230fh0g3',
                name: 'Campañas de promoción turística nacional e internacional',
                description: 'Organizar campañas de marketing para promocionar destinos turísticos, tanto a nivel local como internacional, a través de plataformas digitales, medios de comunicación y agencias de viajes.',
                category: 'Accessories',
                completed: true
            },
            {
                id: '2',
                code: 'f230fh0g3',
                name: 'Festivales y eventos culturales',
                description:
                    'Apoyar la organización de festivales de música, danza, cine, gastronomía, y tradiciones locales. Estos eventos no solo atraen turistas, sino que también ayudan a preservar y divulgar las costumbres y tradiciones locales.',
                category: 'Accessories',
                completed: true
            },
            {
                id: '3',
                code: 'f230fh0g3',
                name: 'Rutas turísticas temáticas',
                description: 'Desarrollar rutas turísticas basadas en diferentes temas como el ecoturismo, turismo histórico, gastronómico, de aventura, o de bienestar, ofreciendo experiencias únicas y diferenciadas.',
                category: 'Accessories',
                completed: true
            },
            {
                id: '4',
                code: 'f230fh0g3',
                name: 'Capacitación y desarrollo de personal turístico',
                description: 'Ofrecer programas de formación y capacitación para guías turísticos, operadores turísticos y personal de servicios para mejorar la calidad de atención y las competencias en el sector.',
                category: 'Accessories',
                completed: true
            },
            {
                id: '5',
                code: 'f230fh0g3',
                name: 'Promoción del ecoturismo y turismo sostenible',
                description: 'Implementar actividades que promuevan el ecoturismo y el turismo responsable, como visitas a parques naturales, reservas ecológicas, y actividades de conservación del medio ambiente.',
                category: 'Accessories',
                completed: false
            },
            {
                id: '6',
                code: 'f230fh0g3',
                name: 'Creación de infraestructura turística',
                description: 'Trabajar en la mejora de la infraestructura turística, como señalización, accesibilidad, construcción de centros de información turística, y la mejora de los servicios públicos en destinos turísticos clave.',
                category: 'Accessories',
                completed: false
            }
        ];
    }

    getSeverity(product: ProductInterface) {
        switch (product.completed) {
            case true:
                return 'success';

            case false:
                return 'warn';

            default:
                return undefined;
        }
    }

    downloadActivities() {
        window.open(`${environment.URL}/files/activities.pdf`, '_blank');
    }

    protected readonly PrimeIcons = PrimeIcons;
}
