import { WS_URL } from "@env";
import CustomEventEmitter from "../../../events/CustomEventEmitter";
import DeviceRemoteConnectionService from "../../../messages/DeviceRemoteConnectionService";
import WebSocketManager from "./WebsocketManager";
import WebSocketImpl from "./WebSocketImpl";

export default class DeviceWebsocketConnectionService extends DeviceRemoteConnectionService
{
    currentConnection: WebSocketImpl | null = null;

    constructor(
        customEventEmitter: CustomEventEmitter,
        private readonly WebsocketManager: typeof WebSocketManager
    ) {
        super(
            customEventEmitter
        );
    }

    connect(): void {
        this.currentConnection = this.WebsocketManager.getInstance(WS_URL);
    }

    isConnected(): boolean {
        return this.currentConnection?.isConnected() || false;
    }
}