import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toastError, toastSuccess, toastWarning } from 'utils/toastMessage';
import { Button } from '@components/Button';
import { inputsList } from './inputsList';
import sendIcon from '@assets/icons/send.png';
import { 
  ErrorSpan,
  FormContainer, 
  InputGroup, 
  SocialInput, 
  SocialTextArea, 
} from './styles';


const defaultValues = {
  name: '',
  email: '',
  message: '',
};
export const SocialForm = () => {
  const [errors, setErros] = useState([]);
  const [formData, setFormData] = useState(defaultValues);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setErros(prev => prev.filter(error => error !== name));
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errorFields = Object.entries(formData)
      .filter((entrie => !entrie[1]))?.map((entrie) => entrie[0]);
    setErros(errorFields);

    if (errorFields.length) return toastWarning('Preencha os campos corretamente');
    
    setLoading(true);
    
    const emailData = {
      from_name: formData.name,
      reply_to: formData.email,
      to_name: 'Jhony Freitas',
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_pezcovo',
        'template_ey3gssi',
        emailData,
        'SPrzEWLAc45oeAOfs'
      );
  
      setFormData(defaultValues);
      toastSuccess('E-mail enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      toastError('Ocorreu um erro ao enviar o e-mail.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSendEmail}>
      {inputsList.map((field, i) => {
        const settings = {
          name: field.name,
          value: formData[field.name],
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
        type="submit"
        icon={sendIcon}
        loading={loading}
        style={{ alignSelf: 'end' }}  
      />

    </FormContainer>
  );
};