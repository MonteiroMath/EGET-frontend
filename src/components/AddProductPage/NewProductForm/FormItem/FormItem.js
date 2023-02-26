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
