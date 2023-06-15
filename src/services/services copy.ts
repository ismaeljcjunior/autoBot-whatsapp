import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
    private client!: Whatsapp; // Add definite assignment assertion

    constructor() {
        this.initialize();
    }

    async sendText(to: string, body: string) {
        this.client.sendText(to, body);
    }

    private initialize() {
        const qdCode = (base64Qrimg: string) => {
            // console.log(base64Qrimg);
        };
        const status = (statusSession: string) => {
            // console.log(statusSession);
        };
        const start = (client: Whatsapp) => {

            this.client = client; 
            this.sendText("5562982329395@c.us"," hello word")
        };

        create('ws-sender', qdCode, status)
            .then((client) => start(client))
            .catch((error) => console.log(error));
    }
}
export default Sender;
