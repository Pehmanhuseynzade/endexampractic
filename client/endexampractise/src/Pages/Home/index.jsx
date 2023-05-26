import { Helmet } from "react-helmet";
import { Card } from "antd";
import { useEffect, useState } from "react";
import {  deleteDatasByID, getAlldatas } from "../../api/httpsrequests";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2"
function Home() {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getAlldatas().then((data) => {
      setDatas(data);
      console.log(data);
    });
  }, []);

  function handleSearch(e) {
    setInput(e.target.value);
  }

  function handleDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDatasByID(id);
        setDatas(datas.filter((x) => x._id !== id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* MAIN SECTION */}

      <main className="image-hero">
        <div className="hero-words">
          <h1 className="firsth1">REAL FITNESS</h1>
          <h1 className="secondh1">DEPENDS ON EXERCISE</h1>
          <p>SHAPE YOUR BODY WELL.</p>
        </div>
      </main>

      {/* TITLE */}

      <div className="title">
        <h1>We care about what we offer</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>

      {/* FUNCTIONAL SECTION */}

      <div className="search-sort">
        <TextField
          onChange={(e) => handleSearch(e)}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <Button
          onClick={() => setDatas([...datas.sort((x, y) => x.price - y.price)])}
          variant="contained"
        >
          Sort By Price
        </Button>
      </div>
      <section className="func-cards">
        {datas &&
          datas
            .filter((item) => {
              if (input === "") {
                return datas;
              } else if (
                item.name
                  .toLowerCase()
                  .trim()
                  .includes(input.toLowerCase().trim())
              ) {
                return item;
              }
            })
            .map((d) => (
              <Card
                key={d._id}
                hoverable="true"
                style={{
                  width: 300,
                }}
                cover={<img alt="example" src={d.image} />}
              >
                <h2>{d.name}</h2>
                <p>{d.price}</p>
                <p>{d.desc}</p>
                <div className="error-outlined" >
                  <button onClick={()=>handleDelete(d._id)} className="btn-dlt">Delete</button>
                  <button className="btn-view">View Details</button>
                </div>
              </Card>
            ))}
      </section>
    </>
  );
}

export default Home;
