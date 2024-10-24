import Messager from "../infra/web/socket/Messager";
import MessagerInterface from "../messages/MessagerInterface";

export default class MessagerServiceProvider {
    public static Messager(): MessagerInterface {
        return new Messager()
    }
}