import { Component, inject, OnInit } from '@angular/core';
import { Step, StepItem, StepPanel, Stepper } from 'primeng/stepper';
import { NgForOf, NgIf } from '@angular/common';
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
import { Card } from 'primeng/card';

@Component({
    selector: 'app-training',
    imports: [FormsModule, Button, Card],
    templateUrl: './training.component.html',
    styleUrl: './training.component.scss',
    standalone: true
})
export class TrainingComponent implements OnInit {
    private readonly _authService = inject(AuthService);
    private readonly _customMessageService = inject(CustomMessageService);
    uploadedFiles: any[] = [];
    protected step: number = 0;
    protected downloadURL: string = '';
    private readonly storage = inject(Storage);
    private readonly firestore = inject(Firestore);
    archivos: any[] = [];

    constructor() {
        // this.getDownloadURLFromPath();
    }

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        // this.uploadFile(event.files[0]);

        this.subirYGuardarArchivo$(event.files[0]).subscribe();

        this._customMessageService.showSuccess({ summary: 'Archivo Subido', detail: '' });
    }

    async uploadFile(file: File): Promise<string> {
        const extension = file.name.split('.').pop();
        const timestamp = new Date().getTime();
        const filePath = `tasks/${timestamp}.${extension}`;

        const storageRef = ref(this.storage, filePath);
        const result = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(result.ref);
        console.log(url);
        return url;
    }

    getDownloadURLFromPath() {
        const fileRef = ref(this.storage, 'tasks/1744392880395.pdf');
        getDownloadURL(fileRef).then((url) => {
            this.downloadURL = url;
        });
    }

    async listarArchivosEnTasks(): Promise<{ name: string; url: string }[]> {
        const folderRef = ref(this.storage, 'tasks/');
        const archivos = await listAll(folderRef);

        const resultados: { name: string; url: string }[] = [];

        for (const itemRef of archivos.items) {
            const url = await getDownloadURL(itemRef);
            resultados.push({
                name: itemRef.name,
                url
            });
        }

        console.log(resultados);
        return resultados;
    }

    async eliminarArchivo(): Promise<void> {
        const archivoRef = ref(this.storage, 'tasks/1744392880395.pdf');

        try {
            await deleteObject(archivoRef);
            console.log('✅ Archivo eliminado:', 'tasks/1744392880395.pdf');
        } catch (error) {
            console.error('❌ Error al eliminar el archivo:', error);
        }
    }

    subirYGuardarArchivo$(file: File) {
        const extension = file.name.split('.').pop();
        const timestamp = new Date().getTime();
        const filePath = `tasks/${this._authService.auth.id}/${timestamp}`;
        const fileRef = ref(this.storage, filePath);

        return from(uploadBytes(fileRef, file)).pipe(
            switchMap((result) => from(getDownloadURL(result.ref))),
            switchMap((url) => {
                const datos = {
                    nombre: file.name,
                    url,
                    extension,
                    size: file.size,
                    tipo: file.type,
                    rutaStorage: filePath,
                    subidoEn: new Date()
                };
                const col = collection(this.firestore, 'archivos_subidos');
                return from(addDoc(col, datos));
            }),
            catchError((err) => {
                console.error('❌ Error en el proceso:', err);
                return of(null); // o throwError(() => err) si quieres propagarlo
            })
        );
    }

    getArchivos$(): Observable<any[]> {
        const colRef = collection(this.firestore, 'archivos_subidos');
        return collectionData(colRef); // 'id' opcional para incluir el ID del doc
    }

    ngOnInit(): void {
        this.getArchivos$().subscribe((data) => {
            this.archivos = data;
        });
    }

    download(url: string) {
        window.open(url, '_blank');
    }

    protected readonly PrimeIcons = PrimeIcons;

    linkToMoodle() {
        window.open('https://capacitacion.turismo.gob.ec:8443/moodle/', '_blank');
    }
}
