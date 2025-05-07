export default function Home() {
  let name = "sucresucces";
  let link = "http://google.com";
  return (
    // return() 안에 HTML 넣을 때
    // 1개 <태그>로 시작해서 끝나야함
    <div>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by {name}</p>
      <a href={link} style={{ color: "red", fontSize: "30px" }}>
        {" "}
        링크
      </a>
    </div>
  );
}
