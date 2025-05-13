export default function List() {
  //3. export default 붙이기 1. function 작명(){}
  return (
    // 2. return(HTML~~~)
    <div>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>상품1 $40</h4>
      </div>
      <div className="food">
        <h4>상품2 $40</h4>
      </div>
    </div>
  );
}
