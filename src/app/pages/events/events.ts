import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  events = [
    {
      title: 'Sunday Worship Celebration',
      date: 'April 7, 2026',
      description: 'A powerful Sunday service filled with worship, prayer, and the Word.',
      location: 'CLC Tagum Main Hall',
      time: '9:00 AM',
      image: 'assets/events/sunday.jpg'
    },
    {
      title: 'Youth Encounter Night',
      date: 'April 12, 2026',
      description: 'A gathering for youth filled with worship, games, and life talks.',
      location: 'CLC Youth Hall',
      time: '6:00 PM',
      image: 'assets/events/youth.jpg'
    },
    {
      title: 'Prayer & Fasting Week',
      date: 'April 15, 2026',
      description: 'A week dedicated to prayer, fasting, and spiritual renewal.',
      location: 'Prayer Room',
      time: '7:00 AM',
      image: 'assets/events/prayer.jpg'
    }
  ];
}