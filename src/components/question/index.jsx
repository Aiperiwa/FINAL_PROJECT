// import './styles.css'


export const Question = ({ data }) => {
  return (

    <div>
      {data.text}
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



