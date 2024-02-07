

export default function Question({question}) {

  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }


  return (
    <div className="questions">{question.question}</div>
    <form >
      <select>
        <option value={question.options[0]}>{question.options[0]}</option>
      </select>    
    </form>
  );
}
