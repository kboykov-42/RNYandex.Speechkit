import { NativeModules } from 'react-native';

type YandexSpeechKitType = {
  multiply(a: number, b: number): Promise<number>;
};

const { YandexSpeechKit } = NativeModules;

export default YandexSpeechKit as YandexSpeechKitType;
