import { InMemoryDeviceRepository } from "../infra/repositories/InMemoryDeviceRepository";
import DeviceRepositoryInterface from "../repositories/DeviceRepositoryInterface";

export default class RepositoryServiceProvider 
{
    public static DeviceRepository(): DeviceRepositoryInterface {
        return new InMemoryDeviceRepository()
    }
}