import RequestStartIrrigation from "../useCases/RequestStartIrrigation";
import RequestStopIrrigation from "../useCases/RequestStopIrrigation";
import SendMessagesToDevice from "../useCases/SendMessagesToDevice";
import StabilishRemoteConnection from "../useCases/StabilishRemoteConnection";
import DeviceConnectionServiceProvider from "./DeviceConnectionServiceProvider";
import EventEmitterServiceProvider from "./EventEmitterServiceProvider";
import MessagerServiceProvider from "./MessagerServiceProvider";
import RepositoryServiceProvider from "./RepositoryServiceProvider";
import UtilsServiceProvider from "./UtilsServiceProvider";

export default class UseCaseSeriviceProvider {
    public static RequestStartIrrigation() {
        return new RequestStartIrrigation(
            EventEmitterServiceProvider.EventEmitter(),
            UtilsServiceProvider.UuidGenerator(),
            RepositoryServiceProvider.DeviceRepository(),
        )
    }

    public static RequestStopIrrigation() {
        return new RequestStopIrrigation(
            EventEmitterServiceProvider.EventEmitter(),
            UtilsServiceProvider.UuidGenerator(),
            RepositoryServiceProvider.DeviceRepository(),
        )
    }

    public static StabilishRemoteConnection() {
        return new StabilishRemoteConnection(
            DeviceConnectionServiceProvider.DeviceConnectionService(),  
        )
    }

    public static SendMessagesToDevice(): SendMessagesToDevice{
        return new SendMessagesToDevice(
            MessagerServiceProvider.Messager(),
            RepositoryServiceProvider.DeviceRepository(),
        )
    }
}