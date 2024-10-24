import BaseEvent from './BaseEvent';

export default interface StartIrrigation extends BaseEvent {
    type: 'start-irrigation';
    data: {
        deviceMacAddress: string;
        position: number;
    }
}