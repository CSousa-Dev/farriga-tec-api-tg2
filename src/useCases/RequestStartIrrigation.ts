import CustomEventEmitter from "../events/CustomEventEmitter";
import DeviceRepositoryInterface from "../repositories/DeviceRepositoryInterface";

export default class RequestStartIrrigation 
{
    constructor(
        readonly eventEmitter: CustomEventEmitter,
        readonly uuidGenerator: { generate(): string }, 
        readonly deviceRepository: DeviceRepositoryInterface
    ){}

    async execute(
        macAddress: string,
        irrigatorPosition: number
    ): Promise<void>
    {
        const device = await this.deviceRepository.getDeviceByMacAddress(macAddress);

        if(!device)
        {
            throw new Error('Device not found');
        }
        

        const irrigator = device.getIrrigatorByPosition(irrigatorPosition);

        if(!irrigator)
        {
            throw new Error('Irrigator not found');
        }

        this.eventEmitter.emit('request-start-irrigation', {
            id: this.uuidGenerator.generate(),
            type: 'request-start-irrigation',
            timestamp: new Date(),
            data: {
                deviceMacAddress: macAddress,
                position: irrigatorPosition
            }
        });
    }
}