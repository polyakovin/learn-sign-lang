import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Ю');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp);

export default gesture;