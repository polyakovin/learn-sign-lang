import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('У');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.FullCurl);
gesture.addCurl(Finger.Middle, FingerCurl.FullCurl);
gesture.addCurl(Finger.Ring, FingerCurl.FullCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight);

export default gesture;