import uuid from 'react-native-uuid';
import UuidGenerator from '../events/UuidGenerator';

export default class UuidGeneratorImpl implements UuidGenerator {
    generate(): string {
        return uuid.v4() as string;
    }
}
