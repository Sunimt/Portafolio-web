import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


interface Skill {
  name: string,
};

interface Softskill                                                                                                                             {
  name: string,
};

interface Educacion {
  name: string,
};

interface Certificado {
  name: string,
};


@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {

  Skill$: Observable<Skill[]>;
  Softskill$: Observable<Softskill[]>;
  Educacion$: Observable<Educacion[]>;
  Certificado$: Observable<Certificado[]>;

  firestore: Firestore = inject(Firestore);

  constructor() {
    const SkillCollection = collection(this.firestore, 'Skills');
    this.Skill$ = collectionData(SkillCollection) as Observable<Skill[]>;

    const SoftskillCollection = collection(this.firestore, 'Softskills');
    this.Softskill$ = collectionData(SoftskillCollection) as Observable<Softskill[]>;

    const EducacionCollection = collection(this.firestore, 'Educacion');
    this.Educacion$ = collectionData(EducacionCollection) as Observable<Educacion[]>;

    const CertificadoCollection = collection(this.firestore, 'Certificados');
    this.Certificado$ = collectionData(CertificadoCollection) as Observable<Certificado[]>;

  }

  
}
