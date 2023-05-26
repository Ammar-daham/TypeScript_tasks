import { Props } from '../types'
import Part from './Part';

const Content = (props: Props): JSX.Element => {
  return (
    <div>
        <Part courseParts={props.courseParts}/>
    </div>
  )
}


export default Content;