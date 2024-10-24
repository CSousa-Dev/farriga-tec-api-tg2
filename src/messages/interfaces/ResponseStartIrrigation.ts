import BaseMessage from "./BaseMessage";

export default interface ResponseStartIrrigation extends BaseMessage {
    type: 'response-start-irrigation';
    data: {
        deviceMacAddress: string;
        position: number;
        success: boolean;
    }
}