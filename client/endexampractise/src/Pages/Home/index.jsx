import { Helmet } from "react-helmet";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { deleteDatasByID, getAlldatas } from "../../api/httpsrequests";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
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
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDatasByID(id);
        setDatas(datas.filter((x) => x._id !== id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
                  width: 320,
                }}
              >
                <div className="func-img"><img src={d.image} alt="funcimage" /></div>
                <div className="datas">
                <h2>{d.name}</h2>
                <p>{d.price}</p>
                <p>{d.desc}</p>
                </div>
                <div className="error-outlined">
                  <button
                    onClick={() => handleDelete(d._id)}
                    className="btn-dlt"
                  >
                    Delete
                  </button>
                  <Link to={`/details/${d._id}`}><button className="btn-view">View Details</button></Link>
                </div>
              </Card>
            ))}
      </section>

      <div className="title">
        <h1>Top Courses That are open for Students</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>

      {/* CARDSSS */}



      <section className="six-cards">
        <div className="card">
                <div className="first-image">
                  <div className="imgdiv">Course Available</div>
                </div>
                <div className = "cards-words">
                  <h2>Running Classes</h2>
                  <h2 className="dollar">$275</h2>
                </div>
        </div>
        <div className="card">
                <div className="second-image">
                <div className="imgdiv">Course Available</div>
                </div>
                <div className = "cards-words">
                  <h2>Weight Lifting Classes</h2>
                  <h2 className="dollar">$200</h2>
                </div>
        </div>
        <div className="card">
                <div className="third-image">
                <div className="imgdiv">Course Available</div>
                </div>
                <div className = "cards-words">
                  <h2>Body Combat Classes</h2>
                  <h2 className="dollar">$225</h2>
                </div>
        </div>
        <div className="card">
                <div className="four-image">
                <div className="imgdiv">Course Available</div>
                </div>
                <div className = "cards-words">
                  <h2>Organic Yoga Classes</h2>
                  <h2 className="dollar">$300</h2>
                </div>
        </div>
        <div className="card">
                <div className="five-image">
                <div className="imgdiv">Course Available</div>
                </div>
                <div className = "cards-words">
                  <h2>Raw Fitness Classes</h2>
                  <h2 className="dollar">$500</h2>
                </div>
        </div>
        <div className="card">
                <div className="six-image">
                <div className="imgdiv">Course Available</div>
                </div>
                <div className = "cards-words">
                  <h2>Body Building Classes</h2>
                  <h2 className="dollar">$250</h2>
                </div>
        </div>
      </section>

              
      <section className="hero-two">
      <div className="hero-two-words">
                <h1>Huge Transaction in last Week</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <p>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <Link><button className="member">BECOME A MEMBER</button></Link>
      </div>
      </section>

    </>
  );
}

export default Home;
