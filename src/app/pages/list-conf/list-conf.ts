import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-list-conf',
  imports: [FormsModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf implements OnInit {
  // Liste des conférences
  list: Conference[] = [];

  // Recherche par titre uniquement
  searchTitle: string = '';
  searchUser: string = '';

  ngOnInit() {
    this.list = [
      {
        title: 'Artificial Intelligence',
        description: 'Discover the latest innovations in AI and machine learning.',
        date: '25-11-2026',
        nbrMax: 50,
        nbrReservation: 20,
        picture: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
      },
      {
        title: 'Web Development',
        description: 'Learn modern web development technologies and frameworks.',
        date: '28-11-2026',
        nbrMax: 40,
        nbrReservation: 15,
        picture: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
      },
      {
        title: 'Data Science',
        description: 'Explore data analysis, visualization and predictive models.',
        date: '02-12-2026',
        nbrMax: 35,
        nbrReservation: 10,
        picture: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      },
      {
        title: 'Cyber Security',
        description: 'Understand cybersecurity and modern protection techniques.',
        date: '05-12-2026',
        nbrMax: 30,
        nbrReservation: 30,
        picture: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
      },
      {
        title: 'Cloud Computing',
        description: 'Discover cloud platforms, infrastructure and services.',
        date: '10-12-2026',
        nbrMax: 45,
        nbrReservation: 12,
        picture: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
      },
    ];
  }

  // Recherche uniquement par titre
  get filteredList(): Conference[] {
    return this.list.filter((conf) =>
      conf.title.toLowerCase().includes(this.searchTitle.trim().toLowerCase()),
    );
  }

  // Calcul des places disponibles
  placesDisponibles(conf: Conference): number {
    return conf.nbrMax - conf.nbrReservation;
  }

  // Vérifier si la conférence est complète
  isComplet(conf: Conference): boolean {
    return this.placesDisponibles(conf) <= 0;
  }

  // Participer à une conférence
  participate(conf: Conference) {
    if (!this.isComplet(conf)) {
      conf.nbrReservation++;
    }
  }

  // Liste des utilisateurs
  users: User[] = [
    { id: 1, name: 'Ahmed', email: 'ahmed@gmail.com', role: 'Admin' },
    { id: 2, name: 'Sarra', email: 'sarra@gmail.com', role: 'User' },
    { id: 3, name: 'Mohamed', email: 'mohamed@gmail.com', role: 'User' },
  ];

  get filteredUsers(): User[] {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchUser.trim().toLowerCase()),
    );
  }
}
