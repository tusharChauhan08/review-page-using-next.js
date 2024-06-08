export default function ReviewFormInputSection(props) {
    return (
        <>
        <div className="inputSection" style={{margin: "0.6rem 0"}}>
            <h3>{props.title}</h3>
            <p>{props.label}</p>
            <props.Component ratingValue={props.starValue} />
          </div>
        </>
    )
}