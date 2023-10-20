function FindFunction(){
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');
    return (
        <div>
            <h3>Find function results:</h3>
            <p>four = {four}</p>
            <p>string3 = {string3}</p>
        </div>
    );

}
export default FindFunction;