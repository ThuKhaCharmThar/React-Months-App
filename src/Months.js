import CircleLoader from "./CircleLoader";
import MonthsList from "./MonthsList";
import ScatterBoxLoader from "./ScatterBoxLoader";
import useFetch from "./useFetch";

const Months = () => {
  const { error, isPending, data: months } = useFetch('http://localhost:8000/Tbl_Months')
  console.log(months);
  return (
    <div className="months">
      { error && <div>{ error }</div> }
      { isPending &&<div><loading styleName="">loading...</loading></div>}
      { months && <MonthsList months={months} /> }
    </div>
  );
}
export default Months;