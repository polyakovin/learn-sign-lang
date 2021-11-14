import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('Г');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.NoCurl);
gesture.addCurl(Finger.Middle, FingerCurl.FullCurl);
gesture.addCurl(Finger.Ring, FingerCurl.FullCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight);
gesture.addDirection(Finger.Index, FingerDirection.VerticalDown);
gesture.addDirection(Finger.Middle, FingerDirection.VerticalDown);
gesture.addDirection(Finger.Ring, FingerDirection.VerticalDown);
gesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown);

export default gesture;