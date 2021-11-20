import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Ж');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Index, FingerDirection.HorizontalRight);
gesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight);
gesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight);
gesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight);

export default gesture;