import BaseEvent from "./BaseEvent";

export default interface RequestStopIrrigation extends BaseEvent {
    type: 'request-stop-irrigation';
    data: {
        deviceMacAddress: string;
        position: number;
    }
}