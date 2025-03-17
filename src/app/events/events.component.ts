import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  items = [
    { id: 1, title: 'Sports Conference in Collaboration with Delhi Cestoball Association – 2nd August 2024', description: 'Our foundation is deeply committed to promoting <strong>sports and outdoor activities</strong> among children, recognizing the urgent need to counter the adverse effects of excessive screen time. In today’s digital age, where children are increasingly engrossed in smartphones, tablets, and video games, there has been a noticeable decline in <strong>physical activity, social interaction, and overall well-being.</strong> ' },
    { id: 2, title: 'Mega Health Checkup Camp – 1st July 2024', description: 'On <strong>1st July 2024, Shri Nanak Foundation</strong> organized a <strong>Mega Health Checkup Camp</strong> at <strong>Bahubali Park, Karkardooma Road, Bahubali Enclave, Anand Vihar, Delhi-92.</strong> This initiative was aimed at providing <strong>free and accessible healthcare services</strong> to individuals from all walks of life. With a vision to <strong>promote community well-being and preventive healthcare,</strong> the event was conducted in collaboration with <strong>Indraprastha Apollo Hospital</strong> ' },
    { id: 3, title: 'International Yoga Day Celebration – 21st June 2024', description: 'On <strong>21st June 2024,</strong> we proudly celebrated <strong>International Yoga Day</strong> at <strong>Bahubali Park, Karkardooma Road, Bahubali Enclave, Anand Vihar, Delhi-92</strong> with a vibrant and engaging yoga event aimed at promoting <strong>health, wellness, and mindfulness.</strong> This special occasion provided an excellent opportunity for individuals to embrace the ancient practice of yoga and experience its transformative benefits. ' },
    { id: 4, title: 'Shobha Yatra – 21st January 2024', description: 'On <strong>21st January 2024,</strong> our foundation trust organized a <strong>grand Shobha Yatra,</strong> celebrating the <strong>enthusiasm and devotion</strong> of the people of Delhi regarding the <strong>installation of Lord Shri Ram in Ayodhya.</strong> The procession was a <strong>majestic and spiritually uplifting event,</strong> bringing together hundreds of devotees who expressed their reverence and excitement through active participation ' },
    { id: 5, title: 'Blanket Donation Drive – Spreading Warmth and Hope', description: 'On <strong>January 7, 2024,</strong> our organization conducted a <strong>Blanket Donation Drive,</strong> distributing <strong>500 blankets</strong> to individuals in need. This initiative was aimed at providing warmth and comfort to those facing harsh winter conditions, ensuring they could endure the cold with a little more ease. The drive was more than just a distribution of blankets ' },
    { id: 6, title: 'Mega Health Checkup Camp – A Step Towards Community Well-being', description: "On <strong>December 17, 2023,</strong> our organization successfully organized a <strong>Mega Health Checkup Camp,</strong> reinforcing our unwavering commitment to community health and well-being. This initiative aimed to provide essential healthcare services to individuals who may not have easy access to quality medical facilities. We are proud to share that the camp catered to the health needs of more than <strong>250 individuals,</strong> ensuring they received timely medical attention " },
  ];
}
