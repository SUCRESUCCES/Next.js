export default function List() {
  //3. export default 붙이기 1. function 작명(){}

  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    // 2. return(HTML~~~)
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <h4>{a} $40</h4>
            {/* <h4>{상품[i]} $40</h4> */}
            {/* {상품[i]} == {a} */}
          </div>
        );
      })}
    </div>
  );
}
