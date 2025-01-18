import { FormEvent, useState } from 'react';
import { Button } from '@components/Button';
import sendIcon from '@assets/icons/send.png';
import { 
  ErrorSpan,
  FormContainer, 
  InputGroup, 
  SocialInput, 
  SocialTextArea, 
} from './styles';
import { inputsList } from './inputsList';

export const SocialForm = () => {
  const [errors, setErros] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setErros(prev => prev.filter(error => error !== name));
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errorFields = Object.entries(formData)
      .filter((entrie => !entrie[1]))?.map((entrie) => entrie[0]);

    setErros(errorFields);

    if (errorFields.length) return;
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSendEmail}>
      {inputsList.map((field, i) => {
        const settings = {
          name: field.name,
          placeholder: field.placeholder,
          $error: errors.includes(field.name),
          onChange: ({ target: { name, value } }) => (
            handleInputChange(name, value)
          )
        };

        return (
          <InputGroup key={i}>
            { field.type === 'input' ? (
              <SocialInput {...settings}/>
            ):  (
              <SocialTextArea {...settings}/>
            )}

            <ErrorSpan $error={errors.includes(field.name)}>
              Campo inválido
            </ErrorSpan>
          </InputGroup>
        );
      })}
      
      <Button 
        text="Enviar"
        icon={sendIcon}
        type="submit"
        style={{ alignSelf: 'end' }}  
      />

    </FormContainer>
  );
};