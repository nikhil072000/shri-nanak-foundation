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
    { id: 1, title: 'Mega Health Checkup Camp – A Step Towards Community Well-being', description: "On December 17, 2023, our organization successfully organized a Mega Health Checkup Camp, reinforcing our unwavering commitment to community health and well-being. This initiative aimed to provide essential healthcare services to individuals who may not have easy access to quality medical facilities. We are proud to share that the camp catered to the health needs of more than 250 individuals, ensuring they received timely medical attention" },
    { id: 2, title: 'Blanket Donation Drive – Spreading Warmth and Hope', description: 'On January 7, 2024, our organization conducted a Blanket Donation Drive, distributing 500 blankets to individuals in need. This initiative was aimed at providing warmth and comfort to those facing harsh winter conditions, ensuring they could endure the cold with a little more ease. The drive was more than just a distribution of blankets' },
    { id: 3, title: 'International Yoga Day Celebration – 21st June 2024', description: 'On 21st June 2024, we proudly celebrated International Yoga Day at Bahubali Park, Karkardooma Road, Bahubali Enclave, Anand Vihar, Delhi-92with a vibrant and engaging yoga event aimed at promoting health, wellness, and mindfulness. This special occasion provided an excellent opportunity for individuals to embrace the ancient practice of yoga and experience its transformative benefits.' },
    { id: 4, title: 'Shobha Yatra – 22nd January 2024', description: 'On 22nd January 2024, our foundation trust organized a grand Shobha Yatra, celebrating the enthusiasm and devotion of the people of Delhi regarding the installation of Lord Shri Ram in Ayodhya. The procession was a majestic and spiritually uplifting event, bringing together hundreds of devotees who expressed their reverence and excitement through active participation' },
    { id: 5, title: 'Sports Conference in Collaboration with Delhi Cestoball Association – 2nd August 2024', description: 'Our foundation is deeply committed to promoting sports and outdoor activities among children, recognizing the urgent need to counter the adverse effects of excessive screen time. In today’s digital age, where children are increasingly engrossed in smartphones, tablets, and video games, there has been a noticeable decline in physical activity, social interaction, and overall well-being. ' },
    { id: 6, title: 'Mega Health Checkup Camp – 1st July 2024', description: 'On 1st July 2024, Shri Nanak Foundation organized a Mega Health Checkup Camp at Bahubali Park, Karkardooma Road, Bahubali Enclave, Anand Vihar, Delhi-92. This initiative was aimed at providing free and accessible healthcare services to individuals from all walks of life. With a vision to promote community well-being and preventive healthcare, the event was conducted in collaboration with Indraprastha Apollo Hospital ' }
  ];
}
