import { DeviceActionType } from "./PossibleEvents";
import Irrigator from "./Irrigator";
import Sensor from "./Sensor";

export type deviceConnection = 'remote' | 'local' | 'disconnected';

export default class Device
{
    private connection: deviceConnection = 'remote';

    constructor(
        public readonly macAddress: string,
        public readonly name: string,
        public readonly sensors: Sensor[] = [],
        public readonly irrigators: Irrigator[] = [],
        public readonly dispobileActions: DeviceActionType[] = []
    ){}

    getSensorByPosition(position: number): Sensor | undefined 
    {
        return this.sensors.find(sensor => sensor.position === position);
    }

    getIrrigatorByPosition(position: number): Irrigator | undefined
    {
        console.log(this.irrigators);
        return this.irrigators.find(irrigator => irrigator.position === position);
    }

    isConnected(): boolean
    {
        return this.connection === 'local' || this.connection === 'remote';
    }

    currentConnection(): deviceConnection
    {
        return this.connection;
    }
}