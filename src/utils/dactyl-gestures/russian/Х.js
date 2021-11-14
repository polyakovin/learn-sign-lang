import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Х');

gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
gesture.addCurl(Finger.Middle, FingerCurl.FullCurl);
gesture.addCurl(Finger.Ring, FingerCurl.FullCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight);
gesture.addDirection(Finger.Ring, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp);

export default gesture;