export default function ValidateInfo(values) {
    let errors = {};

   if(!values.username) {
       errors.username = 'Username required';
   } 

   //email
   if(!values.email) {
       errors.email = 'Email required';
   }
   if(!values.years) {
       errors.years = 'Years required'
   }
   if(!values.password) {
       errors.password = 'Password is required'
   } else if(values.password.length < 6) {
       errors.password = 'Password must be 6 charcters or more'
   }
   if(!values.password2) {
       errors.password2 = 'Password is required';
   } else if(values.password !== values.password2) {
       errors.password2 = 'Password not match'
   }
   return errors;
}

