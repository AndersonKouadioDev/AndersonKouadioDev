import * as yup from 'yup';

export const FormSchema = yup.object().shape({
    nom_prenoms: yup.string()
  .min(5, "trop petit")
  .max(50, "trop long!")
  .required("Ce champ est obligatoire"),
  email: yup.string()
  .email("email invalide")
  .required("l'email est obligatoire"),
  tel: yup.string().min(8,"trop petit").max(20, "trop long!").required("Ce champs est obligatoire"),
  date_debut: yup.date().default(() => new Date()),
  date_fin: yup.date().default(() => new Date()),
  bien :yup.string() 
});
export const NewletterSchema = yup.object().shape({

  email: yup.string()
  .email("email invalide")
  .required("l'email est obligatoire"),
});
