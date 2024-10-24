import DeviceConnectionService from "../messages/DeviceRemoteConnectionService";

export default class StabilishRemoteConnection 
{
    constructor(
        private readonly deviceConnectionService: DeviceConnectionService,
    ){}

    public execute(): void {
        this.deviceConnectionService.stablishConnection();
    }
}