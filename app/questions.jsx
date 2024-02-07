

export default function Question({question}) {

  // function search(formData) {
  //   const query = formData.get("query");
  //   alert(`You searched for '${query}'`);
  // }


  return (
    <div>
      <div className="questions">{question.question}</div>
      <form >
        <select>
          <option  value={question.options[0]}>{question.options[0]}</option>
          <option  value={question.options[1]}>{question.options[1]}</option>
          <option  value={question.options[2]}>{question.options[2]}</option>
        </select>    
      </form>
    </div>
 );
}
