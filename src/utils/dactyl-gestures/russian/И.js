import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const gesture = new GestureDescription('И');

gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
gesture.addCurl(Finger.Index, FingerCurl.FullCurl);
gesture.addCurl(Finger.Middle, FingerCurl.FullCurl);
gesture.addCurl(Finger.Ring, FingerCurl.NoCurl);
gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl);
gesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Index, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Middle, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Ring, FingerDirection.VerticalUp);
gesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp);

export default gesture;