// import { Circle } from './shapes'
// // use Control and space to quick reference the exported classes in the file //
// // you can use the 'as' keyword to rename your import as needed //
// //  import {Circle as MyCircle} from './shapes'

// const circle = new Circle(1);
// console.log(circle.radius);

// WILD CARD IMPORTS //
import * as Shapes from './shapes';

// use you bucket name with '.' notation for all imports in your bucket //

const circle = new Shapes.Circle(1);
