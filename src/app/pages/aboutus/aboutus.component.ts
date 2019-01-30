import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  defaultContent = '<h4 style="margin-top: 0.5em; margin-bottom: 0.5em; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: 600; font-stretch: inherit; font-size: 1.375rem; line-height: 1.3636; font-family: AvenirNext, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; vertical-align: baseline; color: rgb(51, 71, 91);">Why the "About Us" Page Rocks: It tells us a story.</h4><p style="margin-top: 1em; margin-bottom: 1em; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 18px; line-height: inherit; font-family: AvenirNext, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; vertical-align: baseline; color: rgb(51, 71, 91);">When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.</p><pre style="margin-top: 1em; margin-bottom: 1em; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 18px; line-height: inherit; font-family: AvenirNext, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; vertical-align: baseline; color: rgb(51, 71, 91);">Yellow Leaf Hammocks tells users about its product by describing how the hammocks empower artisan weavers and their families. The company breaks down different pieces of the story into sections that combine words and easily digestible graphics, painting a picture instead of big chunks of text. They are clear about why they are Not a Charity, This is the basis for a brighter future, built on a hand up, not a handout.</pre>';

  constructor() { }

  ngOnInit() {
    document.getElementById('text-output').innerHTML = this.defaultContent;
  }

  onContentChange(event: string) {
    document.getElementById('text-output').innerHTML = event;
  }

}