import DeviceNotConnected from "../errors/DeviceNotConnected";
import DeviceNotFound from "../errors/DeviceNotFound";
import MessagerInterface, { dispatchableMessagesMap } from "../messages/MessagerInterface";
import DeviceRepositoryInterface from "../repositories/DeviceRepositoryInterface";

export default class SendMessagesToDevice
{
    constructor(
        private readonly messager: MessagerInterface,
        private readonly deviceRepository: DeviceRepositoryInterface
    ){}

    async execute<K extends keyof dispatchableMessagesMap>(
        macAddress: string,
        message: dispatchableMessagesMap[K]
    ): Promise<void>
    {
        try {
            const device = await this.deviceRepository.getDeviceByMacAddress(macAddress);
            console.log(device);
            
            if(!device)
            {
                throw new DeviceNotFound(macAddress);
            }
    
            if(!device.isConnected()){
                throw new DeviceNotConnected(macAddress);
            }

            this.messager.sendMessage(
                device.currentConnection(), 
                {...message}
            );
        } catch (error: any) {
            console.error(error);
        }
    }
}