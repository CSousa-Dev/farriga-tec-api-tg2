import CustomEventEmitter from "../events/CustomEventEmitter";

export default abstract class DeviceRemoteConnectionService {
    

    constructor(readonly custommEventEmitter: CustomEventEmitter) {}

    abstract isConnected(): boolean;
    abstract connect(): void;

    stablishConnection(){
        this.connect();

        if(this.isConnected()){
            this.onStabilishedConnection();
        }
    }

    private onStabilishedConnection(): void {
        this.custommEventEmitter.emit('remote-connection-stabilished', {
            timestamp: new Date(),
            type: 'remote-connection-stabilished',
            id: '',
            data: null
        });
    }
}