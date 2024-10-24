import { handleableMessagesMap } from "../../../messages/MessagerInterface";

export default class WebSocketImpl {
    private socket: WebSocket | null = null;
    private error: Event|null = null;
    private listeners: { [K in keyof handleableMessagesMap]?: Array<(data: handleableMessagesMap[K]) => void> } = {};

    constructor(url: string, onClose: () => void) {
        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
            console.log('WebSocket connected');
        };

        this.socket.onmessage = (event) => {
            this.dispatchEvent(event);    
        }

        this.socket.onclose = () => {
            onClose();
        };
    }

    isConnected(): boolean {
        if(this.socket?.OPEN && this.socket?.OPEN === 1){
            return true;
        }
        return false;
    }

    hasError(): boolean {
        return this.error !== null;
    }

    lastError(): Event | null {
        return this.error;
    }

    getListeners(): { [K in keyof handleableMessagesMap]?: Array<(data: handleableMessagesMap[K]) => void> } {
        return this.listeners;
    }

    send(data: any): void {
        if(this.socket){
            this.socket.send(data);
        }
    }

    addListener<K extends keyof handleableMessagesMap>(message: K, listener: (data: handleableMessagesMap[K]) => void): void {
        if(!this.listeners[message]) {
            this.listeners[message] = [];
        }
        this.listeners[message]!.push(listener);
        console.log('start listening event: ' + message);
    }

    dispatchEvent(event: MessageEvent): void {
        const data = JSON.parse(event.data) as { [K in keyof handleableMessagesMap]: { type: K } & handleableMessagesMap[K] }[keyof handleableMessagesMap];

        if (!data.type) return;

        if (this.listeners[data.type]) {
            this.listeners[data.type]!.forEach(listener => {
                listener(data as any);
            });
        }
    }
}
