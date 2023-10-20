function ImpliedReturn(){
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return(
        <div>
            <h2>Implied return</h2>
            <div>fourTimesFive = {fourTimesFive}</div>
            <div>multiply(4, 5) = {multiply(4, 5)}</div>
        </div>

    )

}
export default ImpliedReturn;