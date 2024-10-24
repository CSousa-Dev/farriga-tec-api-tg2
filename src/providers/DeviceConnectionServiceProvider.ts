import DeviceWebsocketConnectionService from "../infra/web/socket/DeviceWebsocketConnectionService";
import WebSocketManager from "../infra/web/socket/WebsocketManager";
import DeviceRemoteConnectionService from "../messages/DeviceRemoteConnectionService";
import EventEmitterServiceProvider from "./EventEmitterServiceProvider";

export default class DeviceConnectionServiceProvider 
{
    public static DeviceConnectionService(): DeviceRemoteConnectionService {
        return new DeviceWebsocketConnectionService(
            EventEmitterServiceProvider.EventEmitter(),
            WebSocketManager
        );
    }
}