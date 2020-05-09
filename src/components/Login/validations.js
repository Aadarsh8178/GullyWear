export const checkValidity = (value, rules)=> {
    let isValid = {valid:true,error:''};
    if (!rules) {
        return {valid:true,error:''};
    }
    
    if (rules.required) {
        isValid.valid = value.trim() !== '' && isValid;
        if(!isValid.valid){
            isValid.error = 'Required'
        }
    }

    if (rules.minLength) {
        isValid.valid = value.length >= rules.minLength && isValid
        if(!isValid.valid){
            isValid.error = 'Min length ' + rules.minLength
        }
    }

    if (rules.maxLength) {
        isValid.valid = value.length <= rules.maxLength && isValid
        if(!isValid.valid){
            isValid.error = 'Max length ' + rules.maxLength
        }
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid.valid = pattern.test(value) && isValid
        if(!isValid.valid){
            isValid.error = 'Invalid Email'
        }
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid.valid = pattern.test(value) && isValid
        if(!isValid.valid){
            isValid.error = 'Not a Number'
        }
    }
    if(rules.phoneno){
        const pattern = /^[0]?[789]\d{9}$/;
        isValid.valid = pattern.test(value) && isValid
        if(!isValid.valid){
            isValid.error = 'Invalid Mobile Number'
        }
    }
    return isValid;
  }