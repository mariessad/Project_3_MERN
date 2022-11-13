import background from "../pinkbg.jpg"
import { useEffect, useState} from "react"
const React = require("react");



const Art =() =>  {
  // const { art } = this.props;

    // call data from database
    const [artData, setArtData] = useState([]);

    // fires once upon render
    useEffect(() => {
    const fetchAllArt = async () => {
      const response = await fetch('/art/api/arts')
      
    // pass the json data on, gives array of objects
    console.log(response)
      const json = await response.json()
      
    if(response.ok){
      setArtData(json)
    }
  }
  // call the function
  fetchAllArt()
    }, []);
    console.log(artData);
    
    return (
      <div>
      {/* <div style={{backgroundImage: `url(${background})`, width: '100%', height: '100%' }}></div> */}
      <h1>Shop Art</h1>
        <a href={"/art/new"}>Add New Art listing</a>
        {artData.map((arts, i) => {
          return (
            <div className="product-container"  key={i}>
              <p className="product-title">{arts.title}</p>
              <img className="product-img" src={`${arts.image}`}></img>
              <p className="product-price">${arts.price}</p>
              <form action={`/cart/?_method=POST`} method="POST">
                <input
                  className="display-none"
                  type="text"
                  name="title"
                  defaultValue={arts.title}
                />
                <input
                  className="display-none"
                  type="text"
                  name="price"
                  defaultValue={arts.price}
                />
                <input
                  className="display-none"
                  type="text"
                  name="image"
                  defaultValue={arts.image}
                />

                <input
                  className="add-to-cart"
                  type="submit"
                  value="Add to Cart"
                />
              </form>
              {/* <button >
                Add to Cart
              </button> */}
              
              
              <a href={`art/${arts._id}/edit`}>
                <button>Edit</button>{" "}
              </a>
              <form action={`/art/${arts._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
              </form>
            </div>
          );
        })}
      </div>
    );
  }

export default Art;
