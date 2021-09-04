function EmailInvalid() {
  return <h5>"Enter a valid email address."</h5>;
}


export default function ValidedEmail(props) {
  const isEmailInvalid = props.isEmailInvalid;
  if (isEmailInvalid) {
    return <EmailInvalid />;
    
  }
  else{
    return null;
  }
  
}