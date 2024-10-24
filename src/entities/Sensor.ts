import { SensorActionType } from "./PossibleEvents";

export type sensorType = 'humidity' | 'temperature' | 'soilMoisture' | 'rain';

export default class Sensor
{
    private currentMeasure: null | number | boolean = null;
    private treshold: null | number = null;
    private state: 'on' | 'off' | 'pause' | 'error' |undefined = undefined;

    constructor(
        public readonly id: string,
        public readonly type: 'humidity' | 'temperature' | 'soilMoisture' | 'rain',
        public readonly position: number,
        public readonly name: string,
        public readonly alias: string,
        public readonly disponibleActions: SensorActionType[] = []
    ){}

    public setTreshold(treshold: number): void
    {
        this.treshold = treshold;
    }

    public getTreshold(): number | null
    {
        return this.treshold;
    }

    public setCurrentMeasure(value: number | boolean): void
    {
        this.currentMeasure = value;
    }
}