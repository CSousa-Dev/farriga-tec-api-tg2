import BaseEvent from "./BaseEvent";

export default interface LocalConnectionStabilished extends BaseEvent {
    type: 'local-connection-stabilished';
    data: {
        deviceMacAddress: string;
    }
}