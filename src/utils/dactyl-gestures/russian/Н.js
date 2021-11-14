import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Н');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.NoCurl);
gesture.addCurl(Finger.Middle, FingerCurl.NoCurl);
gesture.addCurl(Finger.Ring, FingerCurl.FullCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Ring, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp);

export default gesture;