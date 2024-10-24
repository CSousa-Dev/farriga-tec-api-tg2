import { IrrigationActionType } from "./PossibleEvents";

export default class Irrigator
{
    constructor(
        public readonly position: number,
        public readonly name: string,
        public readonly alias: string,
        public readonly disponibleActions: IrrigationActionType[] = []
    ){}
}