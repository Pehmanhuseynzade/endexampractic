import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { getAlldatasID } from "../../api/httpsrequests";
import { Card } from "antd";
import { Link } from "react-router-dom";

function Details() {
  const [sport, setSport] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getAlldatasID(id).then((res) => {
      setSport(res);
      console.log(res);
    });
  }, [id]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Details Page</h1>
      <section className="detail">
        <Card
          key={sport._id}
          hoverable="true"
          style={{
            width: 300,
          }}
        >
          <div className="func-img">
            <img src={sport.image} alt="funcimage" />
          </div>
          <div className="datas">
            <h2>{sport.name}</h2>
            <p>{sport.price}</p>
            <p>{sport.desc}</p>
          </div>
            <button onClick={()=>navigate('/')} className="btn-back">Go Back</button>
        </Card>
      </section>
    </>
  );
}

export default Details;
