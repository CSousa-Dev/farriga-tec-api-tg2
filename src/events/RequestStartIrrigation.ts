import BaseEvent from "./BaseEvent";

export default interface RequestStartIrrigation extends BaseEvent {
    type: 'request-start-irrigation';
    data: {
        deviceMacAddress: string;
        position: number;
    }
}