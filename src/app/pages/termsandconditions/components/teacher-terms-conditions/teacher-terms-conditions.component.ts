import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditTermsConditionsComponent } from '../edit-terms-conditions/edit-terms-conditions.component';

@Component({
  selector: 'app-teacher-terms-conditions',
  templateUrl: './teacher-terms-conditions.component.html',
  styleUrls: ['./teacher-terms-conditions.component.scss']
})
export class TeacherTermsConditionsComponent implements OnInit {
  defaultContent = `<section class="entry-content cf" itemprop="articleBody">
  <h4>TERMS OF BUSINESS FOR TEACHERS</h4>
<p>1. Teachers applying for vacancies on Teacherhorizons must follow the application instructions outlined in that specific job vacancy. Failure to do this may result in termination of membership.</p>
<p>2.&nbsp; Teachers who are in communication with schools for vacancies they found on Teacherhorizons, should carbon copy (cc) Teacherhorizons into all communication with schools. They can either copy in the Recruitment Adviser they have been working with or&nbsp;<a href="mailto:info@teacherhorizons.com">candidate@teacherhorizons.com</a></p>
<p>3. Teachers registered on Teacherhorizons agree that they will notify Teacherhorizons of any contract that they sign with a school, regardless of whether they have secured the position through Teacherhorizons or not.</p>
<p>4. As soon as a teacher has signed a contract with any school, they are responsible for updating their profile on Teacherhorizons to ‘red’ so they no longer appear in school’s candidate searches.</p>
<p>5. Teachers whose profiles are set to ‘green’ recognise that their profiles are visible to school recruiters. These may include recruiters from the school a teacher is currently employed by. School recruiters may access any ‘green’ teacher’s profile information (including their CVs, supporting documents and references). It is a teacher’s responsibility to switch their profile to ‘yellow’ or ‘red’ if they do not wish for their profile to be visible. Teacherhorizons will not be held responsible for issues arising around candidate profile settings and will switch a candidate’s profile to ‘red’ if a candidate is inactive on Teacherhorizons website for more than two months.</p>
<p>6. Should a teacher receive an offer of employment (verbal, written or emailed) through using any of Teacherhorizons services and accept, then their commitment is binding and subject to the employment agreement between the teacher and the relevant school. Below we set out some (but not all) of the terms which are indicative of an agreement to be reached between a teacher and a school.</p>
<p>(i) <strong><span style="color: #000080;">&nbsp;Should a teacher accept a position and then renege on the contract (or agreement), the teacher will&nbsp;be responsible for covering part of the cost of finding a replacement candidate. This fee is £500 for a teacher&nbsp;or £1,000 for a Senior&nbsp;Leader.</span></strong></p>
<p>(ii) <span style="color: #000080;"><span style="color: #000000;">Should a teacher&nbsp;leave a school before completing their contract, the teacher may also be liable for the costs of finding a replacement teacher. This depends on the contract the teacher has with the school.&nbsp;</span></span></p>
<p>(iii)&nbsp;Should a teacher fail to follow the application instructions and apply directly to a school for a ‘supported’ position,&nbsp;the teacher may be expected to pay a penalty fee.</p>
<p>(iv)&nbsp;Should a teacher do any of the above (Clause 6), Teacherhorizons reserves the right to no longer work with that teacher, to delete his/her profile and to remove his/her access to the Teacherhorizons platform.</p>
<p>7. Teachers using Teacherhorizons must never have&nbsp;been known to any Children’s Services department or Police as being a risk or potential risk to children. Equally, they should never have been the subject of any disciplinary investigation and/or&nbsp;sanction by any organisation in relation to concerns about their behaviour towards children.</p>
<h4>WEBSITE USERS TERMS AND CONDITIONS – ALL</h4>
<p>Teacherhorizons is an online collaborative website, that is, a voluntary association of schools and individual teachers working to develop a common database of information on international schools and teachers interested in working in international schools.</p>
<p>The structure of the Teacherhorizons website allows anyone with an internet connection who registers as a “Registered User” to alter the content of their school or teacher profile page. Please be advised that whilst we have endeavoured to provide accurate and up-to-date information, nothing found here has necessarily been reviewed by people with the expertise required to provide you with complete, accurate or reliable information.</p>
<p>Teacherhorizons cannot guarantee the validity of the information found on the website. The content may recently have been changed, vandalized or altered by someone whose opinion does not correspond with the state of knowledge in the relevant fields.</p>
<p>We will endeavour to keep the information on the Teacherhorizons website as accurate and up-to-date as possible. If you find any information that you know is not accurate, please contact us on&nbsp;&nbsp;<a href="mailto:info@teacherhorizons.com">info@teacherhorizons.com</a>&nbsp;immediately and we will correct it.</p>
<p>As some of the content on Teacherhorizons website is user-generated, neither Teacherhorizons nor any of the contributors, administrators, or anyone else connected with Teacherhorizons in any way is responsible for such information, including the appearance of any inaccurate or libellous information or for your use of the information contained in or linked from the website.</p>
<p>The administrators reserve the right to block any user from using the site for any reason, such as if the user is suspected or found to be sharing inaccurate or unreliable information. Teacherhorizons is not responsible should someone change, edit, modify or remove any information that you may post on the Teacherhorizons website or any of its associated projects.</p>
<p><strong>Trademarks</strong></p>
<p>Any of the trademarks or similar rights that are mentioned, used or cited on the Teacherhorizons website are the property of their respective owners. Teacherhorizons cannot grant any rights to use any otherwise protected materials. Your use of any such or similar incorporeal property is at your own risk.</p>
<p><strong>Personality rights</strong></p>
<p>The Teacherhorizons website contains material which may portray an identifiable person who is alive or deceased recently. Before using these types of content, please ensure that you have the right to use it under the laws which apply in the circumstances of your intended use. You are solely responsible for ensuring that you do not infringe someone else’s personality rights.</p>
<p><strong>Jurisdiction and legality of content</strong></p>
<p>Publication of information found on the Teacherhorizons website may be in violation of the laws of the country or jurisdiction from where you are viewing this information. Laws in your country or jurisdiction may not protect or allow the same kinds of speech or distribution. Teacherhorizons does not encourage the violation of any laws; and cannot be responsible for any violations of such laws, should you link to this domain or use, reproduce, or republish the information contained herein.</p>
<p><strong>Further details on our Terms</strong></p>
<p><strong>1. Preliminary</strong></p>
<p>You agree to be subject to these Terms whenever you access the Teacherhorizons website. In addition, by checking the box next to the “I have read the Terms of Registered Users and agree with the content” text on the “Create your free teacher profile” page or the “sign in” page and clicking the ‘Create profile’ button, you (the “Registered User”) accept and agree to the additional teacher terms and conditions (found below) for teacher users or the <a href="https://www.teacherhorizons.com/advice/terms-and-conditions-for-schools/">Terms and conditions for school users</a> and competition rules (found below), as the case may be, and which, for the avoidance of doubt, form part of the Terms. Every time you sign in to access this service you confirm your agreement with the Terms.</p>
<p>You agree to guarantee and hold Teacherhorizons harmless from any loss, claim or damage, including attorney’s fees, arising out of or resulting from your use of the website. This includes any violation of the Terms or any action arising from the content that you publish on the website that infringes the intellectual property rights (which include without limitation copyright, trade secrets, trademark or patent) of any third party or content or communication that denigrates, libels or invades the privacy of any third party.</p>
<p><strong>2. Account and password details</strong></p>
<p>The Registered User is solely responsible for maintaining the confidentiality of their Registered Username and password.</p>
<p><strong>3. Content</strong></p>
<p>3.1 You alone are responsible for any content or information you enter on your profile page and any communication with other Registered Users. Teacherhorizons is not the publisher and only provides the channel for Registered Users to publish and/or distribute their personal information.</p>
<p>3.2 Teacherhorizons does not verify the accuracy or truth of any information published by Registered Users. No responsibility is assumed by Teacherhorizons for the publication of any Registered User’s information, including pictures published by Registered Users.</p>
<p>3.3 Please use your common sense when picking the content that you choose to post on or send via Teacherhorizons because you are solely responsible for, and bear all liability in relation to, such content. You may not publish offensive content, this includes content that contains offensive language, sexually explicit content (including photographs), is unlawful or libellous. Furthermore, you may not publish content that encourages behaviour that may constitute a criminal offence, result in civil liability or otherwise violate any applicable local, state, national or international law or regulation. For example, you may <span style="text-decoration: underline;">not</span> post or send any content to the Teacherhorizons website which:</p>
<ul>
<li style="margin-left: 54pt;">is obscene, pornographic or otherwise may offend human dignity;</li>
<li style="margin-left: 54pt;">is abusive, insulting or threatening, or which promotes or encourages racism, sexism, hatred or bigotry;</li>
<li style="margin-left: 54pt;">incorporates the image or likeness of any individual under 18 years of age;</li>
<li style="margin-left: 54pt;">encourages any illegal activity including, without limitation, terrorism, inciting racial hatred or the submission of which in itself constitutes committing a criminal offence;</li>
<li style="margin-left: 54pt;">is defamatory;</li>
<li style="margin-left: 54pt;">relates to commercial activities (including, without limitation, sales, competitions and advertising, links to other websites or premium line telephone numbers);</li>
<li style="margin-left: 54pt;">involves the transmission of “junk” mail or “spam”;</li>
<li style="margin-left: 54pt;">contains any spy ware, adware, viruses, corrupt files, worm programmes or other malicious code designed to interrupt, damage or limit the functionality of or disrupt any software, hardware, telecommunications, networks, servers or other equipment, Trojan horse or any other material designed to damage, interfere with, wrongly intercept or expropriate any data or personal information whether from Teacherhorizons or otherwise; or</li>
<li style="margin-left: 54pt;">itself, or the posting of which, infringes any third party’s rights (including, without limitation, intellectual property rights and privacy rights).</li>
</ul>
<p style="margin-left: 18.0pt;">3.4 Please note though that by posting or sending content on the website you represent and warrant to us that you have the right to do so, and automatically grant to us a non-exclusive, royalty free, perpetual, worldwide licence to use such content in any way (including, without limitation, editing, copying, modifying, adapting, translating, reformatting, creating derivative works from, incorporating into other works, advertising, distributing and otherwise making available to the general public such content, whether in whole or in part and in any format or medium currently known or developed in the future). We may assign and/or sub-licence the above licence to our affiliates and successors without any further approval by you. By submitting content to the website you are warranting that you are the exclusive author and owner of that content and you agree that you waive any and all moral rights relating to that content (including, without limitation, the right to be identified as the author). We have the right to disclose your identity to any third party who is claiming that any content posted or uploaded by you to our website constitutes a violation of their intellectual property rights or of their right to privacy or any other law.</p>
<p style="margin-left: 14.2pt;">3.5 Whilst Teacherhorizons reserves the right to delete or remove content deemed offensive by Teacherhorizons, Teacherhorizons does not guarantee that offensive material will be removed or deleted. Failure by Teacherhorizons to remove or delete offensive content does not waive our right to remove or delete offensive content in subsequent or similar cases.</p>
<p style="margin-left: 14.2pt;">3.6 You may not publish content that contains advertising or commercial messages. You may not send messages of a commercial nature to other Registered Users via the site.</p>
<p style="margin-left: 14.2pt;">3.7 Teacherhorizons reserves the right to refuse to accept, post, display or transmit any user content in its sole discretion.</p>
<p style="margin-left: 14.2pt;">3.8 You may not impersonate any other person or entity.</p>
<p style="margin-left: 14.2pt;">3.9 You may not solicit other Registered Users’ contact details.</p>
<p style="margin-left: 14.2pt;">3.10 By creating a profile you grant Teacherhorizons permission to publish your profile (including picture) on <a href="https://www.teacherhorizons.com/">www.teacherhorizons.com</a></p>
<p style="margin-left: 14.2pt;">3.11 Your picture and extracts from your profile may be used as a ‘featured profile’ for marketing purposes (on the homepage of <a href="https://www.teacherhorizons.com/">www.teacherhorizons.com</a>&nbsp;or in our brochures or other marketing materials)</p>
<p style="margin-left: 14.2pt;">3.12 Teacherhorizons reserves the right to be able to use screenshots or similar images of pages featured throughout the Teacherhorizons service, including the Registered User screen name and photo(s) and use these for general promotional purposes, for example, but not limited to, a corporate brochure, Registered User communications. By creating a profile you grant Teacherhorizons permission to publish your profile in such a fashion.</p>
<p><strong>4. Copyrighted material</strong></p>
<p>You may not post material belonging to a third party on the site without permission from them. This includes but is not limited to photographs, images and text. Should you believe that material belonging to a third party has been posted on the site you are requested to contact Teacherhorizons with full details of the alleged copyright infringement including the Registered User username and your contact details.</p>
<p><strong>5. Interaction with other Registered Users</strong></p>
<p>You alone are responsible for ensuring that your interaction with other Registered Users is lawful.</p>
<p>If you encounter information you know is incorrect, please inform the Teacherhorizons team – <a href="mailto:info@teacherhorizons.com">info@teacherhorizons.com</a>. All such issues are treated in confidence, and will be resolved by a senior Registered User of our team as quickly as possible. If deemed appropriate at the sole discretion of Teacherhorizons, we may warn, suspend or delete a Registered User’s profile.</p>
<p><strong>6. Registered User communications</strong></p>
<p>Teacherhorizons does not review or censor other message content, but it reserves the right to remove contact details, or any content deemed to cause offence from both school and teacher profile pages.<br>
<strong>7. Content storage </strong></p>
<p>Teacherhorizons assumes no responsibility for the deletion of or failure to store your content, including profile details and photographs. We therefore strongly recommend that you keep a copy of anything that you upload to the Teacherhorizons website.</p>
<p><strong>8. Registered Users, subscriptions and cancellations</strong></p>
<p>8.1 In order to register on the Teacherhorizons website you must be either a qualified teacher or a recruiter for an international school.</p>
<p>8.2 You may register your profile for free and will have access to most of our services. Subscription is entirely voluntary and you may remain a free Registered User as long as you wish. There are no subscription charges for teachers.</p>
<p>8.3 Teacherhorizons may introduce subscription pricing, options, renewal terms or Registered User services at any time. The Registered User may cancel their subscription at any time. School subscription fees are not transferable from one Registered User profile to another.</p>
<p>8.4 Teacherhorizons may suspend or terminate the subscription of any Registered User who violates these terms.</p>
<p>8.5 Teacherhorizons reserves the right not to accept or to suspend or remove from the site all or part of any profile or any other Registered user content for any reason.</p>
<p>8.6 Teacherhorizons reserves the right to remove any job posting or content from the Teacherhorizons website, which in the reasonable exercise of Teacherhorizons’ discretion, does not comply with the Terms, or if any content is posted that Teacherhorizons believes is not in the best interest of Teacherhorizons.</p>
<p>8.7 Registered teacher users and school users must not publish on your profile (including CV) any personal contact information, including your address, email address, telephone number, Skype, instant messaging contact details or website URL in areas other than the requested fields. In addition, you must not include your personal contact information in messages to members who have not previously contacted you. Teacherhorizons reserves the right to remove contact details from messages you send on the Teacherhorizons website.</p>
<p><strong>9. Modifications to Terms</strong></p>
<p>Teacherhorizons may modify these Terms from time to time in its sole discretion and/or to take account of new legislation, statutory instruments, Government Regulations, Licences, similar matters and for any other reason. Any such variation shall be published on the website.</p>
<p><strong>10. Legal venue</strong></p>
<p>This agreement will be governed by the laws of England and the parties hereby submit to the exclusive jurisdiction of the English courts.</p>
<p><strong>11. Rights of third parties</strong></p>
<p>A person who is not a party to this agreement has no right under the Contracts (Rights of Third Parties) Act 1999 to rely upon or enforce any term of this agreement but this does not affect any right or remedy of a third party which exists or is available apart from that Act.</p>
<p><strong>12. Severability</strong></p>
<p>If any provision of these Terms is deemed to be invalid or unenforceable for any reason, the remaining provisions will continue in full force without being impaired or invalidated in any way.</p>
<p><strong>13. Additional limitation of liability provisions</strong></p>
<p>13.1 Teacherhorizons act as, among other things, a platform for (i) school employers to post job opportunities and search for and evaluate candidates and (ii) candidates to post CVs and profiles and search for and evaluate job opportunities. Teacherhorizons is not responsible for screening or censoring all of the listings, including profiles offered.</p>
<p>13.2 Teacherhorizons is not involved in the actual transaction between employers and candidates. As a result, Teacherhorizons is not responsible for user content, the quality, safety or legality of the jobs or CVs posted, the truth or accuracy of the listings, the ability of employers to offer job opportunities to candidates or the ability of candidates to fill job openings and Teacherhorizons makes no representations about any jobs, CVs or user content on the Teacherhorizons website. While Teacherhorizons reserves the right in its sole discretion to remove user content, job postings, CVs or other material from the Teacherhorizons website from time to time, Teacherhorizons does not assume any obligation to do so and to the extent permitted by law, disclaims any liability for failing to take any such action.</p>
<p>13.3 TO THE FULLEST EXTENT POSSIBLE BY LAW, TEACHERHORIZONS MAXIMUM LIABILITY ARISING OUT OF OR IN CONNECTION WITH ANY TEACHERHORIZONS SITE OR YOUR USE OF THE TEACHERHORIZONS CONTENT, REGARDLESS OF THE CAUSE OF ACTION (WHETHER IN CONTRACT, TORT, BREACH OF WARRANTY OR OTHERWISE), WILL NOT EXCEED £100.</p>
<h4>COMPETITION RULES</h4>
<p><strong>1.</strong>&nbsp;Entry is open to qualified teachers aged 21 or over.</p>
<p><strong>2.&nbsp;</strong>Individual Terms apply to all competitions and these will be detailed by each competition.</p>
<p><strong>3.</strong>&nbsp;Teacherhorizons’ registered teachers may be entered to competitions automatically by Teacherhorizons by agreeing to the Terms unless they notify Teacherhorizons Ltd by emailing <a href="mailto:info@teacherhorizons.com">info@teacherhorizons.com</a></p>
<p><strong>4.</strong>&nbsp;Prizes will alter according to the specific completion.</p>
<p><strong>5.</strong>&nbsp;The winner will be the first entry form drawn at random by an adjudicator.</p>
<p><strong>6.</strong>&nbsp;Winners will be notified of their prize within 30 days of the draw date and details of winners will be advertised on the website following the competition deadline.</p>
<p><strong>6.</strong>&nbsp;Prizes will be forwarded to winners within 60 days.</p>
<p><strong>7.</strong>&nbsp;The adjudicator’s decision is final.</p>
<p><strong>8.</strong>&nbsp;Teacherhorizons reserves the right to substitute any prizes with a prize of equivalent or higher value in the event of circumstances arising outside the control of Teacherhorizons.</p>
<p><strong>9.&nbsp;</strong>Teacherhorizons will not be responsible for postal service losses although they will keep a record of postage proof.</p>
<div class="share clearfix">
<h2 title="Please consider sharing this article - you can use one of these buttons...">Share this article...</h2>
<div>
<span>
<a href="https://www.facebook.com/sharer.php?u=https://www.teacherhorizons.com/advice/terms-and-conditions-for-teachers/" target="_blank">
<img title="Share using Facebook" alt="Facebook" src="https://www.teacherhorizons.com/advice/wp-content/uploads/system/social/facebook.png">
</a>
</span>
<span>
<a href="https://twitter.com/share?url=https://www.teacherhorizons.com/advice/terms-and-conditions-for-teachers/&amp;text=Terms+and+conditions+for+teachers" target="_blank">
<img title="Share using Twitter" alt="Twitter" src="https://www.teacherhorizons.com/advice/wp-content/uploads/system/social/twitter.png">
</a>
</span>
<span>
<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.teacherhorizons.com/advice/terms-and-conditions-for-teachers/" target="_blank">
<img title="Share using LinkedIn" alt="LinkedIn" src="https://www.teacherhorizons.com/advice/wp-content/uploads/system/social/linkedin.png">
</a>
</span>
<span>
<a href="https://plus.google.com/share?url=https://www.teacherhorizons.com/advice/terms-and-conditions-for-teachers/" target="_blank">
<img title="Share using Google+" alt="Google+" src="https://www.teacherhorizons.com/advice/wp-content/uploads/system/social/google.png">
</a>
</span>
<span>
<a href="mailto:?Subject=Terms and conditions for teachers&amp;Body= https://www.teacherhorizons.com/advice/terms-and-conditions-for-teachers/" target="_blank">
<img title="Share using Email" alt="Email" src="https://www.teacherhorizons.com/advice/wp-content/uploads/system/social/email.png">
</a>
</span>
<div>
</div>
    </div></div></section>`;

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

