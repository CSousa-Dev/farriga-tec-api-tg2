export default interface BaseEvent {
    readonly id: string;
    readonly type: string;
    readonly timestamp: Date;
}