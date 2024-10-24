import MessagerInterface from "./MessagerInterface";

export default class BootstrapMessageListeners {
    constructor(
        readonly messager: MessagerInterface,
    ) {}

    public boot() {
        this.messager.addListener("sensor-measure", (data) => {
            console.log("ALTERAÇÃO DE MEDIÇÃO DE SENSOR", data);
        })
    }
}