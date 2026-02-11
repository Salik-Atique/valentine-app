import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('valentine-app');

  isAccepted = false;
  noClickCount = 0;
  noMessages = ['No', 'Think again!', 'You are hurting me', 'Please!', 'Are you sure?', 'Last chance'];
  currentNoText = 'No';
  yesSize = 1;
  reactionGifs = [
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2w4ZGM3ZWMyNXk5OWxweXQ2cTR0MWp2amVvM3pzcTUzMWhsdWV2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wr7oA0rSjnWuiLJOY5/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDB6YnJpYW9tZWE1eHlsNG9sMW5kbG16MDh3cnk0b2xkN256aXBzbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P53TSsopKicrm/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRkemRuNXNpb2x5bWgwdWVqcHNkMm51YXB1dzhpdGY3N3ptcWQzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jnQYWZ0T4mkhCmkzcn/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxpazRhY2FscmRtbjhlanc0dWl6YXdnODE5cm1wc2Q2ZmpnYTE5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YyECUhkxzUTDI0I5bx/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjdma25nMDY5aGNtNnh4aDdsNzBibmhhOTFhMTBoZ2t3YXczM3BtbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y93x7gLXTO5dnSWCEI/giphy.gif',
    
  ];
  currentGif = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjB6YXA0cjY4a2plM3o5cmY1cWRlMmJhNmVjMG40a2Jpc2N0cmNqciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvYNSqBAMDVx8CEYkt/giphy.gif';

  onYes() {
    this.isAccepted = true;
  }

  onNo() {
    if (this.noClickCount < this.noMessages.length - 1) {
      this.noClickCount++;
      this.currentNoText = this.noMessages[this.noClickCount];
      this.currentGif = this.reactionGifs[this.noClickCount - 1];
    } else {
      // Make yes button bigger
      this.yesSize += 0.5;
      this.currentGif = this.reactionGifs[this.reactionGifs.length - 1];
    }
  }
}
