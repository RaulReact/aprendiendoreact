import {Link, navigate} from '../Link.jsx'

const i18n = {
    es:{
       title:'Sobre nosotros',
       button:'Ir a la Home',
       description:'Me llamo Raul Lopez y estoy compartiendo un repo basado en el clon de React Router' 
    },
    en:{
        title:'About us',
        button:'Go to Home',
        description:'My name is Raul Lopez and I am sharing a repository about React Router Clone' 
     }
}

const useI18n = (lang) =>{
    return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}){
    const i18n = useI18n(routeParams.lang ?? 'es')
    return(
      <>
        <h1>{i18n.title}</h1>
        <p>{i18n.description}</p>
        <Link onClick={() => navigate('/')}>{i18n.button}</Link>
      </>
    )
  }
  