import BaseMessage from "./BaseMessage";

export default interface RequestStopIrrigation extends BaseMessage {
    type: 'request-stop-irrigation';
    data: {
        deviceMacAddress: string;
        position: number;
    }
}