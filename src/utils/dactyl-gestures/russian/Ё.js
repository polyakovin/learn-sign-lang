import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Ё');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Index, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Middle, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Ring, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp);

export default gesture;