import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonsaicapital';

  whatWeDo =
    {
      'InvestmentBanking':
        {
          'left': '1Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          'right': '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui fringilla, hendrerit risus sit amet, aliquam nisl. Aliquam at suscipit turpis. Ut vehicula est vel velit posuere, ac imperdiet lacus dapibus. Cras elementum libero nec felis eleifend, a feugiat purus bibendum. Sed pellentesque velit dolor. Cras rhoncus vitae est ut vulputate. Aliquam placerat erat sed nulla ullamcorper, ut rhoncus lacus placerat. Morbi eleifend maximus iaculis. Etiam nec metus efficitur, dapibus elit in, convallis nunc. Sed ut commodo tellus. Ut egestas risus eget lobortis accumsan. Integer gravida a risus vel aliquam. Aliquam vestibulum odio sed purus pulvinar varius. Ut tincidunt accumsan facilisis. Aenean sit amet consectetur turpis, id hendrerit orci. Fusce vel mattis ex, ac interdum lorem.'
        },
      'FundRaising':
        {
          'left': '2Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          'right': '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui fringilla, hendrerit risus sit amet, aliquam nisl. Aliquam at suscipit turpis. Ut vehicula est vel velit posuere, ac imperdiet lacus dapibus. Cras elementum libero nec felis eleifend, a feugiat purus bibendum. Sed pellentesque velit dolor. Cras rhoncus vitae est ut vulputate. Aliquam placerat erat sed nulla ullamcorper, ut rhoncus lacus placerat. Morbi eleifend maximus iaculis. Etiam nec metus efficitur, dapibus elit in, convallis nunc. Sed ut commodo tellus. Ut egestas risus eget lobortis accumsan. Integer gravida a risus vel aliquam. Aliquam vestibulum odio sed purus pulvinar varius. Ut tincidunt accumsan facilisis. Aenean sit amet consectetur turpis, id hendrerit orci. Fusce vel mattis ex, ac interdum lorem.'
        },
      'MNA':
        {
          'left': '3Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          'right': '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui fringilla, hendrerit risus sit amet, aliquam nisl. Aliquam at suscipit turpis. Ut vehicula est vel velit posuere, ac imperdiet lacus dapibus. Cras elementum libero nec felis eleifend, a feugiat purus bibendum. Sed pellentesque velit dolor. Cras rhoncus vitae est ut vulputate. Aliquam placerat erat sed nulla ullamcorper, ut rhoncus lacus placerat. Morbi eleifend maximus iaculis. Etiam nec metus efficitur, dapibus elit in, convallis nunc. Sed ut commodo tellus. Ut egestas risus eget lobortis accumsan. Integer gravida a risus vel aliquam. Aliquam vestibulum odio sed purus pulvinar varius. Ut tincidunt accumsan facilisis. Aenean sit amet consectetur turpis, id hendrerit orci. Fusce vel mattis ex, ac interdum lorem.'
        },
      'BusinessDevelopment':
        {
          'left': '4Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          'right': '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui fringilla, hendrerit risus sit amet, aliquam nisl. Aliquam at suscipit turpis. Ut vehicula est vel velit posuere, ac imperdiet lacus dapibus. Cras elementum libero nec felis eleifend, a feugiat purus bibendum. Sed pellentesque velit dolor. Cras rhoncus vitae est ut vulputate. Aliquam placerat erat sed nulla ullamcorper, ut rhoncus lacus placerat. Morbi eleifend maximus iaculis. Etiam nec metus efficitur, dapibus elit in, convallis nunc. Sed ut commodo tellus. Ut egestas risus eget lobortis accumsan. Integer gravida a risus vel aliquam. Aliquam vestibulum odio sed purus pulvinar varius. Ut tincidunt accumsan facilisis. Aenean sit amet consectetur turpis, id hendrerit orci. Fusce vel mattis ex, ac interdum lorem.'
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
}
