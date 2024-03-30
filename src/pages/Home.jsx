import {Link} from '../Link'
import {useI18nHome} from '../hooks/useI18nHome'





export default function HomePage ({routeParams})  {

  const i18n = useI18nHome(routeParams.lang ?? 'es')

    return(
      <>
        <h1>
          {i18n.title}
        </h1>
        <p>{i18n.description}</p>
        <Link to='/about'>{i18n.button}</Link>
      </>
    )
  }