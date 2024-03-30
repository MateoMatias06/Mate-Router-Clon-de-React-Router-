import {Link} from '../Link'
import { useI18n } from '../hooks/useI18n'


export default function AboutPage ({routeParams}){
  const i18n = useI18n(routeParams.lang ?? 'es')
    return(
      <>
        <h1>
          {i18n.title}
        </h1>
        <div>
          <img src="https://media.licdn.com/dms/image/D4D03AQEuADkUaPfxxA/profile-displayphoto-shrink_200_200/0/1709842530870?e=1717027200&v=beta&t=-Jw2FfA09RosJfR8VgR5Pv74hGpfHu6FGj5YdAy_HQs"
           alt={i18n.altDesc} />
          <p>{i18n.description}</p>
        </div>
        
        <Link to='/'>{i18n.button}</Link>
      </>
    )
  }