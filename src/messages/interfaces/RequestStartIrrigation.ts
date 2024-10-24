import BaseMessage from "./BaseMessage";

export default interface RequestStartIrrigation extends BaseMessage {
    type: 'request-start-irrigation';
    data: {
        deviceMacAddress: string;
        position: number;
    }
}