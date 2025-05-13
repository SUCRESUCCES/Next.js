import Image from "next/image";
// import 사진 from "/public/food1.jpg"; // 아니면 @/public/food1.jpg

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
            <img src={`/food${i}.jpg`} className="food-img" />

            {/* <Image src={사진} className="food-img" /> */}

            {/* 외부이미지 사용시 */}
            {/* <Image src="https://어쩌고~" width={500} height={400} className="food-img" /> */}
            <h4>{a} $40</h4>
            {/* <h4>{상품[i]} $40</h4> */}
            {/* {상품[i]} == {a} */}
          </div>
        );
      })}
    </div>
  );
}
