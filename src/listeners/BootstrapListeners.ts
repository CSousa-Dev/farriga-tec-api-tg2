import CustomEventEmitter from "../events/CustomEventEmitter";
import UseCaseSeriviceProvider from "../providers/UseCaseServiceProvider";
import OnRequestStartIrrigation from "./OnRequestStartIrrigation";
import OnRequestStopIrrigation from "./OnRequestStopIrrigation";
import OnStartIrrigation from "./OnStartIrrigation";

export default class BootstrapListeners {
    constructor(
        readonly eventEmitter: CustomEventEmitter,
    ) {}

    public boot() {
        this.shutdown();

        this.eventEmitter.on("start-irrigation", (data) => {
            new OnStartIrrigation().handle(data);
        })

        this.eventEmitter.on("request-start-irrigation", async (data) => {
            new OnRequestStartIrrigation(
                UseCaseSeriviceProvider.SendMessagesToDevice()
            ).handle(data);
        })

        this.eventEmitter.on("request-stop-irrigation", async (data) => {
            new OnRequestStopIrrigation(
                UseCaseSeriviceProvider.SendMessagesToDevice()
            ).handle(data)
        })

        this.eventEmitter.on("remote-connection-stabilished", () => {
            console.log("Remote connection stabilished")
        })
    }

    public shutdown() {
        this.eventEmitter.off("start-irrigation")
    }
}