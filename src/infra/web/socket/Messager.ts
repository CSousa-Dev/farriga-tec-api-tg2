import { WS_URL } from '@env';
import { deviceConnection } from '../../../entities/Device';
import MessagerInterface, { dispatchableMessagesMap, handleableMessagesMap } from '../../../messages/MessagerInterface';
import WebSocketManager from './WebsocketManager';
import WebSocketImpl from './WebSocketImpl';

export default class Messager implements MessagerInterface {

    private websocket(): WebSocketImpl
    {
        return WebSocketManager.getInstance(WS_URL);
    }

    sendMessage<K extends keyof dispatchableMessagesMap>(connectionType: deviceConnection, data: dispatchableMessagesMap[K]): void {
            if(connectionType === 'remote'){
                this.websocket().send(JSON.stringify(data));
            }

            if(connectionType === 'local'){
                console.log('Sending message to local connection');
            }
    }

    addListener<K extends keyof handleableMessagesMap>(message: K, listener: (data: handleableMessagesMap[K]) => void): void {
        this.websocket().addListener(message, listener);
    }
}
