import { deviceConnection } from "../entities/Device";
import RequestStopIrrigation from "./interfaces/RequestStopIrrigation";
import RequestStartIrrigation from "./interfaces/RequestStartIrrigation";
import ResponseStartIrrigation from "./interfaces/ResponseStartIrrigation";
import SensorMeasureChange from "./interfaces/SensorMeasureChange";
import Sensor from "../entities/Sensor";

export type dispatchableMessagesMap = {
    'request-start-irrigation': RequestStartIrrigation;
    'request-stop-irrigation': RequestStopIrrigation;
};

export type handleableMessagesMap = {
    'sensor-measure': SensorMeasureChange;
    'response-start-irrigation': ResponseStartIrrigation;
}

export default interface MessagerInterface {    
    sendMessage<K extends keyof dispatchableMessagesMap>(connectionType: deviceConnection, data: dispatchableMessagesMap[K]): void; 
    
    addListener<K extends keyof handleableMessagesMap>(message: K, handler: (data: handleableMessagesMap[K]) => void): void;
}