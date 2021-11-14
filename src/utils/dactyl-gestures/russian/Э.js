import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Э');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Middle, FingerCurl.FullCurl);
gesture.addCurl(Finger.Ring, FingerCurl.FullCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Middle, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Ring, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight);

export default gesture;