export default class DeviceNotConnected extends Error
{
    constructor(
        macAddress: string
    )
    {
        super(DeviceNotConnected.buildMessage(macAddress, 'pt-br'));
    }


    static buildMessage(macAddress : string, language: 'en' | 'pt-br')
    {
        return {
            'en': `Device with mac address ${macAddress} not found`,
            'pt-br': `Dispositivo com de número ${macAddress} não conectado`
        }[language];
    }
}