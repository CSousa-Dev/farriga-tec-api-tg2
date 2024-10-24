import BootstrapMessageListeners from "../messages/BootstrapMessageListeners";
import MessagerServiceProvider from "./MessagerServiceProvider";

export default class BootstrapMessageListenersProvider {
    public static Bootstrap(): BootstrapMessageListeners {
        return new BootstrapMessageListeners(
            MessagerServiceProvider.Messager()
        );
    }
}