import RequestStartIrrigation from "../events/RequestStartIrrigation";
import SendMessagesToDevice from "../useCases/SendMessagesToDevice";
import ListenerInterface from "./ListenerInterface";

export default class OnRequestStartIrrigation implements ListenerInterface 
{
    constructor(
        private sendMessageToDeviceService: SendMessagesToDevice
    ){}

    async handle(event: RequestStartIrrigation): Promise<void> {
        await this.sendMessageToDeviceService.execute('123456789', event);
    }
}