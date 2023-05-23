const onClickAdd = () => {
  //テキストボックスの値を変数に格納
  const inputText = document.getElementById("add-text").value;
  //追加後に初期化
  document.getElementById("add-text").value = "";
  //アラートに表示
  alert(inputText);

  //div生成
  const div = document.createElement("div");
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
