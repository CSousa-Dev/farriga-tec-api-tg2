import WebSocketImpl from "./WebSocketImpl";

type handleableMessagesMap = {
  [key: string]: any; // Define the actual structure of your messages here
};

export default class WebSocketManager {
    private static instance: WebSocketImpl | null = null;
    private static url: string | null = null;
  
    private constructor() {}
  
    public static getInstance(url: string): WebSocketImpl {
      if (!WebSocketManager.instance || WebSocketManager.url !== url) {
        WebSocketManager.url = url;
        WebSocketManager.instance = new WebSocketImpl(url, () => {
          this.reconectOnClose();
        });
      }
      return WebSocketManager.instance;
    }

    public static reconectOnClose(): void {
        let newInstance = new WebSocketImpl(WebSocketManager.url as string, () => {
            this.reconectOnClose();
        });

        let allListenners = WebSocketManager.instance?.getListeners();
        for (let key in allListenners) {
            if (allListenners[key as keyof typeof allListenners]) {
                (allListenners[key as keyof typeof allListenners] as Array<(data: any) => void>)?.forEach((listener) => {
                    newInstance.addListener(key as keyof typeof allListenners, listener);
                });
            }
        }

        WebSocketManager.instance = newInstance;
    }

  }