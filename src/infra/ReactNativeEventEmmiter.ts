import { NativeEventEmitter, NativeModules } from 'react-native';
import CustomEventEmitter , { EventMap } from '../events/CustomEventEmitter';

export default class ReactNativeEventEmitter extends CustomEventEmitter {
    private eventEmitter: NativeEventEmitter;

    constructor() {
        super();
        this.eventEmitter = new NativeEventEmitter();
    }

    emit<K extends keyof EventMap>(event: K, data: EventMap[K]): boolean {
        this.eventEmitter.emit(event, data);
        return true;
    }

    on<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this {
        this.eventEmitter.addListener(event, listener);
        return this;
    }

    off<K extends keyof EventMap>(event: K): this {
        this.eventEmitter.removeAllListeners(event);
        return this;
    }
}
