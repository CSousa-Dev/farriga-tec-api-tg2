import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import UseCaseServiceProvider from '../../providers/UseCaseServiceProvider'; // Corrigido aqui
import StabilishRemoteConnection from '../../useCases/StabilishRemoteConnection';
import RequestStartIrrigation from '../../useCases/RequestStartIrrigation';
import RequestStopIrrigation from '../../useCases/RequestStopIrrigation';

interface UseCaseContextType {
    requestStartIrrigation: RequestStartIrrigation;
    requestStopIrrigation: RequestStopIrrigation;
    stabilishRemoteConnection: StabilishRemoteConnection;
}

const DeviceContext = createContext<UseCaseContextType | undefined>(undefined);

export const UseCaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const requestStartIrrigation = UseCaseServiceProvider.RequestStartIrrigation();
    const requestStopIrrigation = UseCaseServiceProvider.RequestStopIrrigation();
    const stabilishRemoteConnection = UseCaseServiceProvider.StabilishRemoteConnection();

    let provider = {
        requestStartIrrigation: requestStartIrrigation,
        requestStopIrrigation: requestStopIrrigation,
        stabilishRemoteConnection: stabilishRemoteConnection
    }

    return (
        <DeviceContext.Provider value={provider}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useUseCases = () => {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error('useUseCases must be used within a UseCaseProvider');
    }
    return context;
};
