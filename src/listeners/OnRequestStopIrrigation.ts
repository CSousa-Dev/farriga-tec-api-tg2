import RequestStopIrrigation from "../events/RequestStopIrrigation";
import SendMessagesToDevice from "../useCases/SendMessagesToDevice";
import ListenerInterface from "./ListenerInterface";

export default class OnRequestStopIrrigation implements ListenerInterface 
{
    constructor(
        private sendMessageToDeviceService: SendMessagesToDevice
    ){}

    async handle(event: RequestStopIrrigation): Promise<void> {
        await this.sendMessageToDeviceService.execute('123456789', event);
    }
}