import LocalConnectionStabilished from "./LocalConnectionStabilished";
import RemoteConnectionStabilished from "./RemoteConnectionStabilished";
import RequestStartIrrigation from "./RequestStartIrrigation";
import RequestStopIrrigation from "./RequestStopIrrigation";
import StartIrrigation from "./StartIrrigation";

export type EventMap = {
    'request-start-irrigation': RequestStartIrrigation;
    'request-stop-irrigation' : RequestStopIrrigation;
    'start-irrigation': StartIrrigation;
    'remote-connection-stabilished': RemoteConnectionStabilished;
    'local-connection-stabilished': LocalConnectionStabilished
};

export default abstract class CustomEventEmitter {
    abstract emit<K extends keyof EventMap>(event: K, data: EventMap[K]): boolean;
    abstract on<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this
    abstract off<K extends keyof EventMap>(event: K): this
}