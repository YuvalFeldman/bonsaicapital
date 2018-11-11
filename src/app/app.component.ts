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
      'InvestmentBanking':
        {
          'left': 'The Israeli technology market is considered in the world to be very attractive for investments. The innovation demonstrated in the tens of thousands of start-ups that were established in the last thirty years led to defining Israel as a "start-up nation".',
          'right': 'Bonsai Capital, due to its founder\'s vast network connections, is well positioned to serve the foreign investment community with services that include deal-flow development, Due diligence, deal formation and process management.\n\nThis does not end with the investment. Bonsai Capital remains after the investment is done to closely monitor the assist the invested company, and maintain the parties\' relationship at its highest level.'
        },
      'FundRaising':
        {
          'left': 'Bonsai Capital\'s investor network include venture capital and private equity firms, family house investment firms, private investors, and corporate VC\'s. The geographic spread is in all five continents.',
          'right': 'Bonsai Capital offer its fund raising services to companies that meet the following profile, Selling stage, Seeking to raise $2M and up, Need the funds to grow the business, Technology or industrial company\n\nBonsai Capital is able to assist your company in different activities all needed for a successful journey. These activities include: Compiling an investment strategy, Defining investor target communities (Type of investor, Geography, financial vs. strategic), Preparing the company for due-diligence process, Developing business plan and marketing material, Initiate the marketing activities.'
        },
      'MNA':
        {
          'left': 'No matter the reason (acquisition, sale, merger) that drive the M&A process, to assure the highest probability for success, it needs to be planned and executed thoroughly',
          'right': 'Bonsai Capital\'s experienced team will assist the buyer/seller through the process with the following activities: Market - Market analysis, competition analysis, Company - Operational analysis, Leading team review, Finance – Accounting analysis, Valuation analysis, Legal – Customer and supplier contracts, IP\n\nBonsai Capital is utilizing its market connections through international investment bankers that specialize in locating the right candidates for the M&A opportunity, and through its affiliation with Sunbelt Network, the world\'s largest M&A firm for SMB\'s. Sunbelt has around 300 offices in all five continents, with around 3000 people, and 10,000 deals on the table at any given moment. Sunbelt\'s huge connection network is yet another strength multiplier for Bonsai Capital in serving your M&A needs.'
        },
      'BusinessDevelopment':
        {
          'left': 'Bonsai will find you the right channels in the target countries whether they be agents, resellers, distributors, or OEM partners.',
          'right': 'Growing your business usually requires developing your ability to sell and service globally. Many products require ongoing support so a good local support representative is an enabler for sales. However, it\'s not an easy job to find the right local partner for your company with language and culture barriers.\n\nBonsai Capital is offering its BD services to local Israeli technology and industrial companies utilizing its international investment banker network. At this point Bonsai Capital is offering its service in APAC only. APAC has become the locomotive of the world economy and some countries in APAC are huge market by themselves (China, Korea, India, Japan).'
        },
    };

  whatWeDoLeft = this.whatWeDo.InvestmentBanking.left;
  whatWeDoRight = this.whatWeDo.InvestmentBanking.right;
  currentSelectedOption = 'InvestmentBanking';

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
      "description":"A high tech veteran, with over 25 years in operational management, 15 years out of them in a CEO role. Mr. Feldman started his career with Orbotech LTD (NASDAQ-ORBK, specialized in machine vision), established a very successful software company in the PCB market named Frontline PCB Solutions, and later has been in the role of an entrepreneur in a few start-ups. Mr. Feldman raised around $20M to his companies from various sources, and lead M&A activities from the CEO chair. In the last few years he has been involved in the investment banking service through his activity in Sunbelt and later Bonsai Capital"
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

    return this.http.get(url)


  }
}
