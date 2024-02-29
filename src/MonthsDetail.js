import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
// import CircleLoader from "./CircleLoader";
import XlviLoader from "./XlviLoader";

const MonthsDetail = () => {
  const { id } = useParams();
  const {
    data: month,
    error,
    isPending,
  } = useFetch("http://localhost:8000/Tbl_Months/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/Tbl_Months/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/MonthsList");
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-3">
          {isPending && <div>loading...</div>}
          {error && <div>{error}</div>}
          {month && (
            <>
              <div>
                <h1 className="text-center">
                  {month.MonthMm}
                  <span>({month.MonthEn})</span>
                </h1>
              </div>
              <div>
                <h2 className="text-center mb-5">
                  {month.FestivalMm}
                  <span>({month.FestivalEn})</span>
                </h2>
              </div>
              <div className="text-center mb-3">
                <button onClick={() => navigate('/Months')} className="btn btn-outline-dark  mx-3">Back</button>
              </div>
              <div className="row">
                <div className="col-sm-6 mt-2">
                  <img
                    src={require(`../public/mooo/${month.ImagePath}`)}
                    alt={month.MonthEn}
                    className=" mb-2"
                    style={{ objectFit: "cover" }}
                  />
                  <p>
                    {month.Description}
                  </p>
                </div>
                <div className="col-sm-6 mt-2">
                    <p>{month.Detail}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthsDetail;
