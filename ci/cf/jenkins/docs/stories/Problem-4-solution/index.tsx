import * as React from "react";

interface IProps {
  //please put the typing here.
  attributes: IRow[];
  description: string;
  images: any[];
  name: string;
  price: string;
  showHint?: boolean;
}
interface IRow {
  name: string;
  value: any;
}

const Advanced = (props: IProps) => {
  const {
    //what props are we expecting?
    attributes,
    description,
    images,
    name,
    price,
    showHint
  } = props;

  return (
    <>
      <div>
        <h1>{name}</h1>
        <div >
          {images &&
            images.map((image, i) => {
              return <img alt={`car ${i}`} className="item" src={image.url} />;
            })}
        </div>
      </div>
      <div>{price}</div>
      <div>{description}</div>
      <div>
        <h2>Attributes</h2>
        <table>
          <tr>
            <th>Type</th>
            <th>Value</th>
          </tr>
          {attributes &&
            attributes.map(x => {
              //   Can you solve this map problem to fill out the table for each value?
              return (
                <tr>
                  <td>{x.name}</td>
                  {/* Fill in the tables values after passing them in! */}
                  <td>{x.value}</td>
                </tr>
              );
            })}
        </table>
      </div>
      <i>{showHint && "This hint should appear if showHint was passed correctly"}</i>
    </>
  );
};

export default Advanced;

//OK!
//Here we now have a new data set! Please import the dataset into this empty component and have it display and be correctly typed.
