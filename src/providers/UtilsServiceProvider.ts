import UuidGenerator from "../events/UuidGenerator";
import UuidGeneratorImpl from "../infra/UuidGeneratorImpl";

export default class UtilsServiceProvider {
    public static UuidGenerator(): UuidGenerator {
        return new UuidGeneratorImpl();
    }
}