import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditAboutusComponent } from '../edit-aboutus/edit-aboutus.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  defaultContent = `<div class="cms_content">
  <h1>Our Company</h1>
<h3>Who we are and what we do</h3>
<p>Tutor.com offers one-to-one learning solutions for students and professionals. All of our services are live, on demand and online. Homework help, tutoring, peer coaching, professional development, training, career help –we do it all. But it comes down to our core philosophy that when someone needs help the best way to get it is right away from an experienced expert. Our experts are online 24/7 ready to help. The results: over 14 million one-to-one sessions completed. 90% of the students, teachers, and professionals who use Tutor.com’s services would recommend us to a friend.</p>
<h3>Our story</h3>
<p>In 1998, a small group of passionate education and tech professionals had a terrific URL and a big idea—use the Internet to connect students to tutors for tutoring at anytime from anywhere. So, they recruited about a hundred tutors and created one of the first online, interactive classrooms. Today, we have thousands of experts teaching and coaching in more than 40 different subjects.</p>
<h3>Live, on-demand, and one-to-one</h3>
<p>When you use a Tutor.com learning product, we guarantee you’ll get: the highest quality help; a personalized experience that doesn’t end until your problem is solved; 24/7 access to a real person who can help you. Is there anything better? We haven’t found it yet.</p>
<h3>Thousands of experts</h3>
<p>Our experts include academic tutors, career tutors, librarians and peer coaches. And, to work with our clients, our experts had to undergo an extensive screening, certification and background-check process. We also use a one-of-a-kind mentoring program. Every expert has a mentor to review their work and provide support when needed.</p>
<h3>We serve families, teachers, libraries, schools, colleges, governors and even the military</h3>
<p>Every client has different needs. That’s why we offer customized programs from our one-to-one, live learning products to comprehensive implementation, training, marketing and reporting services. Our goal is to make every student, job seeker, professional and teacher a fan and deliver a successful program to every client.</p>
<h3>Awards and Recognition</h3>
<p>Every year Tutor.com’s programs are mentioned in more than 100 regional newspapers. We’ve been on CNN, The Today Show and Good Morning America. You may read about us in The New York Times or Parenting Magazine or many of the trade publications written for educators. Prior <a href="http://www.tutor.com/press/awards" title="Awards">awards</a>&nbsp;include the SIIA CODiE Award for Best Postsecondary Personalized Learning Solution (2014), Parents' Choice Gold Award (2008 and 2009), Microsoft Gold Certified Partner.</p>
</div>`;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    document.getElementById('text-output').innerHTML = this.defaultContent;
  }

  editAboutus() {
    const initialState = {
      title: 'Edit Aboutus',
      closeBtnName: 'Update',
      modelData: {
        defaultContent: this.defaultContent
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditAboutusComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        document.getElementById('text-output').innerHTML = result;
      }
    });
  }

}