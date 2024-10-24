export default interface BaseMessage {
    readonly id: string;
    readonly type: string;
    readonly timestamp: Date;
}