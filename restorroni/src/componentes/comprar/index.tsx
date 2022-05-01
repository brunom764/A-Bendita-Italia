
import style from './comprar.module.scss';
import useFormik from '../form/index';

export default function Formulario(){
  
  const errors = {
    userEmail:''
  };
  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userNome: '',
      userCep: '',
      userNumero: '',
    },  validate: function (values: { userEmail: string; userNome: string; userCep: number; userNumero: string; }) {
      
      if(!values.userEmail.includes('@') || !values.userEmail.includes('.com') || values.userEmail.length < 11) {
        errors.userEmail = 'Por favor, insira um email válido';
      }
      return errors;
    }
  });

  function Compras(e: { preventDefault: () => void; }){
    e.preventDefault();
    if (!errors.userEmail) {
      alert('Compra aprovada');
    }
    else {
      alert('Compra negada');
    }
  }

  return(
    <form className={style.form} id='formLogin'>
      <h4 className={style.subtitulo}> Para comprar, é necessário preencher essas informações:</h4>
      <div className={style.info}>
        <label htmlFor='userNome' className={style.label}> Nome:</label>
        <input
          type="text"
          name="userNome"
          placeholder="Insira seu nome"
          className={style.input}
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userNome}
        />
      </div>
      <div className={style.info}>
        <label htmlFor='userEmail' className={style.label}> Email:</label>
        <input
          type="text"
          name="userEmail"
          placeholder="Insira seu email"
          className={style.input}
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userEmail}
        />
      </div>
      <div className={style.info}>
        <label htmlFor='userCep' className={style.label}> CEP:</label>
        <input
          type="number"
          name="userCep"
          placeholder="Insira seu CEP"
          className={style.input}
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userCep}
        />
        <div className={style.info}>
          <label htmlFor='userNumero' className={style.label}> Numero da sua residência:</label>
          <input
            type="number"
            name="userNumero"
            placeholder="Insira o número da sua residência"
            className={style.input}
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userNumero}
          />
        </div>
        <label htmlFor='userNumero' className={style.label}> Forma de pagamento:</label>
        <div className={style.info}>
          <select name="select" className={style.select}>
            <option value="valor1"  className={style.option} selected>Cartão de crédito</option>
            <option value="valor2"  className={style.option}>Cartão de débito</option>
            <option value="valor3"  className={style.option} >Dinheiro físico</option>
          </select>
        </div>
        <button className={style.btnComprar} onSubmit={ () => Compras}>{'Comprar'}</button>
      </div>
    </form>
  );
}