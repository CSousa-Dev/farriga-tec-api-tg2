import Device from "../entities/Device";

export default interface DeviceRepositoryInterface {
    getDeviceByMacAddress(macAddress: string): Promise<Device | null>;
}