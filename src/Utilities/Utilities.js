function translateMatrixElementsToMathJax(elements) {
    var result = "$$\\begin{pmatrix}"
    var i = 0;

    console.log(elements)

    elements.forEach((row) => {
        var k = 0
        row.forEach((element) => {
            result += element
            if (k !== row.length - 1) {
                result += "&"
            }
            k++;
        })
        if (i === elements.length - 1) {
            result += "\\end{pmatrix}$$" //  \\\
        }
        else {
            result += "\\\\" //  \\\
        }
        i++;
    })
    console.log(result)
    return result;
}

export default translateMatrixElementsToMathJax