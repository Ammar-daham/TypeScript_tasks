import { CoursePart, Props } from '../types'



const Part = (props: Props): JSX.Element => {
  return (
    <div>
      {props.courseParts.map((part: CoursePart, index: number) => {
          switch (part.kind) {
          case 'basic':
            return (
              <div key={index}>
                <br/>
                <b>
                  {part.name} {part.exerciseCount}
                </b><br/>
                <i>{part.description}</i>
              </div>
            )
          case 'group':
            return (
              <div key={index}>
                <br/>
                <b>
                  {part.name} {part.exerciseCount}
                </b> <br/>
                project exercises {part.groupProjectCount}
              </div>
            )
          case 'background':
            return (
                <div key={index}>
                  <br/>
                <b>
                  {part.name} {part.exerciseCount}
                </b> <br/>
                <i>{part.description}</i>
                <br />
                submit to {part.backgroundMaterial}
              </div>
            )
          case 'special':
            return (
                <div key={index}>
                    <br/>
                  <b>
                    {part.name} {part.exerciseCount}
                  </b> <br/>
                  <i>{part.description}</i>
                  <br />
                  required skills: {part.requirements.join(', ')}
                </div>
              );
          default:
            return null
        }
      })}
    </div>
  )
}

export default Part
