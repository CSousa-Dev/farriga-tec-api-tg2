import BootstrapListeners from "../listeners/BootstrapListeners";
import EventEmitterServiceProvider from "./EventEmitterServiceProvider";

export default class EventBootstrapListenersServiceProvider {
    public static Bootstrap(): BootstrapListeners {
        return new BootstrapListeners(
            EventEmitterServiceProvider.EventEmitter(),
        );
    }
}