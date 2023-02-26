import { FormGroup, StyledInput, ErrorContainer } from "./styles";

function FormItem({
  name,
  label,
  placeholder,
  value,
  valid,
  errMsg,
  handleChange,
}) {
  //Componente para agrupamento de labels, campos de input e boxes de erro, permitindo a reutilização com redução de repetição do código
  return (
    <FormGroup>
      <label for={name}>{label}</label>
      <StyledInput
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {valid && <ErrorContainer>{errMsg}</ErrorContainer>}
    </FormGroup>
  );
}

export default FormItem;
