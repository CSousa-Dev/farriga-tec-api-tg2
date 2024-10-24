import { Button, View } from "react-native";
import { useUseCases } from "./context/UseCaseContext";

export default function StartIrrigationButton(): JSX.Element {
    const { requestStartIrrigation } = useUseCases();

    const handleStart = async () => {
        try {
            await requestStartIrrigation.execute(
            '0000.0000.0000.000',
            1
          );
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <View>
            <Button title="Irrigar" onPress={handleStart}/>
        </View>
    );
}