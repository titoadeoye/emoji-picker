declare module 'react-native-clipboard' {
    export default class Clipboard {
        static setString(text: string): void;
        static getString(): Promise<string>;
    }
}