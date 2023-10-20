import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringigy from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];
    console.log("Working with Arrays");
    console.log("functionScoped:", functionScoped);
    console.log("blockScoped:", blockScoped);
    console.log("constant1:", constant1);
    console.log("numberArray1:", numberArray1.join(''));
    console.log("stringArray1:", stringArray1.join(''));
    console.log("variableArray1:", variableArray1.join(''));
    return (
        <div>
            <h2>Working with Arrays</h2>
            {/* <div>functionScoped = {functionScoped}</div>
            <div>blockScoped = {blockScoped}</div>
            <div>constant1 = {constant1}</div> */}
            <div>numberArray1 = {numberArray1.join('')}</div>
            <div>stringArray1 = {stringArray1.join('')}</div>
            <div>variableArray1 = {variableArray1.join('')}</div>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringigy/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    );


}
export default WorkingWithArrays;