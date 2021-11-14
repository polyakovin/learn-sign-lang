import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Т');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.NoCurl);
gesture.addCurl(Finger.Middle, FingerCurl.NoCurl);
gesture.addCurl(Finger.Ring, FingerCurl.NoCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown);
gesture.addDirection(Finger.Index, FingerDirection.VerticalDown);
gesture.addDirection(Finger.Middle, FingerDirection.VerticalDown);
gesture.addDirection(Finger.Ring, FingerDirection.VerticalDown);
gesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown);

export default gesture;