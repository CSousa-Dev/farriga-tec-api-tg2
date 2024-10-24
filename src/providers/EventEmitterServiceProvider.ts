import CustomEventEmitter from "../events/CustomEventEmitter";
import ReactNativeEventEmitter from "../infra/ReactNativeEventEmmiter";

export default class EventEmitterServiceProvider
{
    public static EventEmitter(): CustomEventEmitter {
        return new ReactNativeEventEmitter();
    }
} 