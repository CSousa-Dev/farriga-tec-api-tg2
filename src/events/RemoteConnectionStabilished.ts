import BaseEvent from "./BaseEvent";

export default interface RemoteConnectionStabilished extends BaseEvent {
    type: 'remote-connection-stabilished';
    data: null;
}