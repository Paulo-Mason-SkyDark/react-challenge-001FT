function RegisterSuccess() {
  return <h5>Successfully registered</h5>;
}

export default function RegisterSuccessed(props) {
  const isRegister = props.isRegister;
  if (isRegister) {
    return <RegisterSuccess />;
  }
  else{
    return null;
  }
  
}
// desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason