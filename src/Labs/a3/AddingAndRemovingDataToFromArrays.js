function AddingAndRemovingDataToFromArrays(){
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    numberArray1.push(6);         // adding new items
    stringArray1.push('string3');
    numberArray1.splice(2, 1);  // remove 1 item starting at 2
    stringArray1.splice(1, 1);
    return(
        <div>
            <h2>Add and remove data to arrays</h2>
            <div>numberArray1 = {numberArray1.join('')}</div>
            <div>stringArray1 = {stringArray1.join('')}</div>
        </div>

    )

}

export default AddingAndRemovingDataToFromArrays;
