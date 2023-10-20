function FunctionParenthesisAndParameters(){
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return(
        <div>
            <h2>Parenthesis and parameters</h2>
            <div>twoSquared = {twoSquared}</div>
            <div>square(2) = {square(2)}</div>
            <div>threePlusOne = {threePlusOne}</div>
            <div>plusOne(3) = {plusOne(3)}</div>
        </div>

    )

}

export default FunctionParenthesisAndParameters;