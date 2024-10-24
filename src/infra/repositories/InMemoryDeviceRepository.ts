import Device from "../../entities/Device";
import Irrigator from "../../entities/Irrigator";
import DeviceRepositoryInterface from "../../repositories/DeviceRepositoryInterface";

export class InMemoryDeviceRepository implements DeviceRepositoryInterface {
    
    deviceData = {
        name: 'Mock Device',
        macAddress: '00:00:00:00:00:00',
        sensors: [],
        irrigators: [
            new Irrigator(
                1,
                'Mock Irrigator',
                'Mock Irrigator',
                ['start']
            )
        ],
    }
    
    private mockDevice: Device = new Device(
        this.deviceData.macAddress,
        this.deviceData.name,
        this.deviceData.sensors,
        this.deviceData.irrigators
    )

    async getDeviceByMacAddress(macAddress: string): Promise<Device | null> {
        return this.mockDevice; // Retorna o mock independente do macAddress
    }
}