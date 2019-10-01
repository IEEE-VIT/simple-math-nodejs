const mul = (x,y) => {
    if((!isNaN(x)) && (!isNaN(y))){
        const result = parseInt(x)*parseInt(y);
        return ({
            result
        })
    }
    else{
        return ({
            "error": "Inputs are not integers"
        })
    }
}

module.exports = mul;