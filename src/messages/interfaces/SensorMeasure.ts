import { sensorType } from "../../entities/Sensor";
import BaseMessage from "./BaseMessage";

export default interface SensorMeasure extends BaseMessage {
    type: "sensor-measure"; 
    data: { 
        sensor: sensorType; 
        position: number; 
        measure: number;
    } 
}