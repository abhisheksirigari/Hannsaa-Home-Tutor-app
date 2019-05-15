import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditTermsConditionsComponent } from '../edit-terms-conditions/edit-terms-conditions.component';


@Component({
  selector: 'app-student-terms-conditions',
  templateUrl: './student-terms-conditions.component.html',
  styleUrls: ['./student-terms-conditions.component.scss']
})
export class StudentTermsConditionsComponent implements OnInit {
  defaultContent = `<div id="copy">
<!-- BEGIN CMBLOCK: first --><p><span style="color: #4086b9; font-size: 1.7em;">Terms and conditions</span></p>
<p><!--[if gte mso 9]><xml> <w:WordDocument> <w:View>Normal</w:View> <w:Zoom>0</w:Zoom> <w:PunctuationKerning /> <w:ValidateAgainstSchemas /> <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid> <w:IgnoreMixedContent>false</w:IgnoreMixedContent> <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText> <w:Compatibility> <w:BreakWrappedTables /> <w:SnapToGridInCell /> <w:WrapTextWithPunct /> <w:UseAsianBreakRules /> <w:DontGrowAutofit /> </w:Compatibility> <w:BrowserLevel>MicrosoftInternetExplorer4</w:BrowserLevel> </w:WordDocument> </xml><![endif]--></p>
<p><!--[if gte mso 9]><xml> <w:LatentStyles DefLockedState="false" LatentStyleCount="156"> </w:LatentStyles> </xml><![endif]--><!--[if !mso]> 
<object  classid="clsid:38481807-CA0E-42D2-BF39-B33AF135CC4D" id=ieooui>
</object>
<mce:style><!  st1:*{behavior:url(#ieooui) } --> <!--[endif] --><!--[if gte mso 10]> <mce:style><!   /* Style Definitions */  table.MsoNormalTable 	{mso-style-name:"Table Normal"; 	mso-tstyle-rowband-size:0; 	mso-tstyle-colband-size:0; 	mso-style-noshow:yes; 	mso-style-parent:""; 	mso-padding-alt:0cm 5.4pt 0cm 5.4pt; 	mso-para-margin:0cm; 	mso-para-margin-bottom:.0001pt; 	mso-pagination:widow-orphan; 	font-size:10.0pt; 	font-family:"Times New Roman"; 	mso-ansi-language:#0400; 	mso-fareast-language:#0400; 	mso-bidi-language:#0400;} --> <!--[endif] --></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">When you enrol at the Lake  School, you are accepting our terms and conditions, so please read these carefully. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">These terms and conditions are binding for all students, those booking directly and those booking through an agent.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">Lake</span><span style="mso-ansi-language:EN-GB"> School</span><span style="mso-ansi-language:EN-GB"> courses are for adults. Students aged 16 or 17 must provide a completed Consent to Travel and Study Form, signed by their parent or guardian.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB"><span style="font-size: 12.48px;">You can find further information about&nbsp;</span><a href="/policies-and-procedures/" title="Policies and Procedures">Lake School Policies and Procedures</a><span style="font-size: 12.48px;">&nbsp;here.</span></span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">It is important that you understand our terms and conditions. If you have any questions, please contact us. We will be happy to explain anything you don’t understand.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">We strongly recommend that you take out personal insurance before you leave your home country.</span></p>
<h4 class="MsoNormal"><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Payment of Fees</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB;mso-bidi-font-weight: bold;mso-bidi-font-style:italic">1. You must pay a deposit of £200 and an enrolment fee of £75, when you enrol for a course.&nbsp;</span><span style="mso-ansi-language:EN-GB"></span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. The deposit and enrolment fee are part of your total course fees. You must pay the balance of fees before you start the course. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">3. If you pay by credit card, there are no extra charges.<br></span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">4. If you pay by bank transfer, you must add £25 to cover bank transfer charges. <br></span></p>
<h4 class="MsoNormal"><strong><span style="mso-ansi-language:EN-GB">Cancellations and refunds</span></strong></h4>
<p><span style="font-size: 1em;">1.	The enrolment fee and any administration fees are non-refundable, except in the case that the School is not able to offer you a place on a course.&nbsp;</span></p>
<p>2.	Other fees are not refundable if you shorten, postpone or cancel your course, except in exceptional cases at the discretion of the School directors who will give your situation their careful and fair judgement and respond within 7 days. In these exceptional cases, you may receive a full or partial refund. If a refund is due, you will receive this within 14 days of the School directors' decision. You will lose your deposit and enrolment fee if you cancel your course less than two weeks before the course start date.</p>
<p>3.	Group bookings are subject to different cancellation terms, please contact the School.</p>
<p>4.	If you book your course online, by email or by phone and then change your mind, you are entitled to a 14-day Cancellation Period. In this case, we must receive your cancellation in writing, within the Cancellation Period. If your course starts within 14 days of booking your course online, you must tell us, in writing, that you do want to take the course. In this case, if you later change your mind and want to cancel, we will charge you for the services you have already taken and deduct this from the refund payable. We will refund you within 14 days of receiving written confirmation that you want to cancel.</p>
<h4><strong><span></span></strong></h4>
<h4 class="MsoNormal"><span style="mso-ansi-language:EN-GB"></span><strong><span style="mso-ansi-language:EN-GB; mso-bidi-font-style:italic">Visas</span></strong></h4>
<p class="MsoNormal"><strong><span style="mso-ansi-language:EN-GB; mso-bidi-font-style:italic">If you need a UK visa,</span></strong><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language: EN-GB"> you must pay your full fees when you enrol. </span></strong></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. When we receive your Enrolment Form, we will send you an invoice showing your fees. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. You must pay by bank transfer and send a copy of the bank transfer document by email or fax before visa documentation is issued. </span></p>
<p><span style="mso-ansi-language:EN-GB">3. In addition to your tuition fees, you must pay</span></p>
<ul>
<li><span style="mso-ansi-language:EN-GB"></span> the enrolment fee of £75</li>
<li>a visa documentation fee of £25</li>
<li>bank charges of £25</li>
<li>an express mail of £95, if you want your visa documentation sent by DHL</li>
</ul>
<p class="MsoNormal" style="margin-left:18.0pt"><span style="mso-ansi-language:EN-GB"><span style="mso-tab-count:1"></span><span style="mso-spacerun:yes"></span>If your visa is refused, these administration fees are non-refundable<span style="mso-bidi-font-weight:bold">.</span> </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB"></span><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Your tuition fees will be refunded in full, subject to the following conditions</span></strong></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. As soon as you receive your visa, you must tell the Lake School. If you do not arrive at the School on your agreed course start date, the School may report you to UK Visas and Immigration and you will lose the course and accommodation fees for any weeks that you do not attend. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. If your visa is delayed, you must tell the  School at least four weeks before the start of your course. If you do not, you will lose the course and accommodation fees for any weeks that you do not attend.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">3. If your visa is refused, you must tell the School at least four weeks before the start of your course and send a copy of the original letter of refusal given to you by the Entry Clearance Officer. In this case, we will refund your full course fees less any administration fees.<br></span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">4. If your visa is refused and you tell the School less than four weeks before the start of your course, we will refund your fees less any administration fees and less the deposit of £200. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">5. If your visa is refused and you tell the School on or after the start date of your course, you will lose the course and accommodation fees for any weeks that you do not attend in addition to the administration fees and deposit. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">6. In any case, you must apply for a refund of course fees within four weeks of your visa refusal date.</span></p>
<h4 class="MsoNormal"><span style="mso-ansi-language:EN-GB"></span><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Classes</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. If we are unable to offer you a place on a course, we will refund any fees you have paid.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. After you have taken the placement test, we may suggest that you take a different course to the one that you have booked. All courses are subject to availability. <span style="mso-bidi-font-weight:bold">We reserve the right to organise the classes in the most appropriate way to guarantee the best academic conditions for both the students and the School. </span></span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB;mso-bidi-font-weight: bold">3.It may be possible for you to change your course, but you must discuss this with the Director of Studies who will advise you on possible options.<br></span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB;mso-bidi-font-weight: bold">4.The Lake School is a serious school and we expect every student to be on time for their lessons.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB;mso-bidi-font-weight: bold">5. If you miss a lesson, for whatever reason, you cannot take the lesson at any other time and we will not give you a refund.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB;mso-bidi-font-weight: bold">6. The School keeps attendance records. Any visa national student who regularly misses classes will be sent a non-attendance warning letter and may be reported to UK Visas and Immigration. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB;mso-bidi-font-weight: bold">7. Students will only receive an end-of-course certificate if their attendance has been 85% or more.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">8. You must behave in a suitable way both inside and outside the classroom. The School may terminate your course in the case of serious misconduct or repeated absence without good reason. In this case, no fees will be refunded.</span><span style="font-family: "> Parents      or guardians of students aged 16 or 17 are responsible for the safe return      of the student to their home.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB"> </span></p>
<h4 class="MsoNormal"><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Accommodation</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. Your accommodation is booked from the Sunday before your course starts to the Saturday after your course finishes.&nbsp;</span><span style="font-size: 12.48px;">This means that you check in on Sunday and check out on Saturday.</span><span style="font-size: 1em;">&nbsp;If you arrive in Oxford or leave Oxford on different days, you must arrange alternative accommodation for your extra nights.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. Hosts cannot accept students between 23.00 and 07.00. If you are arriving in Oxford late, please make alternative arrangements for your first night.</span></p>
<p class="MsoNormal"><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB"></span></strong><span style="mso-ansi-language:EN-GB">3. If you choose to pay your accommodation yourself, you should pay this every two weeks in advance. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">4. If you want to leave your accommodation before the date booked, you must tell your host and the Lake  School, at least one week in advance. If you do not, you must pay one week's accommodation fees.</span></p>
<p class="MsoNormal"><span style="font-size: 1em;">5. Occasionally, because of situations beyond our control, we may need to change your accommodation either before you arrive or when you are here. We promise to provide accommodation for the period you have booked but this may not be with the same host for the whole period.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">6.&nbsp;</span><span style="font-size: 12.48px;">If you decide take a holiday during your course, you may be charged a room retainer fee or asked to change to different accommodation on your return. Please ask the School for details before booking your holiday.</span></p>
<p class="MsoNormal"><span style="font-size: 12.48px;"></span><span style="font-size: 1em;">7. It is important that you enjoy your homestay experience and that you feel "at home" with your host. Students very rarely ask us if they can change/leave their accommodation. Please talk to the Accommodation and Welfare Manager if you would like to change/leave your homestay. T</span><span style="font-size: 1em;">his may be possible, however we must give your current host at least one week's notice (except in the case of an emergency). We will help you choose a suitable alternative. Please note that if you change your accommodation, you will need to pay an extra charge for the Saturday night (except in the case of an emergency).</span></p>
<p class="MsoNormal"><span style="font-size: 1em;">8. If you ask us to book homestay accommodation for you and you decide to cancel your request before you arrive, you must tell us at least one week before the start of your course. If you do not, you must pay a cancellation fee of one week's homestay accommodation.</span></p>
<h4 class="MsoNormal"><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Holiday</span></strong><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language: EN-GB"></span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. If you want to take a holiday during your course, you must tell the School at least four weeks before the start of your holiday. We do not refund fees but add the weeks that you take as holiday to the end of your course. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. The Lake School is closed on public holidays. There are no refunds for classes which would have taken place on those days.</span></p>
<h4 class="MsoNormal"><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Insurance</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. You must pay for any damage you cause, either to the school premises or to your accommodation. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. You take a Lake School course at your own risk. The Lake School of English Oxford cannot be held liable for damage or accident to you or to your belongings. </span></p>
<h4 class="MsoNormal"><span style="mso-ansi-language:EN-GB"></span><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Photographs and filming</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. We occasionally take photographs of students, or film them in School to use in our publicity material. If you would prefer us not to do this, please inform one of the directors of the school when you arrive. For students aged 16 and 17, we must have this in writing from a parent or guardian.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. Classes cannot be filmed or recorded, without the written permission of the directors of the school.</span></p>
<h4 class="MsoNormal"><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Personal information and data protection</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">1. We will only use your personal information to provide our service to you. <span style="mso-spacerun:yes">&nbsp;</span>We promise to hold this information securely in accordance with our <a href="/privacy.html" target="_blank" title="Data Privacy Statement">Data Privacy Statement</a>.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">2. Some of the personal information you give us may be passed on to our teachers, accommodation providers, social organiser or airport transfer service. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">3. If you are required to have a visa to enter the UK, we will take a copy of your passport and take when you arrive at the School.</span></p>
<p class="MsoNormal"><span style="font-size: 1em; line-height: 1.5;">4.	If you are required to register with the police, we will take a copy of your police registration certificate.</span></p>
<p>5.	If you are required to have a Biometric Residence Permit, we will take a copy of this.</p>
<p><span>6. If you have your own accommodation in Oxford, you must provide these details before the start of your course (including a mobile phone number) and keep them up to date if they change.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">7. All students must provide details of their next-of-kin (or emergency contact) in their country. </span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">8. Students and/or parents should give relevant medical information to the school when making their enrolment and ask before enrolling whether the school and accommodation facilities are suitable for the student’s needs.&nbsp;If this information is not provided, the School may cancel a student's course and/or accommodation, without refund.</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">9. In addition to any personal data you give us, we may collect information and statistics in order to develop our services.These statistics will not include information that can be used to identify you. We will not sell your data.&nbsp;</span></p>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB;mso-bidi-font-weight: bold">10. By accepting these terms and conditions you accept our right to use your personal information in this way. </span></p>
<h4 class="MsoNormal"><span style="mso-ansi-language:EN-GB"></span><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Changes to details</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">The school reserves the right to cancel or change the dates, times, fees or any other details relating to courses at our discretion. </span></p>
<h4 class="MsoNormal"><span style="mso-ansi-language:EN-GB"></span><strong><span style="mso-ansi-language:EN-GB">Force Majeure </span></strong><span style="mso-ansi-language:EN-GB"></span></h4>
<p class="MsoNormal"><span style="font-size: 1em;">1. The Lake School of English promises to provide the services described on this website/in their brochure. If the School is unable to do so because of unpredicted situations/events beyond reasonable control (such as fire, flood, earthquake, infectious diseases, natural disasters, war, invasion, act of foreign enemies, hostilities, civil war, rebellion, terrorist activities, government sanction, labour dispute or the failure of electricity, internet or telephone service), refunds will not be made.</span></p>
<p>2. In this case, the School must prove that it took reasonable steps to minimise delay or damages caused (if any of the situation/event was predicted), that the School provided the services where possible, and that the student or student's representative was notified of the possibility of the situation/event.</p>
<p>3. If there is an outbreak of infectious disease, all students and or parents/guardians must follow the rules regarding quarantine, defined by government agencies or by the School.</p>
<p><span></span></p>
<h4 class="MsoNormal"><span style="mso-ansi-language:EN-GB"><span style="mso-spacerun:yes"></span></span><strong style="mso-bidi-font-weight:normal"><span style="mso-ansi-language:EN-GB">Complaints</span></strong></h4>
<p class="MsoNormal"><span style="mso-ansi-language:EN-GB">If you think you have a complaint, please talk to one of the School directors who will listen and act to try and resolve the problem. You are protected by the Lake School's obligations as a British Council accredited member of English UK. If you are not satisfied with the response, you can contact ENGLISHUK, <a href="mailto:info@englishuk.com"><span style="color:windowtext">info@englishuk.com</span></a> or +44 (0)20 7608 7960 who will talk to you, investigate further and offer additional advice and guidance. </span></p>
<p class="MsoNormal"><span style="font-size: 1em; line-height: 1.5;">You can receive further help and support from Quality English, </span><a href="mailto:info@quality-english.com"><span style="color:windowtext">info@quality-english.com</span></a><span style="font-size: 1em; line-height: 1.5;">&nbsp;T: +44 (0)1491 828960.</span></p>
<p class="MsoNormal">&nbsp;</p><!-- END CMBLOCK: first -->

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
    const modalRef: BsModalRef = this.modalService.showModal(EditTermsConditionsComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        document.getElementById('text-output').innerHTML = result;
      }
    });
  }

}
