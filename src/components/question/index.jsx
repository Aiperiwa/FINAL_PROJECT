import './style.css'


export const Question = ({ data }) => {
  return (

    <div className="q-item">
      <h3 className='test_quest'>{data.text}</h3>
      
      <img  src={ data.image } alt="image" />
      <div className="form">
        {
          data.variants.map((v) => (
            <div key={v.id} className="variant">
              <input type="radio" name={data.id} />
              <label htmlFor={v.id}>{v.text}</label>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Question



