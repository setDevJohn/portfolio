import { FormEvent, useState } from 'react';
import { Button } from '@components/Button';
import sendIcon from '@assets/icons/send.png';
import { 
  FormContainer, 
  SocialInput, 
  SocialTextArea, 
} from './styles';

export const SocialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSendEmail}>
      <SocialInput 
        placeholder="Seu nome"
        name="name"
        onChange={({ target: { name, value } }) => handleInputChange(name, value)}
      />
      <SocialInput 
        placeholder="Seu endereço de e-mail"
        name="email"
        onChange={({ target: { name, value } }) => handleInputChange(name, value)}
      />

      <SocialTextArea 
        placeholder="Me envie uma mensagem"
        name="message"
        onChange={({ target: { name, value } }) => handleInputChange(name, value)}
      />

      <Button text="Enviar" icon={sendIcon} type="submit"/>
    </FormContainer>
  );
};