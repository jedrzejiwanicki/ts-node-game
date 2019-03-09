import {getMessages} from '@api/messages';
import {Player} from '@core/Player';
import {Socket} from '@utils/Socket';

interface Message {
  id: number;
  message: string;
}

export class MessagingController {
  private messages_container: HTMLElement;
  private form: HTMLFormElement;
  
  private player: Player = new Player();
  private socket: Socket = new Socket();
  
  constructor(
    form_id: string, 
    messages_container_id: string
  ) {
    this.form = <HTMLFormElement>document.getElementById(form_id);
    this.messages_container = <HTMLElement>document.getElementById(messages_container_id);
  }
  
  public init(): void {
    this.watchFormSubmission();
    this.watchNewMessages();
    this.fetchMessages();
  }
  
  private fetchMessages(): void {
    getMessages()
      .then((response: Message[]) => this.handleNewMessages(response))
  }
  
  private watchFormSubmission(): void {
    this.form.addEventListener('submit', (event: Event) => this.handleFormSubmission(event))
  }
  
  private watchNewMessages(): void {
    this.socket.getInstance().on('server.messages', (data: Message[]) => this.handleNewMessages(data));
  }
  
  private buildMessageNodes(messages: Message[]): HTMLParagraphElement[] {
    return messages
      .map((message: Message) => {
        const element: HTMLParagraphElement = document.createElement('p');
        
        element.className = 'game_message';
        element.innerText = message.message;
        
        return element;
      })
  }
  private handleNewMessages(messages: Message[]): void {
    const nodes: HTMLParagraphElement[] = this.buildMessageNodes(messages);

    this.messages_container.innerHTML = '';
    
    nodes.reverse().forEach((item: HTMLParagraphElement) => this.messages_container.appendChild(item))
    
  }
  
  private handleFormSubmission(event: Event): void {
    event.preventDefault();
    
    const formData: FormData = new FormData(this.form);

    this.socket.getInstance().emit('client.message.new', { id: this.player.name, value: formData.get('message') })

    this.form.reset();
    
  }
}