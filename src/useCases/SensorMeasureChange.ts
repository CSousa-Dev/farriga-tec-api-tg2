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

    async execute(
        macAddress: string,
        sensorId: string,
        externalHandler: (data: {
            sensorId: string,
            measure: number,
            timestamp: Date,
        }) => void,
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


            this.messager.addListener(
                'sensor-measure',
                async (payload) => {

                    let sensor = device.getSensorByPosition(payload.data.position);

                    if(!sensor){
                        console.log('Sensor measure receveid but sensor not found');
                        return;
                    }

                    externalHandler({
                        sensorId: sensor?.id,
                        measure: payload.data.measure,
                        timestamp: new Date(),
                    });
                }
            );
        } catch (error: any) {
            console.error(error);
        }
    }
}