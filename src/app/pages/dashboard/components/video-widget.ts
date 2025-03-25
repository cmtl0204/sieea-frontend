import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-video-widget',
    imports: [CommonModule],
    template: `
        <div class="col-span-12 lg:col-span-6 xl:col-span-12">
            <div class="card mb-0">
                <div class="flex justify-center mb-4">
                    <iframe width="760" height="420" src="https://www.youtube.com/embed/at0xUrPBYLY?si=l9x27j38l7rsemXr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    `
})
export class VideoWidget {}
