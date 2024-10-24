import { EventMap } from "../events/CustomEventEmitter";

export default interface ListenerInterface<K extends keyof EventMap = keyof EventMap> {
    handle(event: EventMap[K]): void;
}