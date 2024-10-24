import { Button, View } from "react-native";
import { useUseCases } from "./context/UseCaseContext";

export default function StopIrrigationButton(): JSX.Element {
    const { requestStopIrrigation } = useUseCases();

    const handleStop = async () => {
        try {
            await requestStopIrrigation.execute(
            '0000.0000.0000.000',
            1
          );
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <View>
            <Button title="Parar irrigação" onPress={handleStop}/>
        </View>
    );
}