import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditFaqComponent } from '../edit-faq/edit-faq.component';
import { AddFaqComponent } from '../add-faq/add-faq.component';

@Component({
  selector: 'app-general-faq',
  templateUrl: './general-faq.component.html',
  styleUrls: ['./general-faq.component.scss']
})
export class GeneralFaqComponent implements OnInit {

  isCollapse = [];

  searchInput: any;
  searchCategory: any;
  isConfigToggle: boolean = false;

  faqsList: Array<any>;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.getFaqs();
  }

  addFAQ() {
    const addFAQ = {
      "category": 'general',
      "question": '',
      "answer": ''
    };
    const initialState = {
      title: 'Add FAQ',
      closeBtnName: 'Save',
      modelData: {
        faq: addFAQ
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(AddFaqComponent, { initialState, class: 'modal-md' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.faqsList.push(result);
      }
    });
  }

  editFAQ(faq: any, idx: any) {
    const initialState = {
      title: 'Edit FAQ',
      closeBtnName: 'Save',
      modelData: {
        faq: faq
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditFaqComponent, { initialState, class: 'modal-md' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.faqsList[idx].question = result.question;
        this.faqsList[idx].answer = result.answer;
      }
    });
  }

  removeFAQ(faq: any, idx: any) {
    this.faqsList = this.faqsList.filter(function (value, index, arr) {
      return value != faq;
    });
  }

  getFaqs() {
    this.faqsList = [
      {
        "category": "general",
        "question": "What are the benefits of Solodev CMS?",
        "answer": "With Solodev CMS, you and your visitors will benefit from a finely-tuned technology stack that drives the highest levels of site performance, speed and engagement - and contributes more to your bottom line. Our users fell in love with"
      },
      {
        "category": "general",
        "question": "How many children can the center accommodate?",
        "answer": "We have eight classrooms where children are grouped by age. In our lower school (infants/toddlers), there are 10-12 students and 3-4 teachers per classroom. In our upper school, there are up to 14-16 students per classroom, with two teachers."
      },
      {
        "category": "general",
        "question": "What are shyam hours of operation?",
        "answer": "We are open Monday through Friday from 7:45 a.m. to 6 p.m."
      },
      {
        "category": "general",
        "question": "Do you have partial-day hours available?",
        "answer": "Yes. Children may be picked up at 12:15 p.m., 4 p.m., or 6 p.m."
      },
      {
        "category": "student",
        "question": "What age children does Beginnings serve? ",
        "answer": "Children may enroll starting at age 3 months. Because babies are born ready to learn, we accept infants, toddlers, preschoolers, and kindergartners through the age of 6. Neuroscience tells us that learning begins at birth, and research confirms that 90 percent of the brain is already developed within the first three years of life. At Beginnings, we make the most of this critical period of “neuroplasticity” to provide our students with a strong foundation that will serve them throughout their lives."
      },
      {
        "category": "general",
        "question": "What is Beginnings’ educational philosophy?",
        "answer": "We believe, and neuroscience has proven, that children are better able to explore new areas of learning and engage more fully with the world around them when they have positive feelings of self-worth and are able to express, understand, and cope with their own emotions and those of others. The heart of Beginnings’ teaching philosophy is to foster the skills of emotional intelligence, which are critical for promoting academic, social, and personal success. We focus on instilling a love of learning in each child, allowing the seeds of curiosity and wonder to take root, blossom, and continue to grow for a lifetime."
      },
      {
        "category": "general",
        "question": "Does Beginnings provide meals? ",
        "answer": "We provide healthy snacks; children bring their lunches from home."
      }
    ]
  }

}

