const div = (x,y) => {
    if((!isNaN(x)) && (!isNaN(y))){
        if(parseInt(y)===0){
            return ({
                "error": "Division by 0 is not possible"
            })
        }
        const result = parseInt(x)/parseInt(y);
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

module.exports = div;