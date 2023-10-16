import ContactForm from "../contact/ContactForm";

const ContactPreview = () => {
  return (
    <article className="contact">
      <h2 className="title-font pink-text h2-tag">Contacto</h2>
      <p className="white-text p-tag">
        Si estas interesado en mis habilidades y conocimientos para un proyecto no dudes en contactarme..
      </p>
      <ContactForm />
    </article>
  );
};

export default ContactPreview;
