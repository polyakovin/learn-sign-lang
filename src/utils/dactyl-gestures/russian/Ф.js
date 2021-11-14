import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Ф');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight);

export default gesture;