import StartIrrigation from "../events/StartIrrigation";
import ListenerInterface from "./ListenerInterface";

export default class OnStartIrrigation implements ListenerInterface 
{
    handle(event: StartIrrigation): void {
        console.log('Irrigation started');
    }
}