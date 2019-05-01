import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  connectFormName = "";
  connectFormMail = "";
  connectFormMessage = "";

  constructor(private http: HttpClient){
    this.changeMemberText('uri');
  }


  title = 'bonsaicapital';

  whatWeDo =
    {
      'Scouting':
        {
          'left': 'Deal flow development in a large variety of markets',
          'right': 'Bonsai Capital, through its deep roots and connections in the Israeli technology and industrial communities, is well positioned to serve the foreign investment community, looking for investment and acquisitions opportunities in the Israeli market, with services that include deal-flow development, due diligence, deal formation and process management. This does not end with the investment. Bonsai Capital remains after the investment is done to closely monitor and assist clients’ local portfolio companies and facilitate successful integration over the long term.'
        },
      'FundRaising':
        {
          'left': 'Growth fundraising, Private and public option, financial & strategic investors',
          'right': 'Bonsai Capital offers its fundraising services to companies that meet the following profile: \n' +
            '\n' +
            '•\tselling stage;\n' +
            '•\tSeeking to raise $1.5M and up;\n' +
            '•\tRequire funds to grow business;\n' +
            '•\tTechnology or industrial company.\n' +
            '\n' +
            'Bonsai Capital assists fundraising clients in: Formulating an investment strategy, defining investor target communities, preparing the company for a due-diligence process, developing a business plan and marketing material, executing the investor search plan and structuring the right investment agreement.\n' +
            'Additionally, Bonsai Capital has developed a unique expertise, in cooperation with its local Australian affiliate, in guiding Israeli companies through an IPO on the Australian Stock Exchange (ASX).\n\n\n'
        },
      'MNA':
        {
          'left': 'Preparing the company for sale, strategic acquisition',
          'right': 'Bonsai Capital\'s experienced team assists buyers and sellers through the process with the following activities: Market analysis, competition analysis, company operational analysis, Leading team review, financial and accounting analysis, valuation analysis, customer and supplier contract review, and IP review. \n\n' +
            'Bonsai Capital utilizes its global market connections and international network of investment bankers to identify the right candidates for M&A transactions.'
        },
    };

  whatWeDoLeft = this.whatWeDo.Scouting.left;
  whatWeDoRight = this.whatWeDo.Scouting.right;
  currentSelectedOption = 'Scouting';

  public selectWhatWeDo (selected) {
    if (this.whatWeDo[selected]) {
      this.whatWeDoLeft = this.whatWeDo[selected].left;
      this.whatWeDoRight = this.whatWeDo[selected].right;
      this.currentSelectedOption = selected;
    }
  }

  public classWhatWeDo(selected){
    if (selected == this.currentSelectedOption) {
      return 'capabilityImage pointer';
    }
    else {
      return 'capabilityImage pointer opacity30';
    }
  }



  memberInfo = {
    "uri":{
      "name":"Uri Feldman",
      "title":"Managing Partner, Co-Founder",
      "description":"Mr. Feldman is a high tech veteran, with over 25 years in operational management, 15 years out of them in a CEO role. Mr. Feldman started his career with Orbotech LTD (NASDAQ-ORBK, specialized in machine vision), established a very successful software company in the PCB market named Frontline PCB Solutions, and later has been in the role of an entrepreneur in a few start-ups. Mr. Feldman raised around $20M to his companies from various sources, and lead M&A activities from the CEO chair. In the last few years he has been involved in the investment banking service through his activity in Sunbelt and later Bonsai Capital"
    },
    "eran":{
      "name":"Eran Ayzik",
      "title":"Managing Partner, Co-Founder",
      "description":"Mr. Ayzik started his career as an accountant in a big accountant firm, and later served as CFO of Dovrat-Shrem, the largest Israeli investment management house. Mr. Ayzik then joined a venture capital firm named Challenge as a partner, where he was involved in investing in around 100 technology and industrial companies, some through the VC firm and some as an angle. Before joining Bonsai Capital, Mr. Ayzik was involved in the last few years as an investor and CEO in several start-ups, and managed a NASDAQ traded high tech company (RIT), where he successfully executed a betterment process that resulted in a turn-around of its business"
    },
    "kenny":{
      "name":"Kenny Chan",
      "title":"Director of Business Development, China Region",
      "description":"Mr. Kenny Chan is a High Tech business veteran in managing sales and business development in Asia. He had held various senior positions from several leading publicly listed companies (such as Mentor Graphics, Orbotech, Tektronix, etc.) Mr. Chan had introduced various new technology/products in meeting the Asia technology needs in the last two decades and had excellent track record in developing business for hardware, software and total solutions. he had held management position in managing a unit of up to 150 people sales & service team, and achieved up to USD 100 million annual sales in Asia"
    },
  }

  memberInfoName = "";
  memberInfoTitle = "";
  memberInfoDescription = "";
  memberInfoSelected = "";

  public changeMemberText(selected){
    if(this.memberInfo[selected]){
      this.memberInfoName = this.memberInfo[selected].name;
      this.memberInfoTitle = this.memberInfo[selected].title;
      this.memberInfoDescription = this.memberInfo[selected].description;
      this.memberInfoSelected = selected;
    }
  }

  public SendMail(){

    var url = "https://script.google.com/macros/s/AKfycbzwbE1RAs09WwaxhnUodcOBDilaz8uRgFc_uATQze1VYBQX5H0/exec";

    return this.http.get(url);


  }
}
