import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import StartIrrigation from '../../useCases/RequestStartIrrigation';
import UseCaseServiceProvider from '../../providers/UseCaseServiceProvider'; // Corrigido aqui
import StabilishRemoteConnection from '../../useCases/StabilishRemoteConnection';
import RequestStartIrrigation from '../../useCases/RequestStartIrrigation';
import RequestStopIrrigation from '../../useCases/RequestStopIrrigation';

interface UseCaseContextType {
    requestStartIrrigation: RequestStartIrrigation;
    requestStopIrrigation: RequestStopIrrigation;
    stabilishRemoteConnection: StabilishRemoteConnection;
}

const UseCaseContext = createContext<UseCaseContextType | undefined>(undefined);

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
        <UseCaseContext.Provider value={provider}>
            {children}
        </UseCaseContext.Provider>
    );
};

export const useUseCases = () => {
    const context = useContext(UseCaseContext);
    if (!context) {
        throw new Error('useUseCases must be used within a UseCaseProvider');
    }
    return context;
};
